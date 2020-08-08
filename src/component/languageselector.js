// src/components/LanguageSelector.js
import React from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="LanguageSelector">
      <button onClick={() => changeLanguage("hi")} className="btn btn-link" >हिन्दी</button>
      <button onClick={() => changeLanguage("en")} className="btn btn-link" >English</button>
    </div>
  );
}