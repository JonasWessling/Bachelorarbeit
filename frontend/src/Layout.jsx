import { useLocation } from "react-router";
import { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import { routes } from "./routes.jsx";
import Footer from "./components/Footer.jsx";

const Layout = () => {
  const location = useLocation();
  const hideNavBarOn = ["/login", "/register"];
  const hideFooterOn = ["/login", "/register"];
  const showFooter = !hideFooterOn.includes(location.pathname);
  const showNav = !hideNavBarOn.includes(location.pathname);
  const savedSettings = localStorage.getItem("fontSettings");

  useEffect(() => {
    handleLoadSettingsOnMount();
  }, []);

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
      {showNav && <Navbar />}
      <main className="app-content">{routes}</main>
      {showFooter && <Footer />}
    </div>
  );
};

export default Layout;
