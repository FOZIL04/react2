import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import data from "./translate.json"
i18n.use(initReactI18next).init({
    resources: data,
    lng: "uz",
    fallbackLng: "uz",
    interpolation: {
        escapeValue: false
    }
});

export default i18n;