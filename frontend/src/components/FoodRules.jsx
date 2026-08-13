import Allowed_de from "../assets/images/Allowed_de.png";
import Forbidden_de from "../assets/images/Forbidden_de.png";

import Allowed_en from "../assets/images/Allowed_en.png";
import Forbidden_en from "../assets/images/Forbidden_en.png";

import Allowed_de_dark from "../assets/images/Allowed_de_dark.png";
import Forbidden_de_dark from "../assets/images/Forbidden_de_dark.png";

import Allowed_en_dark from "../assets/images/Allowed_en_dark.png";
import Forbidden_en_dark from "../assets/images/Forbidden_en_dark.png";
import { useTranslation } from "react-i18next";
import { useTheme } from "../provider/ThemeProvider.jsx";

const FoodRules = () => {
  const { i18n, t } = useTranslation();
  const { theme } = useTheme();

  const lang = i18n.language.startsWith("de") ? "de" : "en";

  const imageMap = {
    light: {
      de: { allowed: Allowed_de, forbidden: Forbidden_de },
      en: { allowed: Allowed_en, forbidden: Forbidden_en },
    },
    dark: {
      de: { allowed: Allowed_de_dark, forbidden: Forbidden_de_dark },
      en: { allowed: Allowed_en_dark, forbidden: Forbidden_en_dark },
    },
  };

  const current = imageMap[theme]?.[lang] ?? imageMap.light.de;

  return (
    <div>
      <div className="is-width-40-percent">
        <h2 className="title">{t("foodRules")}</h2>
      </div>
      <div style={{ width: "350px" }} className="is-flex is-gap-2 mt-5">
        <img src={current.allowed} alt={t("foodRulesAllowedAlt")} />
        <img src={current.forbidden} alt={t("foodRulesForbiddenAlt")} />
      </div>
    </div>
  );
};
export default FoodRules;
