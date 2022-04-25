import React from "react";
import styles from "./Image.module.scss";

type ImpageProps = {
  src: string;
  width?: string;
  height?: string;
};

const Image = (props: ImpageProps) => (
  <>
    <img
      src={props.src}
      alt=""
      style={{
        width: props.width,
        height: props.height,
      }}
      className={styles.coverImage}
    ></img>
  </>
);

export default Image;
