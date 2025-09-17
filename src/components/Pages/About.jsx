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
      <img src='/pilot/audience2.png' alt='audience image'></img>
      <h2 className={styles.aboutTitle}>Our Story</h2>
      <p className={styles.aboutContent}>
        “What’s the Waterloo Forum?”

        We're a student-led initiative—supported by the Office of Research—dedicated to building a culture of open dialogue, critical thinking, and diversity of thought on campus...

        Thank you for being remarkable,
      </p>
      <h2 className={styles.aboutTitle}>Our Team</h2>
      <TeamSection /> 
    </div>
    </div>
  );
}

export default About;
