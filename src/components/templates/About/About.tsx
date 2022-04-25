import React from "react";
import Image from "../../atoms/Image/Image";
import Introduction from "../../atoms/Introduction/Introduction";
import profileImage from "../../../assets/images/profile.jpg";
import styles from "./About.module.scss";

const About = () => (
  <div id="about" className={styles.aboutContainer}>
    <div className={styles.imageContainer}>
      <Image src={profileImage} width="100%" height="100%" />
    </div>
    <div className={styles.cover}></div>
    <Introduction />
  </div>
);

export default About;
