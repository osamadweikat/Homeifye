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
                <div className="form-block-label">Full Name</div>
                <input type="text" />
              </div>
              <div className="form-block">
                <div className="form-block-label">Email</div>
                <input type="text" />
              </div>
              <div className="form-block">
                <div className="form-block-label">Message</div>
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
