import styles from './About.module.css';

function About() {
  return (
    <div className={styles.container} >
    <div className={styles.headingcontainer}>
      <p className={styles.hero}>
        Fostering <br></br> <span className={styles.highlight}>Civil Yet Robust</span>
        <br></br>Debate on Campus
      </p>
      <img className={styles.debateImage} src="/debate.jpg" alt="Debate" />
    </div>
      <h2 className={styles.aboutTitle}>About Us</h2>
      <p className={styles.aboutContent}>
        “What’s the Waterloo Forum?”

        We're a student-led initiative—supported by the Office of Research—dedicated to building a culture of open dialogue, critical thinking, and diversity of thought on campus...

        Thank you for being remarkable,
      </p>
    
    </div>
  );
}

export default About;
