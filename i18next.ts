// i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import your translations
import translations_en from "./locales/en.json";
import translations_ge from "./locales/ge.json";
const selectedLanguage = localStorage.getItem("i18nextLng");

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: translations_en,
      },
      ge: {
        translation: translations_ge,
      },
    },
    lng: selectedLanguage || "en", // default language
    fallbackLng: "en", // fallback language if translation isn't found
    interpolation: {
      escapeValue: false, // React already does escaping
    },
  });

export default i18n;
