import "./sidebar.css";
import LogoDark from "../../assets/images/logo-dark.svg";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

export default function Sidebar({ isOpen, setIsOpen }) {
  const [pagesOpen, setPagesOpen] = useState(false);

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-inner">
        <CloseIcon className="sidebar-close" onClick={() => setIsOpen(false)} />

        <div className="sidebar-content">
          <div className="sidebar-header">
            <img src={LogoDark} alt="logo" className="sidebar-logo" />
          </div>

          <ul className="sidebar-menu">
            <li>Home</li>
            <li>Properties</li>
            <li>Contact Us</li>

            <li
              className="sidebar-dropdown"
              onClick={() => setPagesOpen(!pagesOpen)}
            >
              Pages
              <ExpandMoreIcon
                className={`dropdown-icon ${pagesOpen ? "rotate" : ""}`}
                sx={{ fontSize: 22 }}
              />
            </li>

            {pagesOpen && (
              <ul className="sidebar-submenu">
                <li>Properties</li>
                <li>Properties Details</li>
                <li>Contact Us</li>
                <li>Style Guides</li>
                <li>Licenses</li>
                <li>Changelog</li>
              </ul>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
