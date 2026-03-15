import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitMessage, setSubmitMessage] = useState("");

  const email = "hello@krishvirani.me";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message
    };

    emailjs.send(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAIL_PUBLIC_KEY
    )
      .then(() => {
        setSubmitMessage("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setSubmitMessage("Failed to send message.");
      });
  };

  return (
    <main className="contact-page">
      <section className="contact-page-section">
        <div className="container">
          <div className="divider contact-page-divider"></div>

          <div className="contact-page-content">
            <div className="contact-page-left">
              <button
                type="button"
                className="contact-page-email"
                onClick={handleCopy}
              >
                <span>{email}</span>

                <svg
                  className="contact-page-email-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <rect x="9" y="9" width="11" height="11" rx="2" />
                  <rect x="4" y="4" width="11" height="11" rx="2" />
                </svg>

                {copied ? (
                  <span className="contact-page-email-status">Copied</span>
                ) : null}
              </button>
            </div>

            <form className="contact-page-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <textarea
                name="message"
                placeholder="Your Masterpiece Starts Here"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

              <button type="submit" className="contact-page-send">
                Send It!
              </button>

              {submitMessage && (
                <p className="contact-page-feedback">{submitMessage}</p>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;