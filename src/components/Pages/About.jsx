import Button from '../Elements/Button';
import TeamSection from '../UI/OurTeam';
import styles from './About.module.css';

function About() {
  return (
    <div className={styles.container} >
    <div className={styles.headingcontainer}>
      <p className={styles.hero}>
        Creating <br></br> <span className={styles.highlight}>Civil Yet Robust</span>
        <br></br>Debate on Campus
      </p>
      <img className={styles.debateImage} src="/groupphoto.jpg" alt="Debate" />
    </div>
    <div className={styles.Aboutbody} >
      <h2 className={styles.aboutTitle}>About Us</h2>
      <p className={styles.aboutContent}>
        “What’s the Waterloo Forum?”

        We're a student-led initiative—supported by the Office of Research—dedicated to building a culture of open dialogue, critical thinking, and diversity of thought on campus...

      </p>
      <img className={styles.Aboutbodyimg} src='/pilot/audience2.png' alt='audience image'></img>
      <h2 className={styles.aboutTitle}>Our Story</h2>
      <p className={styles.aboutContent}>
        “What’s the Waterloo Forum?”

        We're a student-led initiative—supported by the Office of Research—dedicated to building a culture of open dialogue, critical thinking, and diversity of thought on campus...

        Thank you for being remarkable,
      </p>
      <h2 className={styles.aboutTitle}>Our Team</h2>
      <TeamSection /> 
      
      <div className={styles.hiring}>
      <h2>We are hiring! <br></br>Apply today 👇</h2>
           <img className={styles.poster} src="/Posters/Hiring.png"></img>
           <Button style={{margin: "20px"}}
    
           href={"https://docs.google.com/forms/d/e/1FAIpQLSdGtdUbIPLoKz_E6ZyfQmsRPRQ74kdtiNrZS9QPyeWgFYi-fg/viewform"}>Apply Here</Button>
           </div>
    </div>
    </div>
  );
}

export default About;
