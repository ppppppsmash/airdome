import React from 'react';
import { useTranslations } from 'next-intl';
import { LanguageIcon } from "@heroicons/react/24/solid";

const TranslateButton = () => {


  return (
    <a
      className="mr-5 inline-block border-r border-border pr-5 text-xl text-dark hover:text-primary dark:border-darkmode-border dark:text-white"
      href="/"
      aria-label="language"
    >
      <p className="flex">
        <LanguageIcon className="w-5 h-5" />
          <span className="text-sm">CN</span>
      </p>
    </a>
  );
};

export default TranslateButton;
