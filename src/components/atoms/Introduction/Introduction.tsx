import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./Introduction.module.scss";

const Introduction = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.introductionContainer}>
      <h1>{t("about.header")}</h1> <br /> <p>{t("about.body")}</p> <br />
      <p>{t("about.details")}</p>
    </div>
  );
};

export default Introduction;
