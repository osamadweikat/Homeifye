import "./navbar.css";
import { navbarMenuIconStyles } from "./navbarMenuIconStyles";
import { useState } from "react";
import LogoImage from "../../assets/images/logo.svg";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
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
              <button className="navbar-btn">Get for Free</button>
              <MenuIcon
                sx={navbarMenuIconStyles}
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
