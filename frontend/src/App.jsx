import { BrowserRouter, Routes, useLocation } from "react-router";
import { routes } from "./routes.jsx";
import Navbar from "./components/Navbar.jsx";
import ModalProvider from "./components/modal/ModalProvider.jsx";
import { useState, useEffect } from "react";
import "./localization/config/i18n";
import Footer from "./components/Footer.jsx";

const App = () => {
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
  const hideNavBarOn = ["/login"];
  const hideFooterOn = ["/login"];
  const showFooter = !hideFooterOn.includes(location.pathname);
  const showNav = !hideNavBarOn.includes(location.pathname);
  const prefTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(prefTheme || "light");

  useEffect(() => {
    document.body.classList.toggle("dark-mode", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const setAndSaveTheme = (theme) => {
    localStorage.setItem("theme", theme);
    setTheme(theme);
  };

  useEffect(() => {
    try {
      const savedSettings = localStorage.getItem("fontSettings");
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
  }, []);

  return (
    <div className="app-layout">
      {showNav && (
        <Navbar theme={theme} setTheme={(theme) => setAndSaveTheme(theme)} />
      )}
      <main className="app-content">
        <Routes>{routes}</Routes>
      </main>
      {showFooter && <Footer />}
    </div>
  );
};
