import "./home.css";
import LogoImage from "../../assets/images/logo.svg";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import HomeHeroImage from "../../assets/images/home-hero.avif";
import RightArrow from "../../assets/images/right arrow.svg";
import HomeIcon from "..//../assets/images/home-icon.svg";
import LocationIcon from "..//../assets/images/location-icon.svg";
import TypesIcon from "..//../assets/images/types-icon.svg";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [openDropdown, setOpenDropdown] = useState(false);
  const searchRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const currentRef = searchRef.current;
    let userHasScrolled = false;

    const handleScroll = () => {
      userHasScrolled = true;
    };

    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && userHasScrolled) {
            setVisible(true);
            observer.disconnect();
            window.removeEventListener("scroll", handleScroll);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
                  <div
                    className="navbar-drop-down"
                    onClick={() => setOpenDropdown(!openDropdown)}
                  >
                    Pages{" "}
                    <ExpandMoreIcon
                      className={`dropdown-icon ${
                        openDropdown ? "rotate" : ""
                      }`}
                      sx={{ fontSize: "22px" }}
                    />
                    <div
                      className={`dropdown-menu-wrapper ${
                        openDropdown ? "open" : ""
                      }`}
                    >
                      <div className="dropdown-menu">
                        <div className="dropdown-column">
                          <p>Properties</p>
                          <p>Properties Details</p>
                          <p>Contact Us</p>
                        </div>
                        <div className="dropdown-column">
                          <p>Style Guides</p>
                          <p>Licenses</p>
                          <p>Changelog</p>
                        </div>
                      </div>
                    </div>
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
      <div className="search-property">
        <div className="search-property-padding">
          <div className="search-property-container">
            <div className="search-property-inner" ref={searchRef}>
              <div className="property-search-block">
                <div
                  className={`property-search-bar-wrapper ${
                    visible ? "visible" : ""
                  }`}
                >
                  <SearchIcon className="search-icon" />
                  <input
                    type="text"
                    className="search-input"
                    placeholder="Search for properties"
                  />
                  <button>Search</button>
                </div>
                <div
                  className={`property-search-drop-downs ${
                    visible ? "visible" : ""
                  }`}
                >
                  <div className="property-search-drop-down-item">
                    <img src={HomeIcon} alt="home-icone" />
                    <span>Properties</span>
                    <ExpandMoreIcon sx={{ marginLeft: "15px" }} />
                  </div>
                  <div className="property-search-drop-down-item">
                    <img src={LocationIcon} alt="location-icone" />
                    <span>Location</span>
                    <ExpandMoreIcon sx={{ marginLeft: "15px" }} />
                  </div>
                  <div className="property-search-drop-down-item">
                    <img src={TypesIcon} alt="type-icone" />
                    <span>Types</span>
                    <ExpandMoreIcon sx={{ marginLeft: "15px" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
