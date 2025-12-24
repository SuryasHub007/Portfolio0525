import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8808j26",
        "template_u6m17z8",
        formRef.current,
        "YYU-p1n729eOSG89q"
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          formRef.current.reset();
        },
        () => {
          alert("❌ Failed to send message.");
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Contact Me</h2>
        <p className="contact-subtitle">
          Have a project or question? Send me a message.
        </p>

        <form ref={formRef} onSubmit={sendEmail} className="contact-form">
          <div className="form-group">
            <label>Your Name</label>
            <input
              type="text"
              name="user_name"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-group">
            <label>Your Email</label>
            <input
              type="email"
              name="user_email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label>Your Message</label>
            <textarea
              name="message"
              rows="5"
              placeholder="Write your message"
              required
            />
          </div>

          <button type="submit" className="contact-btn">
            Send Message
          </button>
        </form>

        {/* UNDERSCORE LINE */}
        <div className="underscore-line">
          __________________________________________________
        </div>

        {/* COPYRIGHT */}
        <p className="contact-footer">
          © 2025 Surya Sankar Paramasivam. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;
