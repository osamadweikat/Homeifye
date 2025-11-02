import "./footer.css";
import BrandLogoDark from "../../assets/images/brand-logo-dark.svg";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import RightArrow from "../../assets/images/right arrow.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-padding">
        <div className="footer-container">
          <div className="footer-inner">
            <div className="footer-details">
              <Link
                to="/"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "/";
                }}
              >
                <img src={BrandLogoDark} alt="brand-logo-dark" />
              </Link>
              <p>
                © Homeifye dedicated to revolutionizing the real estate
                experience. Through innovation and excellence.
              </p>
              <div className="footer-social-icons">
                <InstagramIcon />
                <FacebookIcon />
                <TwitterIcon />
                <LinkedInIcon />
              </div>
              <Link to="https://github.com/osamadweikat">
                <button>
                  Get for Free <img src={RightArrow} alt="arrow" />
                </button>
              </Link>
            </div>
            <div className="footer-links-wrapper">
              <div className="footer-link-column">
                <h2>Pages</h2>
                <div className="footer-links">
                  <Link
                    to="/"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = "/";
                    }}
                  >
                    <span>Home</span>
                  </Link>
                  <Link
                    to="/properties"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = "/properties";
                    }}
                  >
                    <span>Properties</span>
                  </Link>
                  <Link
                    to="/login"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = "/login";
                    }}
                  >
                    <span>Login</span>
                  </Link>
                  <Link
                    to="/register"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = "/register";
                    }}
                  >
                    <span>Register</span>
                  </Link>
                </div>
              </div>
              <div className="footer-link-column">
                <h2>Explore</h2>
                <div className="footer-links">
                  <Link
                    to="/our-offices"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = "/our-offices";
                    }}
                  >
                    <span>Our Offices</span>
                  </Link>
                  <Link
                    to="/our-teams"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = "/our-teams";
                    }}
                  >
                    <span>Our Teams</span>
                  </Link>
                  <Link
                    to="/contact-us"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = "/contact-us";
                    }}
                  >
                    <span>Contact Us</span>
                  </Link>
                </div>
              </div>
              <div className="footer-link-column">
                <h2>Contact</h2>
                <div className="footer-links">
                  <span>(62) 1829017</span>
                  <span>hello@homeifye.com</span>
                  <p>2912 Meadowbrook Road, Los Angeles, CA 90017</p>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-cta">
            <div className="footer-cta-content">
              <h3>Need Help Finding Your Dream Property?</h3>
              <p>
                Let us customize your experience and help you discover the
                perfect place to call home.
              </p>
            </div>
            <Link
              to="/contact-us"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "/contact-us";
              }}
            >
              <button>
                {" "}
                Get in touch <img src={RightArrow} alt="arrow" />
              </button>
            </Link>
          </div>
          <div className="footer-bottom">
            <span>
              © All rights reserved.{" "}
              <Link
                to="/"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "/";
                }}
              >
                <span className="highlight">Homeifye.</span>
              </Link>
            </span>
            <span>
              Powered by{" "}
              <Link to="https://github.com/osamadweikat">
                <span className="highlight">Osama Dweikat.</span>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
