import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "../../assets/translations/english.json";
import geTranslation from "../../assets/translations/german.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    de: { translation: geTranslation },
  },
  lng: "de",
  fallbackLng: "de",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
