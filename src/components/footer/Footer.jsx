import React from 'react'
import styles from "./Footer.module.css"
import insta from "../../assets/icons/insta.png"
import facebook from "../../assets/icons/facebook.png"
import twitter from "../../assets/icons/twitter.png"
import linkedIn from "../../assets/icons/linkedIn.png"
const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.contact}>
            <a href="#"><img src={linkedIn} alt="" /></a>
            <a href="#"><img src={facebook} alt="" /></a>
            <a href="#"><img src={twitter} alt="" /></a>
            <a href="#"><img src={insta} alt="" /></a>
        </div>
        <div className={styles.text}>
        <div>Privacy Policy | Terms of Use</div>
        <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, blanditiis.</div>
        <div>@ COPYRIGHT 2024-2034</div>
        </div>
    </div>
  )
}

export default Footer