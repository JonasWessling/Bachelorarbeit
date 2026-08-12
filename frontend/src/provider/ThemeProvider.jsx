import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const savedSettings = localStorage.getItem("fontSettings");
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved || "light";
  });

  useEffect(() => {
    document.body.classList.toggle("dark-mode", theme === "dark");
    localStorage.setItem("theme", theme);
    handleHighContrast();
  }, [theme]);

  const handleHighContrast = () => {
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

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
