import { useState } from "react";
import "./property-info-section.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PropertyImage1 from "../../assets/images/property-image-1.avif";
import useInViewObserver from "../../hooks/useInViewObserver";

export default function PropertyInfoSection() {
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
            {[
              {
                title: "Interior Details",
                content: (
                  <>
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
                  </>
                ),
              },
              {
                title: "Property Size",
                content: (
                  <>
                    <h6>Property Area</h6>
                    <div className="property-info-content-item-text">
                      <div className="property-info-content-item-group">
                        <span className="hyphen">
                          <span>Living area: 1600 Sq.Ft.</span>
                        </span>
                      </div>
                    </div>
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
                  </>
                ),
              },
              {
                title: "Land Area",
                content: (
                  <>
                    <h6>Dimensions & Layout</h6>
                    <div className="property-info-content-item-text">
                      <div className="property-info-content-item-group">
                        <span className="hyphen">
                          <span>Total Land Area: 3500 Sq.Ft.</span>
                        </span>
                      </div>
                    </div>
                  </>
                ),
              },
              {
                title: "Year Build",
                content: (
                  <>
                    <h6>Since</h6>
                    <div className="property-info-content-item-text">
                      <div className="property-info-content-item-group">
                        <span className="hyphen">
                          <span>Established Since: 2012</span>
                        </span>
                      </div>
                    </div>
                  </>
                ),
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`property-info-content-item ${
                  activeIndex === index ? "active" : ""
                }`}
              >
                <div
                  className="property-info-content-item-label"
                  onClick={() => toggleAccordion(index)}
                >
                  <h3>{item.title}</h3>
                  <ExpandMoreIcon />
                </div>
                <div className="property-info-content-item-pane">
                  <div className="property-info-content-item-speciification">
                    <div className="property-info-content-item-body">
                      {item.content}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="property-info-image-wrapper">
            <img src={PropertyImage1} alt="property-image1" />
          </div>
        </div>
      </div>
    </div>
  );
}
