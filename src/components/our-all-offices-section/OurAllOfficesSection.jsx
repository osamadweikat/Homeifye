import "./our-all-offices-section.css";
import OurOfficesImage1 from "../../assets/images/our-office-image-1.webp";
import OurOfficesImage2 from "../../assets/images/our-office-image-2.webp";
import OurOfficesImage3 from "../../assets/images/our-office-image-3.webp";

export default function OurAllOfficesSection() {
  return (
    <div className="our-all-offices-section-padding">
      <div className="our-offices-container">
        <div className="our-offices-header">
          <h2>Our All Offices</h2>
        </div>
        <div className="our-offices-content">
          <div className="our-offices-content-card">
            <div className="our-offices-card-img">
              <img src={OurOfficesImage1} alt="our-offices-img1" />
            </div>
            <div className="our-offices-card-details">
              <h3>California</h3>
              <div className="our-offices-card-details-location">
                <p>
                  123 Main Street, Apt 401 Los Angeles, CA 90001 United States
                </p>
                <div className="our-offices-card-details-contact">
                  <span>+44 (0)20 7608 7900</span>
                  <span>info@wilkinsoneyre.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className="our-offices-content-card">
            <div className="our-offices-card-img">
              <img src={OurOfficesImage2} alt="our-offices-img2" />
            </div>
            <div className="our-offices-card-details">
              <h3>New York</h3>
              <div className="our-offices-card-details-location">
                <p>55 Broadway, Suite 302 New York, NY 10006 United States</p>
                <div className="our-offices-card-details-contact">
                  <span>+44 (0)20 7608 7921</span>
                  <span>info@wilkinsoneyre.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className="our-offices-content-card">
            <div className="our-offices-card-img">
              <img src={OurOfficesImage3} alt="our-offices-img3" />
            </div>
            <div className="our-offices-card-details">
              <h3>Washington DC</h3>
              <div className="our-offices-card-details-location">
                <p>
                  789 Elm Street, Unit 201 Washington, DC 20001 United States
                </p>
                <div className="our-offices-card-details-contact">
                  <span>+44 (0)20 7608 7922</span>
                  <span>info@wilkinsoneyre.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
