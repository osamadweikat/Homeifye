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
                  color: "white",
                  borderColor: "rgba(255,255,255,0.8)",
                  borderRadius: "50px",
                  fontFamily: "'Urbanist', sans-serif",
                  textTransform: "none",
                  transition: "all 0.3s ease",
                  backgroundColor: "transparent",
                  fontSize: "17px",
                  width: "160px",
                  height: "52px",
                  padding: "15px 30px",

                  "&:hover": {
                    backgroundColor: "white",
                    color: "#002820",
                    borderColor: "white",
                  },

                  "@media (max-width: 790px)": {
                    fontSize: "14px !important",
                    width: "150px",
                    height: "48px",
                    padding: "12px 26px",
                  },
                  "@media (max-width: 670px)": {
                    fontSize: "15px",
                    width: "140px",
                    height: "45px",
                    padding: "10px 22px",
                  },
                  "@media (max-width: 550px)": {
                    fontSize: "14px",
                    width: "130px",
                    height: "42px",
                    padding: "8px 20px",
                  },
                  "@media (max-width: 480px)": {
                    fontSize: "10px !important",
                    width: "120px",
                    height: "40px",
                    padding: "6px 16px",
                  },
                  "@media (max-width: 390px)": {
                    fontSize: "12px",
                    width: "110px",
                    height: "38px",
                    padding: "6px 14px",
                  },
                  "@media (max-width: 320px)": {
                    fontSize: "11px",
                    width: "100px",
                    height: "34px",
                    padding: "5px 12px",
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
