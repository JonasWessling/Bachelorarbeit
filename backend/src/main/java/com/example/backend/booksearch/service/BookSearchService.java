package com.example.backend.booksearch.service;

import com.example.backend.booksearch.model.Book;
import com.example.backend.booksearch.model.BookSearchResponse;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;

@Service
public class BookSearchService {

    private final RestTemplate restTemplate;
    private final ObjectMapper objectMapper;

    public BookSearchService(RestTemplate restTemplate, ObjectMapper objectMapper) {
        this.restTemplate = restTemplate;
        this.objectMapper = objectMapper;
    }

    public BookSearchResponse searchBooks(String searchTerm) {

        int limit = 10;
        String apiUrl = "https://openlibrary.org/search.json?q="
                + URLEncoder.encode(searchTerm, StandardCharsets.UTF_8)
                + "&limit=" + limit;

        try {
            String responseBody = restTemplate.getForObject(apiUrl, String.class);

            if (responseBody == null || responseBody.isBlank()) {
                return new BookSearchResponse(List.of());
            }

            JsonNode root = objectMapper.readTree(responseBody);
            JsonNode docs = root.path("docs");

            List<Book> books = new ArrayList<>();

            for (JsonNode doc : docs) {
                books.add(mapBook(doc));
            }

            return new BookSearchResponse( books);

        } catch (Exception e) {
            throw new RuntimeException("Error occurred while searching for books: " + e.getMessage(), e);
        }
    }

    private Book mapBook(JsonNode doc) {

        String title = doc.path("title").asText(null);

        String description = doc.path("first_sentence").asText(null);

        List<String> images = new ArrayList<>();

        JsonNode coverNode = doc.path("cover_i");
        if (coverNode.isInt()) {
            int coverId = coverNode.asInt();
            images.add("https://covers.openlibrary.org/b/id/" + coverId + "-M.jpg");
        }

        String isbn = "";
        JsonNode isbnNode = doc.path("lending_identifier_s");
        if (isbnNode.isArray() && isbnNode.size() > 0) {
            isbn = isbnNode.get(0).asText();
            images.add("https://covers.openlibrary.org/b/isbn/" + isbn + "-M.jpg");
        }

        String key = doc.path("key").asText(null);
        String url = key != null ? "https://openlibrary.org" + key : null;

        String publishDate = null;
        JsonNode dateNode = doc.path("publish_date");
        if (dateNode.isArray() && dateNode.size() > 0) {
            publishDate = dateNode.get(0).asText();
        }

        return new Book(
                isbn,
                title,
                publishDate,
                description,
                url,
                images
        );
    }
}

