import "./properties-details-hero-section.css";
import RightArrow from "../../assets/images/right arrow.svg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Slider1 from "../../assets/images/slider-1.avif";

export default function PropertiesDetailsHeroSection() {
  return (
    <div className="properties-details-section-padding">
      <div className="properties-details-container">
        <div className="properties-details-inner">
          <div className="properties-hero-details">
            <div className="properties-details-heading">
              <h1>Cedar Park</h1>
            </div>
            <div className="properties-details-info">
              <div className="properties-details-price">$290000 USD</div>
              <div className="properties-details-items">
                <span>3 Bedroom</span>
                <span>2 Bathrooms</span>
                <span>1 Kitchen</span>
                <span>1600 Sq.Ft.</span>
              </div>
            </div>
          </div>
          <div className="properties-hero-buy-wrapper">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              aliquam pulvinar gravida. Vestibulum porttitor ex eu nulla
              condimentum, fringilla aliquet arcu pharetra. Integer bibendum mi.
            </p>
            <button>
              Contact Us <img src={RightArrow} alt="arrow" />
            </button>
          </div>
        </div>
        <div className="properties-details-slider">
          <img src={Slider1} alt="slider-1" />
          <div className="properties-slider-arrow-left">
            <ArrowBackIcon />
          </div>
          <div className="properties-slider-arrow-right">
            <ArrowForwardIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
