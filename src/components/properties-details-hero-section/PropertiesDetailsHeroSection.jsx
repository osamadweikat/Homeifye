import { useState } from "react";
import "./properties-details-hero-section.css";
import RightArrow from "../../assets/images/right arrow.svg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Slider1 from "../../assets/images/slider-1.avif";
import Slider2 from "../../assets/images/slide-2.avif";
import Slider3 from "../../assets/images/slider-3.avif";
import Slider4 from "../../assets/images/slider-4.avif";
import Slider5 from "../../assets/images/slider-5avif.avif";
import useInViewObserver from "../../hooks/useInViewObserver";

export default function PropertiesDetailsHeroSection() {
  useInViewObserver(".observe-fade", {}, true);
  useInViewObserver(".observe-image", {}, true);

  const slides = [Slider1, Slider2, Slider3, Slider4, Slider5];
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(null);

  const nextSlide = () => {
    setDirection("right");
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection("left");
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="properties-details-section-padding">
      <div className="properties-details-container">
        <div className="properties-details-inner">
          <div className="properties-hero-details">
            <div className="properties-details-heading observe-fade">
              <h1>Cedar Park</h1>
            </div>
            <div className="properties-details-info observe-fade">
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
            <p className="observe-fade">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              aliquam pulvinar gravida. Vestibulum porttitor ex eu nulla
              condimentum, fringilla aliquet arcu pharetra. Integer bibendum mi.
            </p>
            <button className="observe-fade">
              Contact Us <img src={RightArrow} alt="arrow" />
            </button>
          </div>
        </div>

        <div className="properties-details-slider observe-image">
          <img
            key={current}
            src={slides[current]}
            alt={`slider-${current + 1}`}
            className={`slider-image ${
              direction === "left"
                ? "slide-left"
                : direction === "right"
                ? "slide-right"
                : ""
            }`}
          />

          <div className="properties-slider-arrow-left" onClick={prevSlide}>
            <ArrowBackIcon />
          </div>
          <div className="properties-slider-arrow-right" onClick={nextSlide}>
            <ArrowForwardIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
