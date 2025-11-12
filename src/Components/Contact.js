import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    // IMPORTANT: The ID must match the href in the Navbar
    <section id="contact" className="container contact-section"> 
      <h2 className="section-heading">Get In Touch</h2>
      <div className="contact-info">
        <p>Questions about a recipe or just want to say hello? We'd love to hear from you!</p>
        <p>Email us at: 
            <a href="mailto:hello@cravecorner.com" className="contact-email"> hello@cravecorner.com</a>
        </p>
        <p>Follow us on social media for daily inspiration.</p>
      </div>
      {/* You would typically place a contact form here */}
    </section>
  );
};

export default Contact;