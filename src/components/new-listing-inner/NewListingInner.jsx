import "./new-listing-inner.css";
import RightArrow from "../../assets/images/right arrow.svg";
import { propertiesData } from "../../data/propertiesData";
import useInViewObserver from "../../hooks/useInViewObserver";
import PropertyItem from "./PropertyItem";

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
          {displayedProperties.map((property) => (
            <PropertyItem key={property.id} property={property} />
          ))}
        </div>
      </div>
    </div>
  );
}
