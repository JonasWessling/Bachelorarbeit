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

  return (
    <div
      className="searchbar mt-3 mb-6 is-flex is-align-items-center"
      style={{ width: "600px" }}
    >
      <div className="search-input-wrapper">
        <input
          type="text"
          aria-label="Search"
          placeholder={t("search")}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        {query.length > 0 && (
          <button
            className="clear-btn"
            onClick={clearQuery}
            aria-label="Clear input"
          >
            <ClearIcon aria-hidden="true" />
          </button>
        )}
      </div>

      <button
        className="search-btn"
        onClick={() => navigate("/books")}
        aria-label="Search"
      >
        <SearchIcon aria-hidden="true" />
      </button>
    </div>
  );
};

export default SearchBar;
