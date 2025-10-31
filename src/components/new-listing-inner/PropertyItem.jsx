import { Link } from "react-router-dom";
import NorthEastIcon from "@mui/icons-material/NorthEast";

export default function PropertyItem({ property }) {
  return (
    <Link to={`/properties/${property.id}`}>
      <div className="property-item">
        <div className="property-image-wrapper animate-on-scroll scale-up">
          <img src={property.img} alt={property.name} />
          <div className="icon-wrapper">
            <NorthEastIcon />
          </div>
        </div>
        <div className="property-details animate-on-scroll fade-up">
          <div className="property-details-top-row">
            <h3 className="property-name">{property.name}</h3>
            <h3 className="property-price">{property.price}</h3>
          </div>
          <div className="property-details-bottom-row">
            <span className="property-location">{property.loc}</span>
            <span className="property-size">{property.size}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
