// src/i18n.ts

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

// Translation files can be imported directly for a basic setup
import translationEN from "./locales/en/translation.json";
import translationRU from "./locales/ru/translation.json";
import translationCN from "./locales/cn/translation.json";

const resources = {
  en: {
    translation: translationEN,
  },
  ru: {
    translation: translationRU,
  },
  cn: {
    translation: translationCN,
  },
};

i18n
  .use(HttpApi) // if you use a backend to load translations
  .use(LanguageDetector) // detect user language
  .use(initReactI18next) // pass the i18n instance to react-i18next
  .init({
    resources,
    fallbackLng: "ru", // default language
    detection: {
      order: ["localStorage", "cookie"],
      caches: ["localStorage", "cookie"],
    },
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
