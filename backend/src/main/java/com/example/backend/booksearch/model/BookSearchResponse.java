package com.example.backend.booksearch.model;

import java.util.List;

public record BookSearchResponse(
        List<Book> results
) {
}
