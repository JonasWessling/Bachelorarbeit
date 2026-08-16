import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "../../assets/translations/english.json";
import geTranslation from "../../assets/translations/german.json";
import easyEnTranslation from "../../assets/translations/easyLang/easyEnglish.json";
import easyGeTranslation from "../../assets/translations/easyLang/easyGerman.json";

i18n.use(initReactI18next).init({
  resources: {
    "en-ES": { translation: easyEnTranslation },
    "de-ES": { translation: easyGeTranslation },
    en: { translation: enTranslation },
    de: { translation: geTranslation },
  },
  lng: "de",
  fallbackLng: "de",
  supportedLngs: ["en", "de", "en-ES", "de-ES"],
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
