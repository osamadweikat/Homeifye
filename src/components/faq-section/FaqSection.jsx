import { useState, useRef } from "react";
import "./faq-section.css";
import useInViewObserver from "../../hooks/useInViewObserver";
import { faqData } from "../../data/faqData";

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(null);
  const headerRef = useRef(null);
  const contentRefs = useRef([]);
  
  useInViewObserver(headerRef, { threshold: 0.2 }, true);
  useInViewObserver(".faq-accordion-label", { threshold: 0.3 }, true);

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="faq-section-padding">
      <div className="faq-section-container">
        <div className="faq-section-header" ref={headerRef}>
          <h2>Frequently Asked Questions</h2>
        </div>

        <div className="faq-section-content">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`faq-accordion ${activeIndex === index ? "active" : ""}`}
            >
              <div
                className="faq-accordion-label"
                onClick={() => handleToggle(index)}
                role="button"
                aria-expanded={activeIndex === index}
                aria-controls={`faq-pane-${index}`}
              >
                <span>{item.question}</span>
                <div className="faq-label-icon">
                  <div className="faq-icon-bar horizontal"></div>
                  <div
                    className={`faq-icon-bar vertical ${activeIndex === index ? "rotated" : ""}`}
                  ></div>
                </div>
              </div>

              <div
                id={`faq-pane-${index}`}
                ref={(el) => (contentRefs.current[index] = el)}
                className="faq-accordion-pane"
                style={{
                  maxHeight:
                    activeIndex === index
                      ? `${contentRefs.current[index]?.scrollHeight}px`
                      : "0",
                  opacity: activeIndex === index ? 1 : 0,
                  transition: "max-height 0.3s ease, opacity 0.3s ease",
                  overflow: "hidden",
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
