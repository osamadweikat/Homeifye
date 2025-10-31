import "./contact-main-section.css";

export default function ContactMainSection() {
  return (
    <div className="contact-section-padding">
      <div className="contact-container">
        <div className="contact-main-inner">
          <div className="contact-main-heading">
            <h2>Contact</h2>
          </div>
          <div className="contact-main-content">
            <p>Question not answered yet? We are here to help!</p>
            <div className="contact-form-block">
              <div className="form-block">
                <div className="form-block-label">
                  <span>Full Name</span>
                </div>
                <input type="text" />
              </div>
              <div className="form-block">
                <div className="form-block-label">
                  <span>Email</span>
                </div>
                <input type="text" />
              </div>
              <div className="form-block">
                <div className="form-block-label">
                  <span>Message</span>
                </div>
                <textarea />
              </div>
              <button>Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
