import "./new-listing-inner.css";
import Button from "@mui/material/Button";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import PropertyImage1 from "../../assets/images/property-image-1.avif";
import PropertyImage2 from "../../assets/images/property-image-2.avif";
import PropertyImage3 from "../../assets/images/property-image-3.avif";

export default function NewListingInner() {
  return (
    <div className="new-listing-innert">
      <div className="new-listing-header">
        <h1 className="new-listing-title">New Listings</h1>
        <Button>Explor All</Button>
      </div>
      <div className="collection-list-wrapper">
        <div className="property-items">
          <div className="property-item">
            <img src={PropertyImage1} alt="property-image1" />
            <div className="icon-wrapper">
              <NorthEastIcon />
            </div>
            <div className="property-details">
              <div className="property-details-top-row">
                <h3 className="proberty-name">Willow Heights</h3>
                <h3 className="property-price">$ 290000</h3>
              </div>
              <div className="property-details-bottom-row">
                <h6 className="property-location">
                  444 Ash Boulevard, Springfield
                </h6>
                <h6 className="property-size">1600 Sq.Ft</h6>
              </div>
            </div>
          </div>
          <div className="property-item">
            <img src={PropertyImage2} alt="property-image2" />
            <div className="icon-wrapper">
              <NorthEastIcon />
            </div>
            <div className="property-details">
              <div className="property-details-top-row">
                <h3 className="proberty-name">Maple Grove</h3>
                <h3 className="property-price">$ 400000</h3>
              </div>
              <div className="property-details-bottom-row">
                <h6 className="property-location">
                  333 Cherry Lane, Springfield
                </h6>
                <h6 className="property-size">2200 Sq.Ft</h6>
              </div>
            </div>
          </div>
          <div className="property-item">
            <img src={PropertyImage3} alt="property-image3" />
            <div className="icon-wrapper">
              <NorthEastIcon />
            </div>
            <div className="property-details">
              <div className="property-details-top-row">
                <h3 className="proberty-name">Pine Estates</h3>
                <h3 className="property-price">$ 180000</h3>
              </div>
              <div className="property-details-bottom-row">
                <h6 className="property-location">
                  222 Sqruce Street, Springfield
                </h6>
                <h6 className="property-size">1000 Sq.Ft</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
