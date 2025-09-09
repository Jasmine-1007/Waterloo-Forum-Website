import HomeEvent from "../UI/HomeEvent";
import OurHistory from "../UI/OurHistory";
import PastEvent from "../UI/PastEvent";
import Sponsor from "../UI/Sponsor";
import Welcome from "../UI/Welcome";
import styles from './Home.module.css';



function Home(){
    return (
        <div>
            
          <img src="/logo.png" className={styles.logo} alt="Vite logo" />
        <h1 style={{marginBottom: "100px"}}>Waterloo Forum</h1>
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