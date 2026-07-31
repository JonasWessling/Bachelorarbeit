import { BrowserRouter, Routes, useLocation } from "react-router";
import { routes } from "./routes.jsx";
import Navbar from "./components/Navbar.jsx";
import ModalProvider from "./components/modal/ModalProvider.jsx";
import { useState, useEffect } from "react";
import "./localization/config/i18n";

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
  const hideNavBarOn = ["/404"];
  const show = !hideNavBarOn.includes(location.pathname);
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

  return (
    <div>
      {show && (
        <Navbar theme={theme} setTheme={(theme) => setAndSaveTheme(theme)} />
      )}
      <Routes>{routes}</Routes>
    </div>
  );
};
