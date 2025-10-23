import "./inner-section.css";
import HomeHeroImage from "../../assets/images/home-hero.avif";
import RightArrow from "../../assets/images/right arrow.svg";

export default function InnerSection() {
  return (
    <div className="inner-section">
      <div className="content-box">
        <h1>Find the right and best home for your family</h1>
        <button className="inner-section-btn">
          Start exploring <img src={RightArrow} alt="arrow" />
        </button>
      </div>
      <div className="img-box">
        <img className="slide-in" src={HomeHeroImage} alt="home-hero-image" />
      </div>
    </div>
  );
}
