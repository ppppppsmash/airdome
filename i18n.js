// i18n.js

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// 言語データをインポートするか、APIから取得するなどの方法で設定します
const resources = {
  en: {
    translation: {
      hello: 'Hello',
      goodbye: 'Goodbye',
    },
  },
  ja: {
    translation: {
      hello: 'こんにちは',
      goodbye: 'さようなら',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'ja', // 初期言語
  interpolation: {
    escapeValue: false,
  },
})

export default i18n;
