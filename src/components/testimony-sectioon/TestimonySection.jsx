import { useState } from "react";
import "./testimony-section.css";
import { testimonailsData } from "../../data/testimonailsData";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import useInViewObserver from "../../hooks/useInViewObserver";

export default function TestimonySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useInViewObserver(".testimony-header, .testimony-slider", {}, true);

  const currentTestimony = testimonailsData[currentIndex];

  const handleNext = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonailsData.length - 1 ? 0 : prevIndex + 1
      );
      setFade(false);
    }, 300);
  };

  const handlePrev = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? testimonailsData.length - 1 : prevIndex - 1
      );
      setFade(false);
    }, 300);
  };

  return (
    <div className="testimony-section-padding">
      <div className="testimony-section-container">
        <div className="testimony-header">
          <h2>Testimonials</h2>
        </div>

        <div className="testimony-slider">
          <div className="testimony-slider-card">
            <div className="testimony-card-content">
              <div className={`testmon-body ${fade ? "fade-out" : "fade-in"}`}>
                <p>{currentTestimony.body}</p>
              </div>

              <div className="testimony-author-info">
                <div
                  className={`testimony-author-details ${
                    fade ? "fade-out" : "fade-in"
                  }`}
                >
                  <h3 className="testimony-author-name">
                    {currentTestimony.name}
                  </h3>
                  <span className="testimony-author-designation">
                    {currentTestimony.designation}
                  </span>
                </div>
              </div>
            </div>
            <div className="testimony-arrows">
              <div className="arrow left" onClick={handlePrev}>
                <ArrowBackIcon />
              </div>
              <div className="arrow right" onClick={handleNext}>
                <ArrowForwardIcon />
              </div>
            </div>
            <div
              className={`testimony-image-box ${fade ? "fade-out" : "fade-in"}`}
            >
              <img src={currentTestimony.img} alt={currentTestimony.name} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
