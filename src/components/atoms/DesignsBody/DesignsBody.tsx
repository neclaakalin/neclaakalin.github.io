import React from "react";
import { useTranslation } from "react-i18next";

const DesignsBody = () => {
  const { t } = useTranslation();

  return (
    <>
      <h1>{t("designs.header")}</h1>
      <p>{t("designs.body")}</p>
    </>
  );
};

export default DesignsBody;
