import "./inner-section.css";
import Button from "@mui/material/Button";
import HomeHeroImage from "../../assets/images/home-hero.avif";
import RightArrow from "../../assets/images/right arrow.svg";

export default function InnerSection() {
  return (
    <div className="inner-section">
      <div className="content-box">
        <h1 className="slide-in">
          Find the right and best home for your family
        </h1>
        <Button
          variant="outlined"
          sx={{
            width: "240px",
            height: "52px",
            color: "white",
            borderColor: "rgba(255,255,255,0.8)",
            borderRadius: "50px",
            padding: "15px 30px",
            textTransform: "none",
            gap: "16px",
            "& img": {
              width: "28px",
              filter: "invert(1)",
              transition: "filter 0.3s ease",
            },
            "&:hover": {
              backgroundColor: "white",
              color: "#002820",
              borderColor: "white",
            },
            "&:hover img": { filter: "invert(0)" },

            "@media (max-width: 770px)": {
              width: "200px",
              height: "48px",
              "& .btn-text": { fontSize: "15px !important" },
              "& img": { width: "24px" },
            },
            "@media (max-width: 470px)": {
              width: "170px",
              height: "44px",
              "& .btn-text": { fontSize: "12px !important" },
              "& img": { width: "15px !important" },
            },
            "@media (max-width: 390px)": {
              width: "170px",
              height: "40px",
              "& .btn-text": { fontSize: "13px ! important" },
              "& img": { width: "20px" },
            },
            "@media (max-width: 320px)": {
              width: "170px",
              height: "36px",
              "& .btn-text": { fontSize: "10px ! important" },
              "& img": { width: "18px" },
            },
          }}
        >
          <span
            className="btn-text"
            style={{ fontFamily: "'Urbanist', sans-serif", fontSize: "18px" }}
          >
            Start exploring
          </span>
          <img src={RightArrow} alt="arrow" />
        </Button>
      </div>
      <div className="img-box">
        <img className="slide-in" src={HomeHeroImage} alt="home-hero-image" />
      </div>
    </div>
  );
}
