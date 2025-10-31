import { useState, useRef } from "react";
import "./faq-section.css";
import useInViewObserver from "../../hooks/useInViewObserver";
import { faqData } from "../../data/faqData";
import FaqAccordionItem from "./FaqAccordionItem";

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(null);
  const headerRef = useRef(null);

  useInViewObserver(headerRef, { threshold: 0.2 }, true);
  useInViewObserver(".faq-accordion-label", { threshold: 0.3 }, true);

  const handleToggle = (id) => {
    setActiveIndex((prev) => (prev === id ? null : id));
  };

  return (
    <div className="faq-section-padding">
      <div className="faq-section-container">
        <div className="faq-section-header" ref={headerRef}>
          <h2>Frequently Asked Questions</h2>
        </div>

        <div className="faq-section-content">
          {faqData.map((item) => (
            <FaqAccordionItem
              key={item.id}
              item={item}
              isActive={activeIndex === item.id}
              onToggle={() => handleToggle(item.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
