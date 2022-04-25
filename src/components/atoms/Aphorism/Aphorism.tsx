import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./Aphorism.module.scss";

const Aphorism = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.aphorismContainer}>
      <i>{t("aphorism")}</i>
    </div>
  );
};

export default Aphorism;
