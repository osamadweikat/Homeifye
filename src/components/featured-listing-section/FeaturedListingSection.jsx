import "./featured-listing-section.css";
import { propertiesData } from "../../data/propertiesData";
import useInViewObserver from "../../hooks/useInViewObserver";
import RightArrow from "../../assets/images/right arrow.svg";
import CollectionListItem from "./CollectionListItem";

export default function FeaturedListingSection() {
  useInViewObserver(".animate-on-scroll", { threshold: 0.3 }, true);

  const displayedProperties = propertiesData.slice(3, 6);

  return (
    <div className="featured-section-padding">
      <div className="featured-container">
        <div className="featured-header-section animate-on-scroll fade-up">
          <h2>Featured Listings</h2>
        </div>
        <div className="collection-lists-wrapper">
          <div className="collection-lists">
            {displayedProperties.map((item) => (
              <CollectionListItem key={item.id} item={item} />
            ))}
          </div>
        </div>
        <div className="collection-list-btn animate-on-scroll fade-up">
          <button>
            Explore All Properties{" "}
            <img src={RightArrow} alt="arrow" className="collection-list-img" />
          </button>
        </div>
      </div>
    </div>
  );
}
