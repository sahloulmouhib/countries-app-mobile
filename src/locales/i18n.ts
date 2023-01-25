import { initReactI18next } from 'react-i18next';

import i18n from 'i18next';

import en from '_languages/en';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: {
    en: {
      translation: en,
    },
  },
  lng: 'en',
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false,
  },
});
export function strings(name: string, params = {}) {
  return i18n.t(name, params);
}
