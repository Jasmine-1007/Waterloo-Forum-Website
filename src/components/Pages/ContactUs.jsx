import "./ContactUs.css"

function ContactUs() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>We'd love to hear from you! Reach out to us through any of the following:</p>

      <div className="contact-info">
        <div className="info-item">
          <h2>Email:</h2>
          <p>thewaterlooforum@gmail.com</p>
        </div>

        <div className="info-item">
          <h2>Phone:</h2>
          <p>+1 (123) 456-7890</p>
        </div>

        <div className="info-item">
          <h2>Address:</h2>
          <p>123 Forum Lane, Waterloo, ON, Canada</p>
        </div>

        <div className="info-item">
          <h2>Follow Us</h2>
          <p>
            <a href="https://facebook.com/waterloo_forum" target="_blank" rel="noreferrer"> Youtube</a> | 
            <a href="https://instagram.com/waterloo_forum" target="_blank" rel="noreferrer"> Instagram</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
