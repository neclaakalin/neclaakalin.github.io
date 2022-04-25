import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { HashLink } from "react-router-hash-link";
import styles from "./Header.module.scss";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  const menuItemClass = [styles.menuItem, isMenuOpen ? styles.open : " "].join(
    " "
  );

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.headerContainer}>
      <div className={styles.topBar}>
        <h1>{t("nnae")}</h1>
        <div className={styles.iconContainer} onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
      <div className={styles.menuContainer}>
        <HashLink to="#about" className={menuItemClass}>
          <div className={menuItemClass}>{t("header.about")}</div>
        </HashLink>
        <HashLink to="#projects" className={menuItemClass}>
          <div className={menuItemClass}>{t("header.projects")}</div>
        </HashLink>
        <HashLink to="#designs" className={menuItemClass}>
          <div className={menuItemClass}>{t("header.designs")}</div>
        </HashLink>
        <HashLink to="#contact" className={menuItemClass}>
          <div className={menuItemClass}>{t("header.contact")}</div>
        </HashLink>
      </div>
    </div>
  );
};

export default Header;
