import "./search-property.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "../../assets/images/home-icon.svg";
import LocationIcon from "../../assets/images/location-icon.svg";
import TypesIcon from "../../assets/images/types-icon.svg";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useInViewObserver from "../../hooks/useInViewObserver";

export default function SearchProperty() {
  const sectionRef = useRef(null);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [searchText, setSearchText] = useState("");
  const isVisible = useInViewObserver(sectionRef, { threshold: 0.3 });
  const navigate = useNavigate();

  const toggleDropdown = (name, e) => {
    e.stopPropagation();
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const handleDropdownSelect = (type, value) => {
    setOpenDropdown(null);

    navigate(`/properties?${type}=${encodeURIComponent(value)}`);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchText.trim()) return;
    navigate(`/properties?search=${encodeURIComponent(searchText.trim())}`);
    setSearchText("");
  };

  return (
    <div className="search-property" ref={sectionRef}>
      <div className="search-property-padding">
        <div className="search-property-container">
          <div className="search-property-inner">
            <form className="property-search-block" onSubmit={handleSearch}>
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
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  required
                />
                <button type="submit">Search</button>
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
                      {[
                        "Townhouse",
                        "Cabin",
                        "Mansion",
                        "Farmhouse",
                        "Commercial Property",
                        "Vacation Home",
                        "Apartment",
                      ].map((item) => (
                        <li
                          key={item}
                          onClick={() =>
                            handleDropdownSelect("properties", item)
                          }
                        >
                          {item}
                        </li>
                      ))}
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
                      {[
                        "New York City, NY",
                        "Chicago, IL",
                        "San Francisco, CA",
                        "Miami, FL",
                        "Los Angeles, CA",
                      ].map((item) => (
                        <li
                          key={item}
                          onClick={() => handleDropdownSelect("location", item)}
                        >
                          {item}
                        </li>
                      ))}
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
                      {["Rent", "Sell", "Buy"].map((item) => (
                        <li
                          key={item}
                          onClick={() => handleDropdownSelect("types", item)}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
