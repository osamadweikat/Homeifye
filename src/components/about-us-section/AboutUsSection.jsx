import "./about-us-section.css";
import AboutImage1 from "../../assets/images/about-image1.avif";
import AboutImage2 from "../../assets/images/about-image2.png";
import MoneyIcon from "../../assets/images/money-icon.svg";
import LikeIcon from "../../assets/images/like-icon.svg";
import UsersIcon from "../../assets/images/users-icon.svg";
import useInViewObserver from "../../hooks/useInViewObserver";

export default function AboutUsSection() {
  useInViewObserver(".animate-up", { threshold: 0.2 }, true);

  return (
    <div className="section-padding">
      <div className="container">
        <div className="image-box animate-up">
          <img src={AboutImage1} alt="about-image1" />
          <img src={AboutImage2} alt="about-image2" />
        </div>

        <div className="content-box animate-up">
          <span className="title">About us</span>
          <h2 className="about-heading">
            About our <br />
            Real Estate Firm
          </h2>
          <p>
            Our mission is simple, to provide unparalleled expertise, guidance,
            and support to our clients across their real estate journey.
          </p>

          <div className="about-items">
            <div className="about-item animate-up">
              <img src={MoneyIcon} alt="money-icon" />
              <div className="about-item-text">
                <h3 className="item-title">Affordable Price</h3>
                <span className="body">
                  Offering competitive rates that make quality accessible to
                  all.
                </span>
              </div>
            </div>

            <div className="about-item animate-up">
              <img src={LikeIcon} alt="like-icon" />
              <div className="about-item-text">
                <h3 className="item-title">Clear Legality</h3>
                <span className="body">
                  Ensuring transparent and compliant legal processes.
                </span>
              </div>
            </div>

            <div className="about-item animate-up">
              <img src={UsersIcon} alt="users-icon" />
              <div className="about-item-text">
                <h3 className="item-title">Experienced Agents</h3>
                <span className="body">
                  Guided by professionals with expertise in the industry.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
