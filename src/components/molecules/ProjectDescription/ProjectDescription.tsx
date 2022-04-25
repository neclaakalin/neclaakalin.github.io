import React from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Link from "../../atoms/Link/Link";
import styles from "./ProjectDescription.module.scss";

type ProjectDescriptionProps = {
  name: string;
};

const getExtras = (projectName: string) => {
  switch (projectName) {
    case "hermes":
      return (
        <div className={styles.flexed}>
          <Link to="https://www.youtube.com/watch?v=80F2oLn7q6U&ab_channel=ProjectHermes">
            <FontAwesomeIcon size="lg" icon={faYoutube} />
          </Link>
          <Link to="https://senior.ceng.metu.edu.tr/2020/driverposeest/">
            <FontAwesomeIcon size="lg" icon={faSquareArrowUpRight} />
          </Link>
        </div>
      );
    case "vygr":
      return (
        <div className={styles.flexed}>
          <Link to="https://www.instagram.com/vygrworld/">
            <FontAwesomeIcon size="lg" icon={faInstagram} />
          </Link>
          <Link to="https://www.linkedin.com/company/vygr/">
            <FontAwesomeIcon size="lg" icon={faLinkedin} />
          </Link>
        </div>
      );
    case "mundus":
      return (
        <Link to="https://github.com/neclaakalin/mundus">
          <FontAwesomeIcon size="lg" icon={faGithub} />
        </Link>
      );
    case "movie search":
      return (
        <Link to="https://github.com/neclaakalin/movie_search">
          <FontAwesomeIcon size="lg" icon={faGithub} />
        </Link>
      );
    case "connect four":
      return (
        <Link to="https://github.com/neclaakalin/connect4game">
          <FontAwesomeIcon size="lg" icon={faGithub} />
        </Link>
      );
    default:
      return;
  }
};

const ProjectDescription = (props: ProjectDescriptionProps) => {
  const { t } = useTranslation();

  return (
    <div className={styles.descriptionContainer}>
      <div>{t(`projects.descriptions.${props.name}`)}</div>
      <div className={styles.logoContainer}>{getExtras(props.name)}</div>
    </div>
  );
};

export default ProjectDescription;
