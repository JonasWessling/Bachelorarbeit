import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { useTranslation } from "react-i18next";

const SearchBar = () => {
  const { t } = useTranslation();
  const [query, setQuery] = useState("");

  const clearQuery = () => setQuery("");

  return (
    <div
      className="searchbar mt-3 is-flex is-align-items-center"
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
          <button className="clear-btn" onClick={clearQuery}>
            <ClearIcon />
          </button>
        )}
      </div>

      <button className="search-btn">
        <SearchIcon />
      </button>
    </div>
  );
};

export default SearchBar;
