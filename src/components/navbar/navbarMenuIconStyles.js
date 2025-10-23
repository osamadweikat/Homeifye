export const navbarMenuIconStyles = {
  display: "none",
  flexFlow: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "6px",
  cursor: "pointer",
  color: "white",
  fontSize: {
    xs: "40px",
    sm: "46px",
    md: "60px",
  },
  backgroundColor: "transparent",
  transition: "all 0.3s ease",

  "&:hover": {
    color: "var(--secondary-color)",
  },

  "@media (max-width: 991px)": {
    width: "60px",
    height: "50px",
    fontSize: "60px",
    marginLeft: "5px",
    display: "inline-flex",
  },

  "@media (max-width: 767px)": {
    fontSize: "46px",
    width: "50px",
    height: "45px",
  },

  "@media (max-width: 479px)": {
    fontSize: "40px",
    width: "45px",
    height: "40px",
  },

  "@media (max-width: 320px)": {
    fontSize: "36px",
    width: "40px",
    height: "36px",
  },
};
