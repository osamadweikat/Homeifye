import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
  );
}
