import { useTranslation } from "react-i18next";
import { useState, useRef, useEffect } from "react";
import LanguageIcon from "@mui/icons-material/Language";

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setIsOpen(false);
    localStorage.setItem("prefLang", lang);
  };

  useEffect(() => {
    const prefLang = localStorage.getItem("prefLang");
    if (prefLang) {
      setLanguage(prefLang);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const setLanguage = (lang) => {
    i18n
      .changeLanguage(lang)
      .then(() => (document.documentElement.lang = lang));
  };

  return (
    <div className="languageDropdown language-switcher" ref={dropdownRef}>
      <button
        className={`languageDropdown__trigger ${isOpen ? "is-open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <LanguageIcon />
        {i18n.language.toUpperCase()}
        <svg
          className="languageDropdown__chevron"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
        >
          <path d="M4 6L8 10L12 6" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      <ul className={`languageDropdown__menu ${isOpen ? "is-open" : ""}`}>
        <li className="languageDropdown__item">
          <button
            onClick={() => handleLanguageChange("en")}
            className={i18n.language === "en" ? "is-active" : ""}
          >
            {t("english")}
          </button>
        </li>
        <li className="languageDropdown__item">
          <button
            onClick={() => handleLanguageChange("de")}
            className={i18n.language === "de" ? "is-active" : ""}
          >
            {t("german")}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default LanguageSwitcher;
