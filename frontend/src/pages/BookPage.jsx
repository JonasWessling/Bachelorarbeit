import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router";
import { useEffect, useState } from "react";
import { loadBooks } from "../common/BookSearch.js";
import BookCard from "../components/uicomponents/BookCard.jsx";

const BookPage = () => {
  const { t } = useTranslation();
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

    setLoading(true);
    setError(null);

    loadBooks(query)
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
  }, [query]);

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
