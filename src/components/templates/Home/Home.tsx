import React from "react";
import Header from "../../organisms/Header/Header";
import Image from "../../atoms/Image/Image";
import Aphorism from "../../atoms/Aphorism/Aphorism";
import homeImage from "../../../assets/images/home-bg.jpg";

const Home = () => (
  <div id="home">
    <Header />
    <Image src={homeImage} width="100%" height="90vh" />
    <Aphorism />
  </div>
);

export default Home;
