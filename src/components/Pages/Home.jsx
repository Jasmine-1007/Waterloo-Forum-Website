import HomeEvent from "../UI/HomeEvent";
import OurHistory from "../UI/OurHistory";
import PastEvent from "../UI/PastEvent";
import Sponsor from "../UI/Sponsor";
import Welcome from "../UI/Welcome";
import styles from './Home.module.css';



function Home(){
    return (
        <div>
  
      <div className={styles.hero}>
        <video autoPlay muted loop playsInline className={styles.bgVideo}>
          <source src="/heroVid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className={styles.heroContent}>
          {/* <img src="/logo.png" className={styles.logo} alt="Waterloo Forum logo" /> */}
          <h1 className={styles.fadein}>The Waterloo Forum</h1>
        </div>
      </div>

        <HomeEvent />
        <Welcome />
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <OurHistory />
        <PastEvent />
        <Sponsor />
        </div>
    )   
}

export default Home;