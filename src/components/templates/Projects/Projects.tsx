import React from "react";
import ProjectsBody from "../../molecules/ProjectsBody/ProjectsBody";
import ProjectCard from "../../organisms/ProjectCard/ProjectCard";
import styles from "./Projects.module.scss";

const Projects = () => (
  <div id="projects" className={styles.projectsContainer}>
    <ProjectsBody />
    <div className={styles.cardContainer}>
      <div className={styles.hermesContainer}>
        <ProjectCard title="hermes" />
      </div>
      <div className={styles.row}>
        <div className={styles.vygrContainer}>
          <ProjectCard title="vygr" />
        </div>
        <div className={styles.column}>
          <div className={styles.movieSearchContainer}>
            <ProjectCard title="movie search" />
          </div>
          <div className={styles.connectFourContainer}>
            <ProjectCard title="connect four" />
          </div>
        </div>
        <div className={styles.mundusContainer}>
          <ProjectCard title="mundus" />
        </div>
      </div>
    </div>
  </div>
);

export default Projects;
