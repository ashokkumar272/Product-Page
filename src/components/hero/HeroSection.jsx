import React from "react";
import styles from "./HeroSection.module.css";
import logo from "../../assets/Logo.png";
import { Button } from "react-bootstrap";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1 },
  whileInView: { opacity: 1, y: 0 }, // Trigger animation on scroll into view
  viewport: { once: false, amount: 0.5 }, // Re-trigger every time it enters 50% of viewport
};

const HeroSection = () => {
  return (
    <>
      <div className={styles.container}>
        <nav className={styles.navbar}>
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div className={styles.options}>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>
                <button className={styles.contact}>Get in touch</button>
              </li>
            </ul>
          </div>
          <div className={styles["menu-btn"]}>menu</div>

        </nav>
        <div className={styles.content}>
          <motion.div className={styles.tagline} {...fadeInUp}>
            Transforming Education
          </motion.div>
          <motion.p className={styles.intro} {...fadeInUp}>
            Empowering the next generation through interactive and immersive
            learning experiences in AR and VR.
          </motion.p>
          <div className={styles.CTA}>
            <Button variant="outline-light">
              Explore Our AR & VR Solutions
            </Button>{" "}
            <Button className={`${styles.primary} primary`}>Get Started</Button>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
