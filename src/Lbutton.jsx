import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleChange = (e) => {
    const selectedLang = e.target.value;
    i18n.changeLanguage(selectedLang);
  };

  return (
    <div className="flex items-center -translate-x-8">
      <select
        onChange={handleChange}
        value={i18n.language}
        className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white shadow-sm dark:bg-black dark:text-white"
      >
        <option value="en">English</option>
        <option value="ru">Russia</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
