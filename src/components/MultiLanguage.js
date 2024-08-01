import React from "react";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../helpers/const";

export function MultiLanguage() {
  const { i18n, t } = useTranslation();
  const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
  };
  return (
    <>
      <select defaultValue={i18n.language} onChange={onChangeLang}>
        {LANGUAGES.map((value, i) => (
          <option value={value.code}>{value.label}</option>
        ))}
      </select>
      <h3>{t("TheCowHeader")}</h3>
      <div>{t("TheCowDesc")}</div>
    </>
  );
}
