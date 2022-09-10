import styles from "./LandingPage.module.css"
import imgCover from "../assets/img/Ava.jpg"

const LandingPage = () => {
    return (
       <div>
            <h1>LandingPage</h1>
            <img className={styles.cover} src={imgCover} alt="Image"></img>
       </div> 
    )
}
export default LandingPage;