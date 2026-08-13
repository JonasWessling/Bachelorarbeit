import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router";
import { useEffect, useRef, useState } from "react";
import { loadBooks } from "../common/bookSearch.js";
import BookCard from "../components/uicomponents/BookCard.jsx";

const BookPage = () => {
  const { t, i18n } = useTranslation();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) {
      setBooks([]);
      setLoading(false);
      setError(null);
      return;
    }

    fetchBooks();
  }, [query]);

  useEffect(() => {
    if (query) {
      setBooks([]);
      fetchBooks();
    }
  }, [i18n.language]);

  const fetchBooks = () => {
    setLoading(true);
    setError(null);

    loadBooks(query, i18n.language)
      .then((data) => {
        setBooks(data.results || []);
      })
      .catch((error) => {
        console.log(error);
        setError("Failed to load books.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <h1>{t("bookPage.title")}</h1>
      <p>{t("bookPage.description")}</p>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && query && books.length === 0 && (
        <p>No books found.</p>
      )}

      {books.map((book) => (
        <BookCard key={book.id || `${book.title}-${book.date}`} book={book} />
      ))}
    </div>
  );
};

export default BookPage;
