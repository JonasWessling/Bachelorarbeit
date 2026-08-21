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

  const allowedLabels = [
    t("foodRules.allowed.fingerfood"),
    t("foodRules.allowed.sweets"),
    t("foodRules.allowed.granola"),
    t("foodRules.allowed.fruits"),
    t("foodRules.allowed.nuts"),
    t("foodRules.allowed.bread"),
    t("foodRules.allowed.nonAlcoholic"),
  ];

  const forbiddenLabels = [
    t("foodRules.forbidden.warm"),
    t("foodRules.forbidden.cans"),
    t("foodRules.forbidden.yogurt"),
    t("foodRules.forbidden.icecream"),
    t("foodRules.forbidden.pizza"),
    t("foodRules.forbidden.sticky"),
    t("foodRules.forbidden.smelly"),
  ];

  const [allowed, setAllowed] = useState(null);
  const [forbidden, setForbidden] = useState(null);

  useEffect(() => {
    loadImage(theme, lang, "allowed").then(setAllowed);
    loadImage(theme, lang, "forbidden").then(setForbidden);
  }, [theme, lang]);

  return (
    <>
      <div className="is-flex is-flex-direction-row is-gap-2 is-align-items-center">
        <div style={{ width: "350px" }}>
          <img src={allowed} alt="" />
        </div>

        <div className="food-rules-block allowed">
          <ul>
            {allowedLabels.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="is-flex is-flex-direction-row is-gap-2 is-align-items-center">
        <div style={{ width: "350px" }}>
          <img src={forbidden} alt="" />
        </div>

        <div className="food-rules-block forbidden">
          <ul>
            {forbiddenLabels.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default FoodRules;
