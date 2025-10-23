import "./featured-listing-section.css";
import PropertyImage1 from "../../assets/images/property-image-1.avif";
import PropertyImage2 from "../../assets/images/property-image-2.avif";
import PropertyImage3 from "../../assets/images/property-image-3.avif";
import Button from "@mui/material/Button";

export default function FeaturedListingSection() {
  return (
    <div className="section-padding">
      <div className="container">
        <div className="header-section">
          <h2 className="header-title">Featured Listings</h2>
        </div>
        <div className="collection-lists-wrapper">
          <div className="collection-lists">
            <div className="collection-list">
              <div className="collection-list-content">
                <div className="list-image-wrapper">
                  <img src={PropertyImage1} alt="property-image1" />
                </div>
                <div className="list-details">
                  <h3 className="list-title">Willo Heights</h3>
                  <p className="list-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit animi omnis officia veritatis hic maxime nobis
                    consectetur, vero dolore ipsam dolor fugit delectus ipsum
                    dicta soluta at molestiae, similique aliquam!
                  </p>
                  <div className="list-price">
                    <span className="price">$290000</span>{" "}
                    <span className="per-month">/Monthly</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="collection-list">
              <div className="collection-list-content">
                <div className="list-image-wrapper">
                  <img src={PropertyImage2} alt="property-image2" />
                </div>
                <div className="list-details">
                  <h3 className="list-title">Maple Grove</h3>
                  <p className="list-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit animi omnis officia veritatis hic maxime nobis
                    consectetur, vero dolore ipsam dolor fugit delectus ipsum
                    dicta soluta at molestiae, similique aliquam!
                  </p>
                  <div className="list-price">
                    <span className="price">$400000</span>{" "}
                    <span className="per-month">/Monthly</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="collection-list">
              <div className="collection-list-content">
                <div className="list-image-wrapper">
                  <img src={PropertyImage3} alt="property-image3" />
                </div>
                <div className="list-details">
                  <h3 className="list-title">Pine Estates</h3>
                  <p className="list-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit animi omnis officia veritatis hic maxime nobis
                    consectetur, vero dolore ipsam dolor fugit delectus ipsum
                    dicta soluta at molestiae, similique aliquam!
                  </p>
                  <div className="list-price">
                    <span className="price">$180000</span>{" "}
                    <span className="per-month">/Monthly</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="collection-list-btn">
          <Button />
        </div>
      </div>
    </div>
  );
}
