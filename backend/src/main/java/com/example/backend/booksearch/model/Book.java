package com.example.backend.booksearch.model;

import java.util.List;

public record Book(
        String id,
        String title,
        String date,
        String description,
        String url,
        List<String> images
) {
}
