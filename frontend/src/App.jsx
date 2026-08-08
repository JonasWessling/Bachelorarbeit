import { BrowserRouter, useLocation } from "react-router";
import { routes } from "./routes.jsx";
import Navbar from "./components/Navbar.jsx";
import ModalProvider from "./components/modal/ModalProvider.jsx";
import { useState, useEffect } from "react";
import "./localization/config/i18n";
import Footer from "./components/Footer.jsx";
import { useTranslation } from "react-i18next";

const App = () => {
  const { i18n } = useTranslation();
  const prefLang = localStorage.getItem("prefLang");

  useEffect(() => {
    if (prefLang && prefLang !== "" && prefLang !== i18n.language) {
      i18n
        .changeLanguage(prefLang)
        .then(() => (document.documentElement.lang = prefLang));
    }
  });

  return (
    <BrowserRouter>
      <ModalProvider>
        <Layout />
      </ModalProvider>
    </BrowserRouter>
  );
};

export default App;

const Layout = () => {
  const location = useLocation();
  const hideNavBarOn = ["/login", "/register"];
  const hideFooterOn = ["/login", "/register"];
  const showFooter = !hideFooterOn.includes(location.pathname);
  const showNav = !hideNavBarOn.includes(location.pathname);
  const prefTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(prefTheme || "light");
  const savedSettings = localStorage.getItem("fontSettings");

  useEffect(() => {
    handleThemeChange();
  }, [theme]);

  useEffect(() => {
    handleLoadSettingsOnMount();
  }, []);

  const setAndSaveTheme = (theme) => {
    localStorage.setItem("theme", theme);
    setTheme(theme);
  };

  const handleThemeChange = () => {
    document.body.classList.toggle("dark-mode", theme === "dark");
    localStorage.setItem("theme", theme);
    try {
      if (savedSettings) {
        const settings = JSON.parse(savedSettings);
        settings.highContrast = false;
        localStorage.setItem("fontSettings", JSON.stringify(settings));
      }
    } catch (error) {
      console.error("Error loading font settings:", error);
    }
    document.body.classList.toggle("high-contrast", false);
  };

  const handleLoadSettingsOnMount = () => {
    try {
      if (savedSettings) {
        const settings = JSON.parse(savedSettings);
        document.documentElement.style.setProperty(
          "--font-size",
          settings.fontSize,
        );
        document.documentElement.style.setProperty(
          "--font-family",
          settings.fontFamily,
        );
        document.documentElement.style.setProperty(
          "--line-height",
          settings.lineHeight,
        );
        document.body.classList.toggle("high-contrast", settings.highContrast);
      }
    } catch (error) {
      console.error("Error loading font settings:", error);
    }
  };

  return (
    <div className="app-layout">
      {showNav && (
        <Navbar theme={theme} setTheme={(theme) => setAndSaveTheme(theme)} />
      )}
      <main className="app-content">{routes}</main>
      {showFooter && <Footer />}
    </div>
  );
};
