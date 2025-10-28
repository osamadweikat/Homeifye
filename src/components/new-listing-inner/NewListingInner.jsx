import "./new-listing-inner.css";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import RightArrow from "../../assets/images/right arrow.svg";
import { propertiesData } from "../../data/propertiesData";
import useInViewObserver from "../../hooks/useInViewObserver";

export default function NewListingInner({ variant = "home", data }) {
  const isHome = variant === "home";

  const displayedProperties =
    data || (isHome ? propertiesData.slice(0, 3) : propertiesData);

  useInViewObserver(".animate-on-scroll", { threshold: 0.3 }, true, [
    displayedProperties,
  ]);

  return (
    <div className="new-listing-innert">
      {isHome && (
        <div className="new-listing-header animate-on-scroll fade-up">
          <h1 className="new-listing-title">New Listings</h1>
          <button className="new-listing-btn">
            Explore All <img src={RightArrow} alt="arrow" />
          </button>
        </div>
      )}

      <div className="collection-list-wrapper">
        <div className="property-items">
          {displayedProperties.map((p) => (
            <div className="property-item" key={p.id}>
              <div className="property-image-wrapper animate-on-scroll scale-up">
                <img src={p.img} alt={p.name} />
                <div className="icon-wrapper">
                  <NorthEastIcon />
                </div>
              </div>
              <div className="property-details animate-on-scroll fade-up">
                <div className="property-details-top-row">
                  <h3 className="property-name">{p.name}</h3>
                  <h3 className="property-price">{p.price}</h3>
                </div>
                <div className="property-details-bottom-row">
                  <span className="property-location">{p.loc}</span>
                  <span className="property-size">{p.size}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
