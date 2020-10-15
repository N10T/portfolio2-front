import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

export default function i18nInit(resources,lng) {
   i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: resources,
    lng: lng ? lng : ["fr","en"],
    // fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });
}