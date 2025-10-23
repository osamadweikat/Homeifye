import "./testimony-section.css";
import TestimonyImage1 from "../../assets/images/testimony-feature-image1.avif";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function TestimonySection() {
  return (
    <div className="testimony-section-padding">
      <div className="testimony-section">
        <div className="testimony-header">
          <h2>Testimonials</h2>
        </div>
        <div className="testimony-slider">
          <div className="testimony-slider-card">
            <div className="testimony-card-content">
              <div className="testmon-body">
                <p>
                  I was nervous about selling my home, but Homeifye exceeded my
                  expectations. Their tools for pricing, staging, and marketing
                  my property were outstanding, and I felt supported every step
                  of the way. The team's expertise and guidance helped me sell
                  quickly and for a great price. I highly recommend Homeifye to
                  anyone looking to buy or sell real estate!
                </p>
              </div>
              <div className="testimony-author-info">
                <h3 className="testimony-author-name">Mark Orta</h3>
                <span className="testimony-author-designation">
                  CTO, Zelta Hand Co.
                </span>
              </div>
            </div>
            <div className="testimony-image-box">
              <img src={TestimonyImage1} alt="testimony-image1" />
            </div>
          </div>
          <div className="testimony-icon-wrapper">
            <div className="testimony-icon-left">
              <ArrowBackIcon />
            </div>
            <div className="testimony-icon-right">
              <ArrowForwardIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
