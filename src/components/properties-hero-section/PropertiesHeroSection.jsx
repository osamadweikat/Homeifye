import "./properties-hero-section.css";
import SearchProperty from "../search-property/SearchProperty";
import { Link, useLocation } from "react-router-dom";
import useInViewObserver from "../../hooks/useInViewObserver";

export default function PropertiesHeroSection() {
  useInViewObserver(".fade-section, .fade-title", { threshold: 0.3 }, true);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const search = queryParams.get("search");
  const properties = queryParams.get("properties");
  const locationFilter = queryParams.get("location");
  const types = queryParams.get("types");

  let title = "Properties";
  if (search) {
    title = search;
  } else if (properties) {
    title = properties;
  } else if (locationFilter) {
    title = locationFilter;
  } else if (types) {
    title = types;
  }

  return (
    <div className="properties-hero-section">
      <div className="properties-padding">
        <div className="properties-container">
          <div className="properties-breadcrumbs fade-section">
            <Link to="/">
              <span>Home</span>
            </Link>
            /
            <Link
              to="/properties"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "/properties";
              }}
            >
              <span>Properties</span>
            </Link>
          </div>
          <h1 className="fade-title">{title}</h1>
        </div>
      </div>
      <SearchProperty />
    </div>
  );
}
