import "./properties-details-hero-section.css";
import RightArrow from "../../assets/images/right arrow.svg";
import useInViewObserver from "../../hooks/useInViewObserver";
import PropertySlider from "./PropertySlider";

export default function PropertiesDetailsHeroSection({ property }) {
  useInViewObserver(".observe-fade", {}, true);

  return (
    <div className="properties-details-section-padding">
      <div className="properties-details-container">
        <div className="properties-details-inner">
          <div className="properties-hero-details">
            <div className="properties-details-heading observe-fade">
              <h1>{property.name}</h1>
            </div>
            <div className="properties-details-info observe-fade">
              <div className="properties-details-price">
                {property.price} USD
              </div>
              <div className="properties-details-items">
                <span>{property.bedrooms} Bedroom</span>
                <span>{property.bathrooms} Bathrooms</span>
                <span>{property.kitchen} Kitchen</span>
                <span>{property.size} Sq.Ft.</span>
              </div>
            </div>
          </div>

          <div className="properties-hero-buy-wrapper">
            <p className="observe-fade">{property.description}</p>
            <button className="observe-fade">
              Contact Us <img src={RightArrow} alt="arrow" />
            </button>
          </div>
        </div>
        <PropertySlider />
      </div>
    </div>
  );
}
