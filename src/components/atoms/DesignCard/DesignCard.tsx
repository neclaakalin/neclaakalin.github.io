import React from "react";
import styles from "./DesignCard.module.scss";

type DesignCardProps = {
  src: string;
  onClick: () => void;
};

const DesignCard = (props: DesignCardProps) => (
  <img
    src={props.src}
    alt=""
    className={styles.designCardImage}
    onClick={() => props.onClick()}
  ></img>
);

export default DesignCard;
