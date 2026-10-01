import React, { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill all fields.");
      return;
    }

    try {
      setLoading(true);
      setStatus("");

      await emailjs.send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAIL_PUBLIC_KEY,
      );

      setStatus("Message sent successfully");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("Failed to send message. Try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section py-5">
      <div className="container">
        <div className="row">
          {/* LEFT SIDE */}
          <div className="col-md-6 mb-5 mb-md-0">
            <h1 className="contact-section-title">Get In Touch</h1>
            <p className="section-subtitle mb-4">
              Have an idea or opportunity? Let's build something great.
            </p>

            <h3 className="connect-title">Let’s connect</h3>
            <p className="connect-text">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>

            <p className="email-link">
              <i className="fa-solid fa-envelope"></i>{" "}
              <a href="mailto:saraogibhumi@gmail.com">saraogibhumi@gmail.com</a>
            </p>

            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/bhumi-saraogi-929473235"
                className="social-btn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a
                href="https://github.com/bhumi110"
                className="social-btn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="col-md-6">
            <form onSubmit={handleSubmit} className="contact-form">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
              />

              <textarea
                name="message"
                placeholder="Tell me about your project..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
              ></textarea>

              <button type="submit" disabled={loading}>
                <i className="fa-regular fa-paper-plane"></i>{" "}
                {loading ? "Sending..." : "Send Message"}
              </button>

              {status && <p className="form-status mt-3">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;