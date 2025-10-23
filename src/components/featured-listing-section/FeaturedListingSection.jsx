import { useEffect } from "react";
import "./featured-listing-section.css";
import PropertyImage1 from "../../assets/images/property-image-1.avif";
import PropertyImage2 from "../../assets/images/property-image-2.avif";
import PropertyImage3 from "../../assets/images/property-image-3.avif";
import Button from "@mui/material/Button";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import RightArrow from "../../assets/images/right arrow.svg";

export default function FeaturedListingSection() {
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

  const collections = [
    {
      img: PropertyImage1,
      name: "Willow Heights",
      price: "$290,000",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit animi omnis officia veritatis hic maxime nobis consectetur.",
    },
    {
      img: PropertyImage2,
      name: "Maple Grove",
      price: "$400,000",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit animi omnis officia veritatis hic maxime nobis consectetur.",
    },
    {
      img: PropertyImage3,
      name: "Pine Estates",
      price: "$180,000",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit animi omnis officia veritatis hic maxime nobis consectetur.",
    },
  ];

  return (
    <div className="featured-section-padding">
      <div className="featured-container">
        <div className="featured-header-section animate-on-scroll fade-up">
          <h2>Featured Listings</h2>
        </div>
        <div className="collection-lists-wrapper">
          <div className="collection-lists">
            {collections.map((item, index) => (
              <div className="collection-list" key={index}>
                <div className="collection-list-content">
                  <div className="list-image-wrapper animate-on-scroll scale-up">
                    <img src={item.img} alt={item.name} />
                  </div>
                  <div className="list-details animate-on-scroll fade-up">
                    <div className="list-text">
                      <div className="list-title-wrapper">
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
                      <div className="list-body-wrapper">
                        <p className="list-body">{item.desc}</p>
                      </div>
                    </div>
                    <div className="list-price">
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
