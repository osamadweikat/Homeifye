import "./navbar.css";
import LogoImage from "../../assets/images/logo.svg";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";

export default function Navbar({ openDropdown, setOpenDropdown }) {
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
              <MenuIcon className="navbar-open" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
