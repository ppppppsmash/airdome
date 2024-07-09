import React from 'react';
import { useRouter } from 'next/navigation';
import { LanguageIcon } from "@heroicons/react/24/solid";

const TranslateButton = () => {
  const router = useRouter();

  const handleLanguageChange = (lng: string) => {
    router.push(`/?lang=${lng}`);
  };

  return (
    <div
      className="mr-5 inline-block border-r border-border pr-5 text-xl text-dark hover:text-primary dark:border-darkmode-border dark:text-white"
      aria-label="language"
      onClick={() => handleLanguageChange('ja')}
    >
      <p className="flex">
        <LanguageIcon className="w-5 h-5" />
          <span className="text-sm">CN</span>
      </p>
    </div>
  );
};

export default TranslateButton;
