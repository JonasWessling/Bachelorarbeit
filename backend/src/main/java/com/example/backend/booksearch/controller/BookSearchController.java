package com.example.backend.booksearch.controller;

import com.example.backend.booksearch.model.BookSearchResponse;
import com.example.backend.booksearch.service.BookSearchService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api")
public class BookSearchController {

    private final BookSearchService bookSearchService;

    public BookSearchController(BookSearchService bookSearchService) {
        this.bookSearchService = bookSearchService;
    }

    @GetMapping("/search")
    public ResponseEntity<BookSearchResponse> searchBooks(@RequestParam String query) {
        return ResponseEntity.ok(bookSearchService.searchBooks(query));
    }
}
