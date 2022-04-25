import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Image from "../../atoms/Image/Image";
import DesignsBody from "../../atoms/DesignsBody/DesignsBody";
import DesignCard from "../../atoms/DesignCard/DesignCard";
import DesignsImage from "../../../assets/images/designs-bg.jpg";
import HelpYourDiabetes from "../../../assets/images/helpyourdiabetes.jpg";
import FactoryMain from "../../../assets/images/factoryMain.jpg";
import FactoryProducts from "../../../assets/images/factoryProducts.jpg";
import VygrMobile from "../../../assets/images/mobile-vygr.jpg";
import { useTranslation } from "react-i18next";
import styles from "./Designs.module.scss";

const Designs = () => {
  const [isPopUpOpen, setIsPopUpOpen] = useState<boolean>(false);
  const [openImage, setOpenImage] = useState<string>();
  const wrapperRef = React.createRef<HTMLDivElement>();

  const { t } = useTranslation();

  const handleCardClick = (imageSource?: string) => {
    if (!imageSource) {
      setIsPopUpOpen(false);
    } else {
      const newValue = !isPopUpOpen;
      setOpenImage(imageSource);
      setIsPopUpOpen(newValue);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsPopUpOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <>
      <div id="designs" className={styles.designsContainer}>
        <Image src={DesignsImage} width="100%" height="90vh" />
        <div className={styles.bodyContainer}>
          <DesignsBody />
        </div>
        <div className={styles.designsCardContainer}>
          <div className={styles.row}>
            <DesignCard
              src={HelpYourDiabetes}
              onClick={() => handleCardClick(HelpYourDiabetes)}
            />
            <DesignCard
              src={FactoryMain}
              onClick={() => handleCardClick(FactoryMain)}
            />
          </div>
          <div className={styles.row}>
            <DesignCard
              src={VygrMobile}
              onClick={() => handleCardClick(VygrMobile)}
            />
            <DesignCard
              src={FactoryProducts}
              onClick={() => handleCardClick(FactoryProducts)}
            />
          </div>
        </div>
      </div>
      {isPopUpOpen && openImage && (
        <div className={styles.designPopUpBackground}>
          <div className={styles.designPopUpContainer}>
            <div className={styles.popUpHeader}>
              {t(`designs.${openImage.split(".")[0].split("/")[3]}`)}
              <FontAwesomeIcon icon={faXmark} size="1x" />
            </div>
            <div className={styles.designImageContainer} ref={wrapperRef}>
              <img src={openImage} alt="" className={styles.popUpImage}></img>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Designs;
