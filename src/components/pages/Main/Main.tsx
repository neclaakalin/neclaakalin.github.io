import React from "react";
import Home from "../../templates/Home/Home";
import About from "../../templates/About/About";
import Projects from "../../templates/Projects/Projects";
import Designs from "../../templates/Designs/Designs";
import Contact from "../../templates/Contact/Contact";
import Footer from "../../templates/Footer/Footer";
import styles from "./Main.module.scss";

const Main = () => (
  <div className={styles.main}>
    <Home />
    <About />
    <Projects />
    <Designs />
    <Contact />
    <Footer />
  </div>
);

export default Main;
