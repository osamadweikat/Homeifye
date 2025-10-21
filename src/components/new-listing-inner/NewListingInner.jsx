import "./new-listing-inner.css";
import Button from "@mui/material/Button";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import RightArrow from "../../assets/images/right arrow.svg";
import PropertyImage1 from "../../assets/images/property-image-1.avif";
import PropertyImage2 from "../../assets/images/property-image-2.avif";
import PropertyImage3 from "../../assets/images/property-image-3.avif";

export default function NewListingInner() {
  return (
    <div className="new-listing-innert">
      <div className="new-listing-header">
        <h1 className="new-listing-title">New Listings</h1>
        <Button
          variant="outlined"
          sx={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            height: "52px",
            padding: "15px 30px",
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
              fill: "#ff6314",
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
          Explore All <img src={RightArrow} alt="arrow" />
        </Button>
      </div>
      <div className="collection-list-wrapper">
        <div className="property-items">
          <div className="property-item">
            <div className="property-image-wrapper">
              <img src={PropertyImage1} alt="property-image1" />
              <div className="icon-wrapper">
                <NorthEastIcon />
              </div>
            </div>
            <div className="property-details">
              <div className="property-details-top-row">
                <h3 className="property-name">Willow Heights</h3>
                <h3 className="property-price">$ 290000</h3>
              </div>
              <div className="property-details-bottom-row">
                <span className="property-location">
                  444 Ash Boulevard, Springfield
                </span>
                <span className="property-size">1600 Sq.Ft</span>
              </div>
            </div>
          </div>

          <div className="property-item">
            <div className="property-image-wrapper">
              <img src={PropertyImage2} alt="property-image2" />
              <div className="icon-wrapper">
                <NorthEastIcon />
              </div>
            </div>
            <div className="property-details">
              <div className="property-details-top-row">
                <h3 className="property-name">Maple Grove</h3>
                <h3 className="property-price">$ 400000</h3>
              </div>
              <div className="property-details-bottom-row">
                <span className="property-location">
                  333 Cherry Lane, Springfield
                </span>
                <span className="property-size">2200 Sq.Ft</span>
              </div>
            </div>
          </div>

          <div className="property-item">
            <div className="property-image-wrapper">
              <img src={PropertyImage3} alt="property-image3" />
              <div className="icon-wrapper">
                <NorthEastIcon />
              </div>
            </div>
            <div className="property-details">
              <div className="property-details-top-row">
                <h3 className="property-name">Pine Estates</h3>
                <h3 className="property-price">$ 180000</h3>
              </div>
              <div className="property-details-bottom-row">
                <span className="property-location">
                  222 Sqruce Street, Springfield
                </span>
                <span className="property-size">1000 Sq.Ft</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
