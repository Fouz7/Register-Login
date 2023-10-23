import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Pages/Landing.jsx'
import './index.css'
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './i18n/en.json'
import idTranslation from './i18n/id.json'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      id:{
        translation: idTranslation,
      }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
