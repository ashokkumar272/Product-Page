import React from "react";
import styles from "./ServicesSection.module.css";
import arVrImage from "../../assets/AR_VR.jpg";
import apexPrepImage from "../../assets/APEX_Prep.jpg";
import personaImage from "../../assets/Persona.jpg";

const ServicesSection = () => {
  return (
    <div className={styles.services}>
      <div className={styles["services-title"]}>Our Verticals</div>
      <div className={styles.cards}>
        <div className={`${styles.card} ${styles.card1}`}>
          <img src={arVrImage} alt="AR/VR Technology in Education" />
          <div>
            <h3>AR/VR Technology in Education</h3>
            <p>Interactive experiences aligned with curriculum.</p>
          </div>
        </div>
        <div className={`${styles.card} ${styles.card2}`}>
          <img src={apexPrepImage} alt="Apex Prep" />
          <div>
            <h3>Apex Prep</h3>
            <p>Merging competitive exams with liberal arts education.</p>
          </div>
        </div>
        <div className={`${styles.card} ${styles.card3}`}>
          <img src={personaImage} alt="Learner's Persona" />
          <div>
            <h3>Learner's Persona</h3>
            <p>Student profiling for personalized learning.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;

