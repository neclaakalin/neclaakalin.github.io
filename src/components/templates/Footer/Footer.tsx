import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import styles from "./Footer.module.scss";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div id="footer" className={styles.footerContainer}>
      <p className={styles.copyright}>{t("footer.header")} </p>
      <p>
        {" "}
        <FontAwesomeIcon icon={faCopyright} /> {t("footer.nnae")}{" "}
      </p>
    </div>
  );
};

export default Footer;
