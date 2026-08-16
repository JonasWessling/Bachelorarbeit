import { createContext, useContext, useState, useEffect, useRef } from "react";

const ThemeContext = createContext(null);

export const Themes = Object.freeze({
  DarkMode: "dark",
  LightMode: "light",
  HighContrast: "highContrast",
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved || Themes.LightMode;
  });

  useEffect(() => {
    document.body.classList.remove("dark-mode", "high-contrast");

    if (theme === Themes.DarkMode) {
      document.body.classList.add("dark-mode");
    }
    if (theme === Themes.HighContrast) {
      document.body.classList.add("high-contrast");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
