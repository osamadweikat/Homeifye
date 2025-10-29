import "./property-feature-section.css";
import { useEffect } from "react";
import useInViewObserver from "../../hooks/useInViewObserver";
import PropertyFeatures1 from "../../assets/images/property-features-1.svg";
import PropertyFeatures2 from "../../assets/images/property-features-2.svg";
import PropertyFeatures3 from "../../assets/images/property-features-3.svg";
import PropertyFeatures4 from "../../assets/images/property-features-4.svg";
import PropertyFeatures5 from "../../assets/images/property-features-5.svg";
import PropertyFeatures6 from "../../assets/images/property-features-6.svg";

export default function PropertyFeatureSection() {
  useInViewObserver(".property-feature-heading h2", {}, true);
  useInViewObserver(".property-feature-details-item", {}, true);

  useEffect(() => {
    const items = document.querySelectorAll(".property-feature-details-item");
    items.forEach((item, index) => {
      item.style.transitionDelay = `${0.2 + index * 0.1}s`;
    });
  }, []);

  return (
    <div className="property-feature-padding">
      <div className="property-feature-container">
        <div className="property-feature-heading">
          <h2>Luxurious Features & Amenities</h2>
        </div>
        <div className="property-feature-details">
          <div className="property-feature-details-item">
            <img src={PropertyFeatures1} alt="property-features1" />
            <div className="property-feature-details-item-text">
              <h3>Luxurious Villa</h3>
              <p>
                Exquisite villa with top-tier amenities and breathtaking views.
              </p>
            </div>
          </div>

          <div className="property-feature-details-item">
            <img src={PropertyFeatures2} alt="property-features2" />
            <div className="property-feature-details-item-text">
              <h3>Top Security</h3>
              <p>Ample parking space for residents and visitors alike.</p>
            </div>
          </div>

          <div className="property-feature-details-item">
            <img src={PropertyFeatures3} alt="property-features3" />
            <div className="property-feature-details-item-text">
              <h3>Fire Alarm</h3>
              <p>State-of-the-art fire alarm system for enhanced safety.</p>
            </div>
          </div>

          <div className="property-feature-details-item">
            <img src={PropertyFeatures4} alt="property-features4" />
            <div className="property-feature-details-item-text">
              <h3>Wind Ventilation</h3>
              <p>Natural wind ventilation for a fresh living environment.</p>
            </div>
          </div>

          <div className="property-feature-details-item">
            <img src={PropertyFeatures5} alt="property-features5" />
            <div className="property-feature-details-item-text">
              <h3>Parking Facility</h3>
              <p>Secure, ample parking for residents and guests.</p>
            </div>
          </div>

          <div className="property-feature-details-item">
            <img src={PropertyFeatures6} alt="property-features6" />
            <div className="property-feature-details-item-text">
              <h3>Backyard Space</h3>
              <p>Spacious backyard for leisure and outdoor activities.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
