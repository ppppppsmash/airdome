"use client";
import "../../../i18n";
import { useTranslation } from "react-i18next";

const I18n = () => {
  const { t, i18n } = useTranslation();

  const en = t('hello');

  const ja = t('こんにちは');

  const handleLanguageChange = (lng: string) => {
    i18n.changeLanguage(lng);
  }

  return (
    <>
      <button onClick={()=>handleLanguageChange('en')}>EN</button>
      <button onClick={()=>handleLanguageChange('ja')}>JA</button>

      {i18n.language === 'en' ?
        en : ja
      }
    </>
  );
}

export default I18n;
