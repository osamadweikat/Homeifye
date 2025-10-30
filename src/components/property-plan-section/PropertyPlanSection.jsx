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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet. Nunc ut sem vitae risus tristique posuere.
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
