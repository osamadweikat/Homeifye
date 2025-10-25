import "./global-cta-section.css";
import GlobalCtaImage from "../../assets/images/global-cta-image.png";
import RightArrow from "../../assets/images/right arrow.svg";
import useInViewObserver from "../../hooks/useInViewObserver";

export default function GlobalCtaSection() {
  useInViewObserver(
    ".global-cta-image-box, .global-cta-content-box h2, .global-cta-content-box button",
    {},
    true
  );

  return (
    <div className="global-cta-padding">
      <div className="global-cta-container">
        <div className="global-cta-image-box">
          <img src={GlobalCtaImage} alt="global-cta-image" />
        </div>
        <div className="global-cta-content-box">
          <h2>Are you looking to buy or rent a property?</h2>
          <button>
            Get In Touch <img src={RightArrow} alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}
