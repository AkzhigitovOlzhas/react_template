import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

export enum LanguageType {
  RU = 'ru',
  EN = 'en',
}

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: LanguageType.RU,
    debug: Boolean(process.env.REACT_APP_I18NEXT_DEBUG),
  });

export const changeLanguage = (language: LanguageType) => i18n.changeLanguage(language);

export default i18n;
