import "./home.css";
import LogoImage from "../../assets/images/logo.svg";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import HomeHeroImage from "../../assets/images/home-hero.avif";
import RightArrow from "../../assets/images/right arrow.svg";

export default function Home() {
  return (
    <div className="home">
      <div className="home-hero">
        <nav className="navbar">
          <div className="padding-section">
            <div className="container">
              <div className="navbar-inner">
                <img src={LogoImage} alt="logo" />
                <div className="navbar-menus">
                  <ul className="navbar-menus-list">
                    <li className="navbar-item">Home</li>
                    <li className="navbar-item">Properties</li>
                    <li className="navbar-item">Contact Us</li>
                  </ul>
                  <div className="navbar-drop-down">
                    Pages <ExpandMoreIcon />
                  </div>
                </div>
                <Button
                  variant="outlined"
                  sx={{
                    width: "160px",
                    height: "52px",
                    color: "white",
                    borderColor: "rgba(255,255,255,0.8)",
                    borderRadius: "50px",
                    padding: "15px 30px",
                    fontFamily: "'Urbanist', sans-serif",
                    fontSize: "17px",
                    textTransform: "none",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      backgroundColor: "white",
                      color: "#002820",
                      borderColor: "white",
                    },
                  }}
                >
                  Get for Free
                </Button>
              </div>
            </div>
          </div>
        </nav>
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
            <img
              className="slide-in"
              src={HomeHeroImage}
              alt="home-hero-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
