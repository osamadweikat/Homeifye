import { useState } from "react";
import "./property-info-section.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useInViewObserver from "../../hooks/useInViewObserver";

export default function PropertyInfoSection({ property }) {
  const [activeIndex, setActiveIndex] = useState(null);

  useInViewObserver(
    ".property-info-heading, .property-info-content-item, .property-info-image-wrapper",
    { threshold: 0.3 },
    true
  );

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="property-info-padding">
      <div className="property-info-container">
        <div className="property-info-heading">
          <h2>Property Details</h2>
        </div>
        <div className="property-info-content">
          <div className="property-info-content-wrapper">
            <div
              className={`property-info-content-item ${
                activeIndex === 0 ? "active" : ""
              }`}
            >
              <div
                className="property-info-content-item-label"
                onClick={() => toggleAccordion(0)}
              >
                <h3>Interior Details</h3>
                <ExpandMoreIcon />
              </div>
              <div className="property-info-content-item-pane">
                <div className="property-info-content-item-speciification">
                  <div className="property-info-content-item-body">
                    <h6>Rooms details</h6>
                    <div className="property-info-content-item-text">
                      <div className="property-info-content-item-group">
                        <span className="hyphen">
                          <span>Bedroom: {property.bedrooms}</span>
                        </span>
                      </div>
                      <div className="property-info-content-item-group">
                        <span className="hyphen">
                          <span>Bathroom: {property.bathrooms}</span>
                        </span>
                      </div>
                      <div className="property-info-content-item-group">
                        <span className="hyphen">
                          <span>Kitchen: {property.kitchen}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`property-info-content-item ${
                activeIndex === 1 ? "active" : ""
              }`}
            >
              <div
                className="property-info-content-item-label"
                onClick={() => toggleAccordion(1)}
              >
                <h3>Property Size</h3>
                <ExpandMoreIcon />
              </div>
              <div className="property-info-content-item-pane">
                <div className="property-info-content-item-speciification">
                  <div className="property-info-content-item-body">
                    <h6>Property Area</h6>
                    <div className="property-info-content-item-text">
                      <div className="property-info-content-item-group">
                        <span className="hyphen">
                          <span>Living area: {property.size}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="property-info-content-item-body">
                    <h6>Structures</h6>
                    <div className="property-info-content-item-text">
                      <div className="property-info-content-item-group">
                        <span className="hyphen">
                          <span>Number of Floors: {property.floors}</span>
                        </span>
                      </div>
                      <div className="property-info-content-item-group">
                        <span className="hyphen">
                          <span>Number of Rooms: {property.rooms}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`property-info-content-item ${
                activeIndex === 2 ? "active" : ""
              }`}
            >
              <div
                className="property-info-content-item-label"
                onClick={() => toggleAccordion(2)}
              >
                <h3>Land Area</h3>
                <ExpandMoreIcon />
              </div>
              <div className="property-info-content-item-pane">
                <div className="property-info-content-item-speciification">
                  <div className="property-info-content-item-body">
                    <h6>Dimensions & Layout</h6>
                    <div className="property-info-content-item-text">
                      <div className="property-info-content-item-group">
                        <span className="hyphen">
                          <span>Total Land Area: {property.totalArea}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`property-info-content-item ${
                activeIndex === 3 ? "active" : ""
              }`}
            >
              <div
                className="property-info-content-item-label"
                onClick={() => toggleAccordion(3)}
              >
                <h3>Year Build</h3>
                <ExpandMoreIcon />
              </div>
              <div className="property-info-content-item-pane">
                <div className="property-info-content-item-speciification">
                  <div className="property-info-content-item-body">
                    <h6>Since</h6>
                    <div className="property-info-content-item-text">
                      <div className="property-info-content-item-group">
                        <span className="hyphen">
                          <span>Established Since: {property.yearBuilt}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="property-info-image-wrapper">
            <img src={property.img} alt="property-image1" />
          </div>
        </div>
      </div>
    </div>
  );
}
