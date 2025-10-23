import "./featured-listing-section.css";
import { propertiesData } from "../../data/propertiesData";
import useInViewObserver from "../../hooks/useInViewObserver";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import RightArrow from "../../assets/images/right arrow.svg";

export default function FeaturedListingSection() {
  useInViewObserver(".animate-on-scroll", { threshold: 0.3 }, true);

  return (
    <div className="featured-section-padding">
      <div className="featured-container">
        <div className="featured-header-section animate-on-scroll fade-up">
          <h2>Featured Listings</h2>
        </div>
        <div className="collection-lists-wrapper">
          <div className="collection-lists">
            {propertiesData.map((item) => (
              <div className="collection-list" key={item.id}>
                <div className="collection-list-content">
                  <div className="list-image-wrapper animate-on-scroll scale-up">
                    <img src={item.img} alt={item.name} />
                  </div>
                  <div className="list-details">
                    <div className="list-title-wrapper animate-on-scroll fade-up">
                      <h3 className="list-title">{item.name}</h3>
                      <div className="collection-icon-wrapper">
                        <NorthEastIcon
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            color: "white",
                          }}
                        />
                      </div>
                    </div>
                    <div className="list-body-wrapper animate-on-scroll fade-up">
                      <p className="list-body">{item.description}</p>
                    </div>
                    <div className="list-price animate-on-scroll fade-up">
                      <span className="price">{item.price}</span>{" "}
                      <span className="per-month">/Monthly</span>
                    </div>
                  </div>
                </div>
              </div>
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
