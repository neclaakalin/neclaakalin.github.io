import React, { useState } from "react";
import ProjectDescription from "../../molecules/ProjectDescription/ProjectDescription";
import Mundus from "../../../assets/images/mundus.png";
import Vygr from "../../../assets/images/vygr.png";
import Hermes from "../../../assets/images/hermes.png";
import styles from "./ProjectCard.module.scss";

const logos: { [key: string]: string } = {
  hermes: Hermes,
  vygr: Vygr,
  mundus: Mundus,
};

type ProjectCardProps = {
  title: string;
};

const ProjectCard = (props: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const getLogo = () => {
    if (logos[props.title]) {
      return (
        <img
          src={logos[props.title] as string}
          alt={props.title + "_logo"}
        ></img>
      );
    } else {
      return <p>{props.title}</p>;
    }
  };

  const handleHover = (isSet: boolean) => {
    setIsHovered(isSet);
  };

  return (
    <div
      className={styles.projectCardContainer}
      onMouseOver={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
    >
      {!isHovered && (
        <div
          className={[styles.cardCover, isHovered ? styles.hovered : ""].join(
            ""
          )}
          onClick={() => handleHover(true)}
        >
          {getLogo()}
        </div>
      )}
      {isHovered && <ProjectDescription name={props.title} />}
    </div>
  );
};

export default ProjectCard;
