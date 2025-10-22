import { useEffect } from "react";
import "./new-listing-inner.css";
import Button from "@mui/material/Button";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import RightArrow from "../../assets/images/right arrow.svg";
import PropertyImage1 from "../../assets/images/property-image-1.avif";
import PropertyImage2 from "../../assets/images/property-image-2.avif";
import PropertyImage3 from "../../assets/images/property-image-3.avif";

export default function NewListingInner() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const properties = [
    {
      img: PropertyImage1,
      name: "Willow Heights",
      price: "$290,000",
      size: "1600 Sq.Ft",
      loc: "444 Ash Boulevard",
    },
    {
      img: PropertyImage2,
      name: "Maple Grove",
      price: "$400,000",
      size: "2200 Sq.Ft",
      loc: "333 Cherry Lane",
    },
    {
      img: PropertyImage3,
      name: "Pine Estates",
      price: "$180,000",
      size: "1000 Sq.Ft",
      loc: "222 Sqruce Street",
    },
  ];

  return (
    <div className="new-listing-innert">
      <div className="new-listing-header animate-on-scroll fade-up">
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
          {properties.map((p, i) => (
            <div className="property-item" key={i}>
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
