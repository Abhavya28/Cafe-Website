import React from "react";
import '../assets/css/contactpage.css'; 

export default function ContactPage() {
  return (
    <div className="contact-page">
      <h1 className="contact-title">Contact Us</h1>

      {/* Contact Info */}
      <div className="contact-card contact-info">
        <h2>Get in Touch</h2>
        <p>📍 Address: 123 Coffee Street, Delhi</p>
        <p>📞 Phone: <a href="tel:+911234567890">+91 12345 67890</a></p>
        <p>💬 WhatsApp: <a href="https://wa.me/917986779012" target="_blank">Chat on WhatsApp</a></p>
        <p>✉️ Email: <a href="mailto:hello@cafename.com">hello@beanandbrew.com</a></p>
      </div>

      

      {/* Contact Form */}
      <div className="contact-card contact-form">
        <h2>Send us a Message</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const name = e.target.name.value;
            const message = e.target.message.value;
            window.open(`https://wa.me/919876543210?text=Hello, I am ${name}. ${message}`);
          }}
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit">Send via WhatsApp</button>
        </form>
      </div>
    </div>
  );
}
