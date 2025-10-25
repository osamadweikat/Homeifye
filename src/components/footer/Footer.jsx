import "./footer.css";
import BrandLogoDark from "../../assets/images/brand-logo-dark.svg";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import RightArrow from "../../assets/images/right arrow.svg";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-padding">
        <div className="footer-container">
          <div className="footer-inner">
            <div className="footer-details">
              <img src={BrandLogoDark} alt="brand-logo-dark" />
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
              <button>
                Get for Free <img src={RightArrow} alt="arrow" />
              </button>
            </div>
            <div className="footer-links-wrapper">
              <div className="footer-link-column">
                <h2>Pages</h2>
                <div className="footer-links">
                  <span>Home</span>
                  <span>Properties</span>
                  <span>Contact Us</span>
                </div>
              </div>
              <div className="footer-link-column">
                <h2>Template</h2>
                <div className="footer-links">
                  <span>Style Guide</span>
                  <span>Licenses</span>
                  <span>Changelog</span>
                  <span>404</span>
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
              <h3>Need Help Customizing Your Site?</h3>
              <p>
                Let us personalize your pages or make adjustments to help your
                site shine.
              </p>
            </div>
            <button>
              {" "}
              Get in touch <img src={RightArrow} alt="arrow" />
            </button>
          </div>
          <div className="footer-bottom">
            <span>
              © All rights reserved. <span className="highlight">Flowfye.</span>
            </span>
            <span>
              Powered by <span className="highlight">Webflow.</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
