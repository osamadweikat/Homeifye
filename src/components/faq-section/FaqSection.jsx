import { useState } from "react";
import "./faq-section.css";

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What services does Homeifye offer?",
      answer:
        "Homeifye connects buyers, sellers, and renters with a wide range of real estate services, including property listings, home valuation, and expert guidance through every step of the buying, selling, or renting process.",
    },
    {
      question: "How can I list my property on Homeifye?",
      answer:
        "You can easily list your property by signing up, filling in the property details, uploading photos, and setting your price. Our team will review and publish your listing promptly.",
    },
    {
      question: "Is Homeifye available in all regions?",
      answer:
        "Homeifye is expanding rapidly and is currently available in most major regions. You can check availability by searching for properties in your area on our website.",
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="faq-section-padding">
      <div className="faq-section-container">
        <div className="faq-section-header">
          <h2>Frequently Asked Questions</h2>
        </div>

        <div className="faq-section-content">
          {faqs.map((item, index) => (
            <div
              key={index}
              className={`faq-accordion ${
                activeIndex === index ? "active" : ""
              }`}
            >
              <div
                className="faq-accordion-label"
                onClick={() => handleToggle(index)}
              >
                <span>{item.question}</span>
                <div className="faq-label-icon">
                  <div className="faq-icon-bar horizontal"></div>
                  <div
                    className={`faq-icon-bar vertical ${
                      activeIndex === index ? "rotated" : ""
                    }`}
                  ></div>
                </div>
              </div>

              <div
                className="faq-accordion-pane"
                style={{
                  maxHeight: activeIndex === index ? "200px" : "0",
                  opacity: activeIndex === index ? 1 : 0,
                }}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
