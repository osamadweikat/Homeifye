import "./featured-listing-section.css";
import PropertyImage1 from "../../assets/images/property-image-1.avif";
import PropertyImage2 from "../../assets/images/property-image-2.avif";
import PropertyImage3 from "../../assets/images/property-image-3.avif";
import Button from "@mui/material/Button";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import RightArrow from "../../assets/images/right arrow.svg";

export default function FeaturedListingSection() {
  return (
    <div className="featured-section-padding">
      <div className="featured-container">
        <div className="featured-header-section">
          <h2>Featured Listings</h2>
        </div>
        <div className="collection-lists-wrapper">
          <div className="collection-lists">
            <div className="collection-list">
              <div className="collection-list-content">
                <div className="list-image-wrapper">
                  <img src={PropertyImage1} alt="property-image1" />
                </div>

                <div className="list-details">
                  <div className="list-text">
                    <div className="list-title-wrapper">
                      <h3 className="list-title">Willow Heights</h3>
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
                    <p className="list-body">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Reprehenderit animi omnis officia veritatis hic maxime
                      nobis consectetur, vero dolore ipsam dolor fugit delectus
                      ipsum dicta soluta at molestiae, similique aliquam!
                    </p>
                  </div>

                  <div className="list-price">
                    <span className="price">$ 290000</span>{" "}
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
                  <div className="list-text">
                    <div className="list-title-wrapper">
                      <h3 className="list-title">Maple Grove</h3>
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
                    <p className="list-body">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Reprehenderit animi omnis officia veritatis hic maxime
                      nobis consectetur, vero dolore ipsam dolor fugit delectus
                      ipsum dicta soluta at molestiae, similique aliquam!
                    </p>
                  </div>

                  <div className="list-price">
                    <span className="price">$ 400000</span>{" "}
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
                  <div className="list-text">
                    <div className="list-title-wrapper">
                      <h3 className="list-title">Pine Estates</h3>
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
                    <p className="list-body">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Reprehenderit animi omnis officia veritatis hic maxime
                      nobis consectetur, vero dolore ipsam dolor fugit delectus
                      ipsum dicta soluta at molestiae, similique aliquam!
                    </p>
                  </div>

                  <div className="list-price">
                    <span className="price">$ 180000</span>{" "}
                    <span className="per-month">/Monthly</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="collection-list-btn">
          <Button
            variant="outlined"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              height: "52px",
              padding: "0 30px",
              border: "1px solid #ff6314",
              borderRadius: "99px",
              backgroundColor: "transparent",
              color: "#ff6314",
              fontSize: "18px",
              fontFamily: "'Urbanist', sans-serif",
              textTransform: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
              "& img": {
                width: "22px",
                height: "22px",
                filter:
                  "invert(51%) sepia(94%) saturate(2048%) hue-rotate(359deg) brightness(100%) contrast(104%)",
                transition: "filter 0.3s ease, transform 0.3s ease",
              },
              "&:hover": {
                backgroundColor: "#ff6314",
                color: "#fff",
                "& img": {
                  filter:
                    "invert(100%) sepia(100%) saturate(0%) hue-rotate(141deg) brightness(106%) contrast(101%)",
                  transform: "translateX(4px)",
                },
              },
            }}
          >
            Explore All Properties <img src={RightArrow} alt="arrow" />
          </Button>
        </div>
      </div>
    </div>
  );
}
