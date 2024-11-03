import React from 'react'
import People from '../cards/People'
import styles from "./TestimonialSection.module.css"
const TestimonialSection = () => {
  return (
    <div className={styles.container}>
    <h1>
        Tetimonials
    </h1>
    <div className={styles.content}>
      <People name = "Aarav S. – High School Student" comment="Infinito Mind's VR sessions made history come alive! Walking through ancient cities in VR was like time-traveling, and it made learning so much more exciting." />
      <People name = "Dr. Meera Patel – Teacher, Springfield High School" comment="The AR/VR integration with our curriculum has truly transformed my classroom. It captures students' attention like nothing else and enhances their understanding of complex concepts." />
      <People name = "Karan J. – 12th Grade Student" comment="Studying with Infinito Mind’s AR/VR tools made my physics lessons much easier to understand. Experiencing formulas in real-time is so much better than just memorizing them!" />
      <People name = "Mr. Rajiv Bansal – Principal, Greenwood School" comment="Infinito Mind has brought a remarkable change to our school. The immersive technology has boosted student engagement and set us apart from other institutions in innovative learning." />
    </div>
    </div>
  )
}

export default TestimonialSection
