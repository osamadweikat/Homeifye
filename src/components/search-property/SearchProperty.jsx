import "./search-property.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "../../assets/images/home-icon.svg";
import LocationIcon from "../../assets/images/location-icon.svg";
import TypesIcon from "../../assets/images/types-icon.svg";
import { useEffect, useRef, useState } from "react";

export default function SearchProperty() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleClickOutside = () => setOpenDropdown(null);
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  const toggleDropdown = (name, e) => {
    e.stopPropagation();
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <div className="search-property" ref={sectionRef}>
      <div className="search-property-padding">
        <div className="search-property-container">
          <div className="search-property-inner">
            <div className="property-search-block">
              <div
                className={`property-search-bar-wrapper ${
                  isVisible ? "visible" : ""
                }`}
              >
                <SearchIcon className="search-icon" />
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search for properties"
                />
                <button>Search</button>
              </div>
              <div
                className={`property-search-drop-downs ${
                  isVisible ? "visible" : ""
                }`}
              >
                <div
                  className="property-search-drop-down-item"
                  onClick={(e) => toggleDropdown("properties", e)}
                >
                  <img src={HomeIcon} alt="home-icon" />
                  <span>Properties</span>
                  <ExpandMoreIcon sx={{ marginLeft: "15px" }} />
                  {openDropdown === "properties" && (
                    <ul className="dropdown-menu">
                      <li>Townhouse</li>
                      <li>Cabin</li>
                      <li>Mansion</li>
                      <li>Farmhouse</li>
                      <li>Commercial Property</li>
                      <li>Vacation Home</li>
                      <li>Apartment</li>
                    </ul>
                  )}
                </div>
                <div
                  className="property-search-drop-down-item"
                  onClick={(e) => toggleDropdown("location", e)}
                >
                  <img src={LocationIcon} alt="location-icon" />
                  <span>Location</span>
                  <ExpandMoreIcon sx={{ marginLeft: "15px" }} />
                  {openDropdown === "location" && (
                    <ul className="dropdown-menu">
                      <li>New York City, NY</li>
                      <li>Chicago, IL</li>
                      <li>San Francisco, CA</li>
                      <li>Miami, FL</li>
                      <li>Los Angeles, CA</li>
                    </ul>
                  )}
                </div>
                <div
                  className="property-search-drop-down-item"
                  onClick={(e) => toggleDropdown("types", e)}
                >
                  <img src={TypesIcon} alt="type-icon" />
                  <span>Types</span>
                  <ExpandMoreIcon sx={{ marginLeft: "15px" }} />
                  {openDropdown === "types" && (
                    <ul className="dropdown-menu">
                      <li>Rent</li>
                      <li>Sell</li>
                      <li>Buy</li>
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
