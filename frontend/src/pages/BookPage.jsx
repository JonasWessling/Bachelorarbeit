import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router";
import { useEffect, useState } from "react";
import { loadBooks } from "../common/bookSearch.js";
import BookCard from "../components/uicomponents/BookCard.jsx";
import { Skeleton } from "@mui/material";
import { Themes, useTheme } from "../provider/ThemeProvider.jsx";

const BookPage = () => {
  const { t, i18n } = useTranslation();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const { theme } = useTheme();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (query) {
      fetchBooks(query, i18n.resolvedLanguage);
    }
  }, [query]);

  const fetchBooks = (query, locale) => {
    setLoading(true);
    setError(null);

    loadBooks(query, locale)
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

  const BookCardSkeleton = () => {
    const style = {
      height: "16px",
      width: "40%",
      borderRadius: "4px",
      marginBottom: "16px",
    };

    return (
      <div className="book-card">
        <div className="book-card__image">
          <Skeleton
            variant="rounded"
            width={120}
            height={180}
            animation="wave"
            sx={theme === Themes.HighContrast ? { bgcolor: "grey.900" } : {}}
          />
        </div>

        <div className="book-card__content">
          <Skeleton style={style} variant="rounded" animation="wave" />

          <Skeleton
            style={{
              height: "14px",
              width: "100%",
              borderRadius: "4px",
              marginBottom: "8px",
            }}
            variant="rounded"
            animation="wave"
          />

          <Skeleton
            style={{
              height: "14px",
              width: "80%",
              borderRadius: "4px",
            }}
            variant="rounded"
            animation="wave"
          />
        </div>
      </div>
    );
  };

  const errorSection = () => {
    return (
      <div className="is-flex is-justify-content-center">
        <div className="p-5 has-text-centered" style={{ maxWidth: "420px" }}>
          <p className="mt-3 mb-2">{t("error")}</p>
        </div>
      </div>
    );
  };

  const bookResultText = () => {
    if (loading) {
      return t("bookPage.loading");
    }
    if (books.length > 0) {
      return t("bookPage.resultAmount", { count: books.length });
    }
    return t("bookPage.noResults");
  };

  return (
    <div className="content-padding">
      <section className="landing-hero rounded">
        <div className="landing-hero__content">
          <h1 className="is-accent-h1">
            {t("bookPage.title", { searchTerm: query })}
          </h1>
          <p className="landing-hero__text">{bookResultText()}</p>
        </div>
      </section>
      {loading
        ? Array.from({ length: 6 }, (_, i) => <BookCardSkeleton key={i} />)
        : null}
      {books.map((book) => (
        <BookCard key={book.id || `${book.title}-${book.date}`} book={book} />
      ))}
      {error && errorSection()}
      <div className="mt-5 is-flex is-justify-content-center">
        <button className={"btn btn-secondary rounded"}>
          {books.length > 0 ? t("moreResults") : t("goHome")}
        </button>
      </div>
    </div>
  );
};

export default BookPage;
