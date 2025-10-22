import "./navbar.css";
import { useState } from "react";
import LogoImage from "../../assets/images/logo.svg";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Sidebar from "../sidebar/Sidebar";

export default function Navbar({ openDropdown, setOpenDropdown }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
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
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenDropdown(!openDropdown);
                }}
              >
                Pages{" "}
                <ExpandMoreIcon
                  className={`dropdown-icon ${openDropdown ? "rotate" : ""}`}
                  sx={{ fontSize: "22px" }}
                />
                <div
                  className={`navbar-dropdown-list ${
                    openDropdown ? "open" : ""
                  }`}
                >
                  <div className="navbar-dropdown-list-inner">
                    <div className="dropdown-link-column">
                      <p className="dropdown-link">Properties</p>
                      <p className="dropdown-link">Properties Details</p>
                      <p className="dropdown-link">Contact Us</p>
                    </div>
                    <div className="dropdown-link-column">
                      <p className="dropdown-link">Style Guides</p>
                      <p className="dropdown-link">Licenses</p>
                      <p className="dropdown-link">Changelog</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="navbar-actions">
              <Button
                className="navbar-btn"
                variant="outlined"
                sx={{
                  width: "160px",
                  height: "52px",
                  color: "white",
                  borderColor: "rgba(255,255,255,0.8)",
                  borderRadius: "50px",
                  padding: "15px 30px",
                  fontFamily: "'Urbanist', sans-serif",
                  fontSize: "clamp(5px, 0.5vw, 17px)",
                  textTransform: "none",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    backgroundColor: "white",
                    color: "#002820",
                    borderColor: "white",
                  },
                  "@media (max-width: 1700px)": {
                    fontSize: "15px !important",
                    width: "140px",
                    height: "48px",
                    padding: "12px 24px",
                  },
                  "@media (max-width: 479px)": {
                    fontSize: "13px !important",
                    width: "140px",
                    height: "48px",
                    padding: "12px 24px",
                  },
                  "@media (max-width: 320px)": {
                    fontSize: "10px",
                    width: "130px",
                    height: "44px",
                    padding: "10px 22px",
                  },
                }}
              >
                Get for Free
              </Button>

              <MenuIcon
                className="navbar-open"
                onClick={() => setIsSidebarOpen(true)}
              />
              <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
