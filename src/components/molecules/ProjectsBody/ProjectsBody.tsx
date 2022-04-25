import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./ProjectsBody.module.scss";

const ProjectsBody = () => {
  const { t } = useTranslation();

  const getSplittedHeader = (text: string) => {
    const splitted = text.split(" ");
    return (
      <>
        {splitted.map((t, i) => (
          <p key={i}>{t}</p>
        ))}
      </>
    );
  };

  return (
    <div className={styles.projectsBodyContainer}>
      <h1>{getSplittedHeader(t("projects.header"))}</h1>
      <p>{t("projects.body")}</p>
    </div>
  );
};

export default ProjectsBody;
