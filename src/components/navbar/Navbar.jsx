import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import "./navbar.css";
import { navbarMenuIconStyles } from "./navbarMenuIconStyles";
import LogoImage from "../../assets/images/logo.svg";
import BrandLogoDark from "../../assets/images/brand-logo-dark.svg";
import NavbarDropdown from "./NavbarDropdown";
import Sidebar from "../sidebar/Sidebar";
import useReloadOnSameRoute from "../../hooks/useReloadOnSameRoute";

export default function Navbar({
  openDropdown,
  setOpenDropdown,
  variant = "dark",
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const reloadIfSame = useReloadOnSameRoute();
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [setOpenDropdown]);

  return (
    <nav
      className={`navbar ${
        variant === "light" ? "navbar-light" : "navbar-dark"
      }`}
    >
      <div className="padding-section">
        <div className="container">
          <div className="navbar-inner">
            <Link to="/" onClick={() => reloadIfSame("/")}>
              <img
                src={variant === "light" ? BrandLogoDark : LogoImage}
                alt="logo"
              />
            </Link>
            <div className="navbar-menus">
              <ul className="navbar-menus-list">
                <li className="navbar-item">
                  <Link to="/" onClick={() => reloadIfSame("/")}>
                    Home
                  </Link>
                </li>

                <li className="navbar-item">
                  <Link
                    to="/properties"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = "/properties";
                    }}
                  >
                    Properties
                  </Link>
                </li>

                <li className="navbar-item">
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
              <NavbarDropdown
                open={openDropdown}
                setOpen={setOpenDropdown}
                dropdownRef={dropdownRef}
              />
            </div>
            <div className="navbar-actions">
              <button className="navbar-btn">Get for Free</button>

              <MenuIcon
                sx={navbarMenuIconStyles}
                onClick={() => setIsSidebarOpen(true)}
                className="navbar-menu-icon"
              />

              <Sidebar
                isOpen={isSidebarOpen}
                setIsOpen={setIsSidebarOpen}
                variant={variant}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
