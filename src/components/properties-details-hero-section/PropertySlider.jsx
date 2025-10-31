import { useState, useRef } from "react";
import useInViewObserver from "../../hooks/useInViewObserver";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Slider1 from "../../assets/images/slider-1.avif";
import Slider2 from "../../assets/images/slide-2.avif";
import Slider3 from "../../assets/images/slider-3.avif";
import Slider4 from "../../assets/images/slider-4.avif";
import Slider5 from "../../assets/images/slider-5avif.avif";

export default function PropertySlider() {
  const slides = [Slider1, Slider2, Slider3, Slider4, Slider5];
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(null);

  const sliderRef = useRef(null);
  const isVisible = useInViewObserver(sliderRef, { threshold: 0.3 }, true);

  const nextSlide = () => {
    setDirection("right");
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection("left");
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div
      className={`properties-details-slider ${isVisible ? "in-view" : ""}`}
      ref={sliderRef}
    >
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
  );
}
