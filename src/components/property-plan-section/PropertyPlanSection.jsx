import useInViewObserver from "../../hooks/useInViewObserver";
import "./property-plan-section.css";
import RightArrow from "../../assets/images/right arrow.svg";
import MapImage from "../../assets/images/maps.avif";

export default function PropertyPlanSection({ floorPlanDescription }) {
  useInViewObserver(
    ".property-plan-heading h2, .property-plan-header p, .property-plan-header button, .property-plan-image-wrapper",
    { threshold: 0.3 },
    true
  );

  return (
    <div className="property-plan-section-padding">
      <div className="property-plan-section-container">
        <div className="property-plan-header">
          <div className="property-plan-heading">
            <h2>Property Floor Plan</h2>
          </div>
          <p>{floorPlanDescription}</p>
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
