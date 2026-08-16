import { createContext, useContext, useState, useEffect, useRef } from "react";

const ThemeContext = createContext(null);

export const Themes = Object.freeze({
  DarkMode: "dark",
  LightMode: "light",
  HighContrast: "highContrast",
});

export const ThemeProvider = ({ children }) => {
  const savedSettings = localStorage.getItem("fontSettings");
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved || Themes.LightMode;
  });

  const prevTheme = useRef(theme);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", theme === Themes.DarkMode);
    localStorage.setItem("theme", theme);

    if (prevTheme.current !== theme) {
      handleHighContrast();
    }
    prevTheme.current = theme;
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
