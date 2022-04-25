import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagramSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";
import Link from "../../atoms/Link/Link";
import styles from "./Contact.module.scss";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div id="contact" className={styles.contactContainer}>
      <h1>{t("contact.header")} </h1> <br />
      <p>{t("contact.body")}</p> <br />
      <div>
        <Link to="https://www.instagram.com/neclakalin/">
          <FontAwesomeIcon size="2x" icon={faInstagramSquare} />
        </Link>
        <Link to="https://www.linkedin.com/in/neclaakalin">
          <FontAwesomeIcon size="2x" icon={faLinkedin} />
        </Link>
        <Link to="https://github.com/neclaakalin">
          <FontAwesomeIcon size="2x" icon={faGithub} />
        </Link>
        <Link to="mailto:neclanurakalin@gmail.com">
          <FontAwesomeIcon size="2x" icon={faEnvelope} />
        </Link>
      </div>
    </div>
  );
};

export default Contact;
