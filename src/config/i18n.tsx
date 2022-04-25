import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enJson from "../locale/en.json";

i18n.use(initReactI18next).init({
  resources: {
    EN: {
      translation: enJson,
    },
  },
  lng: "EN",
  interpolation: {
    escapeValue: false,
  },
  debug: false,
});

export default i18n;
