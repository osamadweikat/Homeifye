import "./property-plan-section.css";
import RightArrow from "../../assets/images/right arrow.svg";
import MapImage from "../../assets/images/maps.avif";

export default function PropertyPlanSection() {
  return (
    <div className="property-plan-section-padding">
      <div className="property-plan-section-container">
        <div className="property-plan-header">
          <div className="property-plan-heading">
            <h2>Property Floor Plan</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            impedit aliquid neque reiciendis atque, similique sint ad itaque
            distinctio voluptatibus deserunt expedita quos voluptate rem est.
            Molestias dignissimos consequatur et.
          </p>
          <button>
            Download Plan <img src={RightArrow} alt="arrow" />
          </button>
        </div>
        <div className="property-plan-image-wrapper">
          <img src={MapImage} alt="map-img" />
        </div>
      </div>
    </div>
  );
}
