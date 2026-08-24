
import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.includes("@")) {
      newErrors.email = "Enter a valid email";
    }

    if (formData.message.trim().length < 10) {
      newErrors.message =
        "Message must be at least 10 characters";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSent(true);

      setTimeout(() => {
        setSent(false);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }, 3000);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>

      <p>Have a project? Get in touch with me.</p>

      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Your Name</label>

          <input
            type="text"
            placeholder="Enter your name"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />

          {errors.name && (
            <span className="error-msg">{errors.name}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>

          <input
            type="email"
            placeholder="Enter your email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          {errors.email && (
            <span className="error-msg">{errors.email}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject</label>

          <select
            name="subject"
            id="subject"
            value={formData.subject}
            onChange={handleChange}
          >
            <option value="">Select a topic</option>
            <option value="hire">I want to hire you</option>
            <option value="collab">I want to collaborate</option>
            <option value="other">Others</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>

          <textarea
            name="message"
            id="message"
            placeholder="Tell me about your project..."
            value={formData.message}
            onChange={handleChange}
          />

          {errors.message && (
            <span className="error-msg">
              {errors.message}
            </span>
          )}
        </div>

        <button type="submit">
          {sent ? "✅ Message Sent" : "Send Message"}
        </button>
      </form>

      <div className="contact-details">
        <p>Phone: 9380357340</p>

        <p>
          Email:{" "}
          <a href="mailto:dehinijkalmath@gmail.com">
            dehinijkalmath@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contact;