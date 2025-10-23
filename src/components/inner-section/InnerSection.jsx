import "./inner-section.css";
import HomeHeroImage from "../../assets/images/home-hero.avif";
import RightArrow from "../../assets/images/right arrow.svg";

export default function InnerSection() {
  return (
    <div className="inner-section">
      <div className="content-box">
        <h1 className="slide-in">
          Find the right and best home for your family
        </h1>
        <button className="inner-section-btn slide-in">
          Start exploring <img src={RightArrow} alt="arrow" />
        </button>
      </div>
      <div className="img-box slide-in">
        <img className="slide-in" src={HomeHeroImage} alt="home-hero-image" />
      </div>
    </div>
  );
}
