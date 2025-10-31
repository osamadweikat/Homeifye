import NorthEastIcon from "@mui/icons-material/NorthEast";
import "./featured-listing-section.css";

export default function CollectionListItem({ item }) {
  return (
    <div className="collection-list">
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
  );
}
