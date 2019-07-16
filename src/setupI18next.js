import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

const I18N_LANG_LOCALSTORAGE_KEY = 'i18n_lang';

const getUrlLanguage = () => {
  const matchResult = location.pathname.match(/^\/([a-z]{2})\//);
  if (matchResult) {
    const [, langFromUrl] = matchResult;
    return langFromUrl;
  }

  return null;
};

const languageDetector = ({ availableLanguages = [], defaultLanguage = 'en' }) => {
  const langFromUrl = getUrlLanguage();
  if (langFromUrl) {
    if (availableLanguages.includes(langFromUrl)) {
      return langFromUrl;
    }
  }

  const langFromLocalStorage = localStorage.getItem(I18N_LANG_LOCALSTORAGE_KEY);
  if (langFromLocalStorage) {
    return langFromLocalStorage;
  }

  if (typeof window !== 'undefined' && window.navigator && window.navigator.language) {
    const langFromLocale = window.navigator.language.slice(0, 2);
    if (availableLanguages.includes(langFromUrl)) {
      return langFromLocale;
    }
  }

  return defaultLanguage;
};

function setupI18next(fallbackLng, i18nextOptions) {
  let i18nextWithUses = i18next.use(initReactI18next);

  if (i18nextOptions.allowLanguageDetector) {
    i18nextWithUses.use({
      type:  'languageDetector',
      detect: languageDetector.bind(null, i18nextOptions),
      init: () => {},
      cacheUserLanguage: () => {},
    });
  }

  i18nextWithUses.init({
    debug: false,
    defaultNS: 'messages',
    fallbackLng,
    ...i18nextOptions,
  });

  return i18next;
}

export default setupI18next;
