import styles from "./People.module.css"
import image1 from "../../assets/person1.png"
// import image2 from "../../assets/person2.png"
const People = (prop) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}><img src={image1} alt="" /></div>
      <div className={styles.name}>{prop.name}</div>
      <p className={styles.comment}>{prop.comment}</p>
    </div>
  )
}

export default People
