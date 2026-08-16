import { BrowserRouter } from "react-router";
import ModalProvider from "./components/modal/ModalProvider.jsx";
import { useState, useEffect } from "react";
import "./localization/config/i18n";
import { useTranslation } from "react-i18next";
import Layout from "./Layout.jsx";
import { ThemeProvider } from "./provider/ThemeProvider.jsx";

const App = () => {
  const { i18n } = useTranslation();
  const prefLang = localStorage.getItem("prefLang");

  useEffect(() => {
    if (prefLang && prefLang !== "" && prefLang !== i18n.language) {
      i18n
        .changeLanguage(prefLang)
        .then(() => (document.documentElement.lang = prefLang));
    }
  }, []);

  return (
    <BrowserRouter>
      <ThemeProvider>
        <ModalProvider>
          <Layout />
        </ModalProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
