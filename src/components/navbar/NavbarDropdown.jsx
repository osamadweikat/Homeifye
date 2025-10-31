import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";

export default function NavbarDropdown({ open, setOpen, dropdownRef }) {
  return (
    <div
      className="navbar-drop-down"
      ref={dropdownRef}
      onClick={(e) => {
        e.stopPropagation();
        setOpen(!open);
      }}
    >
      Pages{" "}
      <ExpandMoreIcon
        className={`dropdown-icon ${open ? "rotate" : ""}`}
        sx={{ fontSize: "22px" }}
      />
      <div className={`navbar-dropdown-list ${open ? "open" : ""}`}>
        <div className="navbar-dropdown-list-inner">
          <div className="dropdown-link-column">
            <Link
              to="/properties"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "/properties";
              }}
            >
              <p className="dropdown-link">Properties</p>
            </Link>
            <p className="dropdown-link">Login</p>
            <p className="dropdown-link">Register</p>
          </div>
          <div className="dropdown-link-column">
            <Link
              to="/contact"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "/our-offices";
              }}
            >
              <p className="dropdown-link">Our Offices</p>
            </Link>
            <p className="dropdown-link">Our Teams</p>
            <Link
              to="/contact"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "/contact-us";
              }}
            >
              <p className="dropdown-link">Contact Us</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
