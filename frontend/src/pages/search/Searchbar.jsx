import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

const SearchBar = () => {
  const { t } = useTranslation();
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const clearQuery = () => setQuery("");

  const handleClick = () => {
    const q = query.toLowerCase().trim().replace(" ", "+");
    console.log(q);
    navigate(`/books?q=${q}`);
  };

  return (
    <div
      className="searchbar mt-3 mb-6 is-flex is-align-items-center"
      style={{ width: "600px" }}
    >
      <div className="search-input-wrapper">
        <input
          type="text"
          aria-label={t("search")}
          placeholder={t("search")}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleClick()}
        />

        {query.length > 0 && (
          <button
            className="clear-btn"
            onClick={clearQuery}
            aria-label={t("clearInput")}
          >
            <ClearIcon aria-hidden="true" />
          </button>
        )}
      </div>

      <button
        className="search-btn"
        onClick={handleClick}
        aria-label={t("search")}
      >
        <SearchIcon aria-hidden="true" />
      </button>
    </div>
  );
};

export default SearchBar;
