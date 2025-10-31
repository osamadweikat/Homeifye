import "./our-all-offices-section.css";
import { officesData } from "../../data/officesData";
import useInViewObserver from "../../hooks/useInViewObserver";

export default function OurAllOfficesSection() {
  useInViewObserver(".animate-on-scroll", { threshold: 0.3 }, true);

  return (
    <div className="our-all-offices-section-padding">
      <div className="our-offices-container">
        <div className="our-offices-header animate-on-scroll fade-up">
          <h2>Our All Offices</h2>
        </div>
        <div className="our-offices-content">
          {officesData.map((office, index) => (
            <div className="our-offices-content-card" key={index}>
              <div className="our-offices-card-img animate-on-scroll scale-up">
                <img src={office.image} alt={`our-offices-img-${index + 1}`} />
              </div>
              <div className="our-offices-card-details">
                <h3 className="animate-on-scroll fade-up">{office.city}</h3>
                <div className="our-offices-card-details-location animate-on-scroll fade-up">
                  <p>{office.address}</p>
                  <div className="our-offices-card-details-contact">
                    <span>{office.phone}</span>
                    <span>{office.email}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
