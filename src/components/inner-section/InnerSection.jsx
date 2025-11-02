import "./inner-section.css";
import HomeHeroImage from "../../assets/images/home-hero.avif";
import RightArrow from "../../assets/images/right arrow.svg";
import { useRef } from "react";
import useInViewObserver from "../../hooks/useInViewObserver";
import { Link } from "react-router-dom";

export default function InnerSection() {
  const sectionRef = useRef(null);
  const isVisible = useInViewObserver(sectionRef, { threshold: 0.3 }, false);

  return (
    <div className="inner-section" ref={sectionRef}>
      <div className={`content-box slide-in ${isVisible ? "in-view" : ""}`}>
        <h1 className={`slide-in ${isVisible ? "in-view" : ""}`}>
          Find the right and best home for your family
        </h1>
        <Link to="/properties">
          <button
            className={`inner-section-btn slide-in ${
              isVisible ? "in-view" : ""
            }`}
          >
            Start exploring <img src={RightArrow} alt="arrow" />
          </button>
        </Link>
      </div>

      <div className={`img-box slide-in ${isVisible ? "in-view" : ""}`}>
        <img src={HomeHeroImage} alt="home-hero-image" />
      </div>
    </div>
  );
}
