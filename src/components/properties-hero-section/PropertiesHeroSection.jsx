import "./properties-hero-section.css";
import SearchProperty from "../search-property/SearchProperty";
import useReloadOnSameRoute from "../../hooks/useReloadOnSameRoute";
import { Link } from "react-router-dom";
import useInViewObserver from "../../hooks/useInViewObserver";

export default function PropertiesHeroSection() {
  const reloadIfSame = useReloadOnSameRoute();

  useInViewObserver(".fade-section, .fade-title", { threshold: 0.2 }, true);

  return (
    <div className="properties-hero-section">
      <div className="properties-padding">
        <div className="properties-container">
          <div className="properties-breadcrumbs fade-section">
            <Link to="/">
              <span>Home</span>
            </Link>
            /
            <Link to="/properties" onClick={() => reloadIfSame("/properties")}>
              <span>Properties</span>
            </Link>
          </div>
          <h1 className="fade-title">Properties</h1>
        </div>
      </div>
      <SearchProperty />
    </div>
  );
}
