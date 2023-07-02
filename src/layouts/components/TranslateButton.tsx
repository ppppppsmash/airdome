"use client";
import React, { useEffect, useState } from 'react';
import { LanguageIcon } from "@heroicons/react/24/solid";
import { useTranslation } from 'react-i18next';

const TranslateButton = () => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  useEffect(() => {
    setCurrentLanguage(i18n.language);
  }, [i18n.language]);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const handleChangeLanguage = () => {
    if (currentLanguage === 'ja') {
      changeLanguage('cn');
      setCurrentLanguage('cn');
    } else {
      changeLanguage('ja');
      setCurrentLanguage('ja');
    }
  };

  return (
    <a
      className="mr-5 inline-block border-r border-border pr-5 text-xl text-dark hover:text-primary dark:border-darkmode-border dark:text-white"
      href="/"
      aria-label="language"
      onClick={handleChangeLanguage}
    >
      <p className="flex">
        <LanguageIcon className="w-5 h-5" />
        {currentLanguage === 'ja' ? (
          <span className="text-sm">JA</span>
        ) : (
          <span className="text-sm">CN</span>
        )}
      </p>
    </a>
  );
};

export default TranslateButton;
