import React from 'react';
import styles from './AboutSection.module.css';
import innovationIcon from '../../assets/innovation.png';
import engagementIcon from '../../assets/engagement.png';
import immersiveIcon from '../../assets/immersive.png';

const AboutSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles['about-title']}>
        Revolutionizing Education with Infinito Mind
      </div>
      <p>
        At Infinito Mind, we are dedicated to transforming education through
        innovative AR/VR technology. Our mission is to create immersive learning
        experiences that bridge traditional and modern teaching, empowering
        students with a deeper understanding and lasting engagement.
      </p>
      <div className={styles.icons}>
        <div className={`${styles['icon-card']} ${styles.innovation}`}>
          <img src={innovationIcon} alt="Innovation Icon" />
          <div>Innovation</div>
        </div>
        <div className={`${styles['icon-card']} ${styles.engagement}`}>
          <img src={engagementIcon} alt="Engagement Icon" />
          <div>Student Engagement</div>
        </div>
        <div className={`${styles['icon-card']} ${styles['immersive-learning']}`}>
          <img src={immersiveIcon} alt="Immersive Learning Icon" />
          <div>Immersive Learning</div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

