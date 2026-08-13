package com.example.backend.booksearch.model;

import java.util.List;

public record BookSearchResponse(
        String pagination,
        List<Book> results
) {
}
