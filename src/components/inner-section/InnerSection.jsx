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
          className="slide-in"
          variant="outlined"
          sx={{
            width: "auto",
            height: "52px",
            color: "white",
            borderColor: "rgba(255,255,255,0.8)",
            borderRadius: "50px",
            padding: "15px 30px",
            fontFamily: "'Urbanist', sans-serif",
            fontSize: "18px",
            textTransform: "none",
            transition: "all 0.2s ease",
            gap: "16px",
            "& img": {
              width: "28px",
              height: "auto",
              filter: "invert(1)",
              transition: "filter 0.3s ease",
            },
            "&:hover": {
              backgroundColor: "white",
              color: "#002820",
              borderColor: "white",
            },
            "&:hover img": {
              filter: "invert(0)",
            },
          }}
        >
          Start exploring
          <img src={RightArrow} alt="arrow" />
        </Button>
      </div>
      <div className="img-box">
        <img className="slide-in" src={HomeHeroImage} alt="home-hero-image" />
      </div>
    </div>
  );
}
