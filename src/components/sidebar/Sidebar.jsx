import "./sidebar.css";
import LogoDark from "../../assets/images/logo-dark.svg";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar({ isOpen, setIsOpen }) {
  const [pagesOpen, setPagesOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
    setPagesOpen(false);
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-inner">
        <CloseIcon className="sidebar-close" onClick={handleClose} />
        <div className="sidebar-content">
          <div className="sidebar-header">
            <Link to="/" onClick={handleClose}>
              <img src={LogoDark} alt="logo" className="sidebar-logo" />
            </Link>
          </div>
          <ul className="sidebar-menu">
            <li>
              <Link to="/" onClick={handleClose}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/properties" onClick={handleClose}>
                Properties
              </Link>
            </li>
            <li>
              <Link to="/contact-us" onClick={handleClose}>
                Contact Us
              </Link>
            </li>
            <li
              className="sidebar-dropdown"
              onClick={() => setPagesOpen(!pagesOpen)}
            >
              Pages
              <ExpandMoreIcon
                className={`pages-dropdown-icon ${pagesOpen ? "rotate" : ""}`}
                sx={{ fontSize: 22 }}
              />
            </li>
            {pagesOpen && (
              <ul className="sidebar-submenu">
                <li>
                  <Link to="/properties" onClick={handleClose}>
                    Properties
                  </Link>
                </li>
                <li>
                  <Link to="/login" onClick={handleClose}>
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/register" onClick={handleClose}>
                    Register
                  </Link>
                </li>
                <li>
                  <Link to="/our-offices" onClick={handleClose}>
                    Our Offices
                  </Link>
                </li>
                <li>
                  <Link to="/our-teams" onClick={handleClose}>
                    Our Teams
                  </Link>
                </li>
                <li>
                  <Link to="/contact-us" onClick={handleClose}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
