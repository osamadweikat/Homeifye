import { useState } from "react";
import "./property-info-section.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PropertyImage1 from "../../assets/images/property-image-1.avif";

export default function PropertyInfoSection() {
  const [activeIndex, setActiveIndex] = useState(null);

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
                          <span>Bedroom: 3</span>
                        </span>
                      </div>
                      <div className="property-info-content-item-group">
                        <span className="hyphen">
                          <span>Bathroom: 2</span>
                        </span>
                      </div>
                      <div className="property-info-content-item-group">
                        <span className="hyphen">
                          <span>Kitchen: 1</span>
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
                          <span>Living area: 1600 Sq.Ft.</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="property-info-content-item-speciification">
                  <div className="property-info-content-item-body">
                    <h6>Structures</h6>
                    <div className="property-info-content-item-text">
                      <div className="property-info-content-item-group">
                        <span className="hyphen">
                          <span>Number of Floors: 2</span>
                        </span>
                      </div>
                      <div className="property-info-content-item-group">
                        <span className="hyphen">
                          <span>Number of Rooms: 6</span>
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
                          <span>Total Land Area: 3500 Sq.Ft.</span>
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
                          <span>Established Since: 2012</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="property-info-image-wrapper">
            <img src={PropertyImage1} alt="property-image1" />
          </div>
        </div>
      </div>
    </div>
  );
}
