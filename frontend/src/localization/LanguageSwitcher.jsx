import { useTranslation } from "react-i18next";
import { useState, useRef, useEffect } from "react";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang).then(() => {
      document.documentElement.lang = lang;
    });
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="dropdown language-switcher" ref={dropdownRef}>
      <button
        className={`dropdown__trigger ${isOpen ? "is-open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {i18n.language.toUpperCase()}
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
        >
          <path d="M4 6L8 10L12 6" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      <ul className={`dropdown__menu ${isOpen ? "is-open" : ""}`}>
        <li className="dropdown__item">
          <button
            onClick={() => handleLanguageChange("en")}
            className={i18n.language === "en" ? "is-active" : ""}
          >
            English
          </button>
        </li>
        <li className="dropdown__item">
          <button
            onClick={() => handleLanguageChange("de")}
            className={i18n.language === "de" ? "is-active" : ""}
          >
            Deutsch
          </button>
        </li>
      </ul>
    </div>
  );
};

export default LanguageSwitcher;
