import "./search-property.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "../../assets/images/home-icon.svg";
import LocationIcon from "../../assets/images/location-icon.svg";
import TypesIcon from "../../assets/images/types-icon.svg";

export default function SearchProperty({ searchRef, visible }) {
  return (
    <div className="search-property">
      <div className="search-property-padding">
        <div className="search-property-container">
          <div className="search-property-inner" ref={searchRef}>
            <div className="property-search-block">
              <div
                className={`property-search-bar-wrapper ${
                  visible ? "visible" : ""
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
                  visible ? "visible" : ""
                }`}
              >
                <div className="property-search-drop-down-item">
                  <img src={HomeIcon} alt="home-icone" />
                  <span>Properties</span>
                  <ExpandMoreIcon sx={{ marginLeft: "15px" }} />
                </div>
                <div className="property-search-drop-down-item">
                  <img src={LocationIcon} alt="location-icone" />
                  <span>Location</span>
                  <ExpandMoreIcon sx={{ marginLeft: "15px" }} />
                </div>
                <div className="property-search-drop-down-item">
                  <img src={TypesIcon} alt="type-icone" />
                  <span>Types</span>
                  <ExpandMoreIcon sx={{ marginLeft: "15px" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
