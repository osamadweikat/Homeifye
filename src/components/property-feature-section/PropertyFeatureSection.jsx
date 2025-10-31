import "./property-feature-section.css";
import useInViewObserver from "../../hooks/useInViewObserver";
import { propertyFeaturesData } from "../../data/propertyFeaturesData";

export default function PropertyFeatureSection() {
  useInViewObserver(".property-feature-heading h2", {}, true);
  useInViewObserver(".property-feature-details-item", {}, true);

  return (
    <div className="property-feature-padding">
      <div className="property-feature-container">
        <div className="property-feature-heading">
          <h2>Luxurious Features & Amenities</h2>
        </div>
        <div className="property-feature-details">
          {propertyFeaturesData.map((item, index) => (
            <div
              key={item.id}
              className="property-feature-details-item"
              style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
            >
              <img src={item.img} alt={item.title} />
              <div className="property-feature-details-item-text">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
