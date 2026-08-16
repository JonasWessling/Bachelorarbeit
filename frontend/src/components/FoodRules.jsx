import { useTranslation } from "react-i18next";
import { Themes, useTheme } from "../provider/ThemeProvider.jsx";
import { useEffect, useState } from "react";

const FoodRules = () => {
  const { i18n, t } = useTranslation();
  const { theme } = useTheme();

  const lang = i18n.language.startsWith("de") ? "de" : "en";

  const loadImage = async (theme, lang, type) => {
    if (theme === Themes.HighContrast) {
      theme = Themes.DarkMode;
    }
    try {
      const img = await import(
        `../assets/images/foodRules/${theme}/${lang}/${type}.png`
      );
      return img.default;
    } catch {
      const fallback = await import(
        `../assets/images/foodRules/light/de/${type}.png`
      );
      return fallback.default;
    }
  };

  const [allowed, setAllowed] = useState(null);
  const [forbidden, setForbidden] = useState(null);

  useEffect(() => {
    loadImage(theme, lang, "allowed").then(setAllowed);
    loadImage(theme, lang, "forbidden").then(setForbidden);
  }, [theme, lang]);

  return (
    <div>
      <div className="is-width-40-percent">
        <h2 className="title">{t("foodRules")}</h2>
      </div>
      <div style={{ width: "350px" }} className="is-flex is-gap-2 mt-5">
        <img src={allowed} alt={t("foodRulesAllowedAlt")} />
        <img src={forbidden} alt={t("foodRulesForbiddenAlt")} />
      </div>
    </div>
  );
};

export default FoodRules;
