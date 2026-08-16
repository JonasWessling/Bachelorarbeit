package com.example.backend.booksearch.service;

import com.example.backend.booksearch.model.Book;
import com.example.backend.booksearch.model.BookSearchResponse;
import com.example.backend.utils.LocaleOptimizer;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

@Service
public class BookSearchService {

    private static final String URL = "https://www.loc.gov/books/";

    private final RestTemplate restTemplate;
    private final ObjectMapper objectMapper;

    private String count = "&c=10";
    private String format = "&fo=json";

    public BookSearchService(RestTemplate restTemplate, ObjectMapper objectMapper) {
        this.restTemplate = restTemplate;
        this.objectMapper = objectMapper;
    }

    public BookSearchResponse searchBooks(String searchTerm, Locale locale) {

        String lang = "&fa=language:" + LocaleOptimizer.getUrlLangValue(locale);

        String apiUrl = URL + "?q=" + URLEncoder.encode(searchTerm, StandardCharsets.UTF_8) + lang + count + format;


        try {
            String responseBody = restTemplate.getForObject(apiUrl, String.class);
            if (responseBody == null || responseBody.isBlank()) {
                return new BookSearchResponse(null, List.of());
            }

            JsonNode root = objectMapper.readTree(responseBody);
            JsonNode content = root.path("content");
            List<Book> books = new ArrayList<>();

            for (JsonNode result : content.path("results")) {
                books.add(mapBook(result));
            }


            return new BookSearchResponse(content.path("pagination").asText(null), books);
        } catch (Exception e) {
            throw new RuntimeException("Error occurred while searching for books: " + e.getMessage(), e);
        }
    }


    private Book mapBook(JsonNode result) {
        String description = null;
        JsonNode descriptionNode = result.path("description");
        if (descriptionNode.isArray()) {
            List<String> descriptions = new ArrayList<>();
            for (JsonNode entry : descriptionNode) {
                descriptions.add(entry.asText());
            }
            description = String.join(" ", descriptions);
        } else if (!descriptionNode.isMissingNode()) {
            description = descriptionNode.asText(null);
        }

        String url = result.path("url").asText(null);
        if (url != null && url.startsWith("//")) {
            url = "https:" + url;
        }


        return new Book(
                result.path("number_lccn").get(0).asText(),
                result.path("title").asText(null),
                result.path("date").asText(null),
                description,
                url,
                getImages(result)
        );
    }


    private List<String> getImages(JsonNode result) {
        List<String> images = new ArrayList<>();

        JsonNode imagesNode = result.path("image_url");
        if (imagesNode.isArray()) {
            for (JsonNode entry : imagesNode) {
                images.add(entry.asText());
            }
        }

        JsonNode resourceNode = result.path("resources");
        if (resourceNode.isArray()) {
            for (JsonNode res : resourceNode) {
                JsonNode image = res.path("image");
                if (image.isArray()) {
                    for (JsonNode entry : image) {
                        images.add(entry.asText());
                    }
                }
                if (image.isTextual()) {
                    images.add(image.asText());
                }
            }
        }

        JsonNode links = result.path("links");
        if (links.isArray()) {
            for (JsonNode link : links) {
                JsonNode image = link.path("image");
                if (!image.isMissingNode()) {
                    images.add(image.asText());
                }
            }
        }

        JsonNode item = result.path("item");
        if (!item.isMissingNode()) {
            JsonNode thumb = item.path("thumbnail");
            if (!thumb.isMissingNode()) {
                images.add(thumb.asText());
            }
        }
        return images;
    }
}
