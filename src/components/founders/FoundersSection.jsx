import styles from "./FoundersSection.module.css";
import Person1 from "../../assets/person1.png";
import Person2 from "../../assets/person2.png";
import background from "../../assets/background.png"
import insta from "../../assets/icons/insta.png"
import facebook from "../../assets/icons/facebook.png"
import twitter from "../../assets/icons/twitter.png"
import linkedIn from "../../assets/icons/linkedIn.png"
const FoundersSection = () => {
  return (
    <div className={styles.container}>
     
        <div className={styles.header}>Our Founders</div>
        <div className={styles.content}>
      <div className={`${styles.founder1} ${styles.founder}`}>
        <img src={Person1} alt="img" />
        <div className={styles.name}>K. Munesh Kumar</div>
        <div className={styles.contacts}>
            <a href="#"><img src={linkedIn} alt="" /></a>
            <a href="#"><img src={facebook} alt="" /></a>
            <a href="#"><img src={twitter} alt="" /></a>
            <a href="#"><img src={insta} alt="" /></a>
        </div>
      </div>
      <div className={`${styles.founder1} ${styles.founder}`}>
        <img src={Person2} alt="img" />
        <div className={styles.name}>K. Priyanka</div>
        <div className={styles.contacts}>
        <a href="#"><img src={linkedIn} alt="" /></a>
            <a href="#"><img src={facebook} alt="" /></a>
            <a href="#"><img src={twitter} alt="" /></a>
            <a href="#"><img src={insta} alt="" /></a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default FoundersSection;
