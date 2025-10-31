import { useState } from "react";
import "./contact-main-section.css";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import useInViewObserver from "../../hooks/useInViewObserver";

export default function ContactMainSection() {
  useInViewObserver(".fade-contact", { threshold: 0.3 }, true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setShowSuccess(true);
  };

  return (
    <div className="contact-section-padding">
      <div className="contact-container">
        <div className="contact-main-inner fade-contact">
          <div className="contact-main-heading fade-contact">
            <h2 className="fade-contact delay-1">Contact</h2>
          </div>

          <div className="contact-main-content fade-contact">
            <div className="contect-heading">
              <p className="fade-contact delay-2">
                Question not answered yet? We are here to help!
              </p>
            </div>
            {!showSuccess && (
              <form
                onSubmit={handleSubmit}
                className="contact-form-block fade-contact delay-3"
                noValidate
              >
                <div className="form-block">
                  <div className="form-block-label">Full Name</div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-block">
                  <div className="form-block-label">Email</div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-block">
                  <div className="form-block-label">Message</div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit">Send Message</button>
              </form>
            )}
            {showSuccess && (
              <div className="contact-success-state visible">
                <CheckCircleOutlinedIcon /> Thank you! Your submission has been
                received!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
