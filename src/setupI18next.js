import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

function setupI18next(fallbackLng, i18nextOptions, uses = []) {
  let i18nextWithUses = i18next.use(initReactI18next);

  uses.forEach(use => i18nextWithUses = i18nextWithUses.use(use));

  i18nextWithUses.init({
    debug: false,
    defaultNS: 'messages',
    fallbackLng,
    ...i18nextOptions,
  });

  return i18next;
}

export default setupI18next;
