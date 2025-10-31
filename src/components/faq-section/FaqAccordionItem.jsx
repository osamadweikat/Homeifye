import { useRef } from "react";

export default function FaqAccordionItem({ item, isActive, onToggle }) {
  const contentRef = useRef(null);

  return (
    <div className={`faq-accordion ${isActive ? "active" : ""}`}>
      <div
        className="faq-accordion-label"
        onClick={onToggle}
        role="button"
        aria-expanded={isActive}
        aria-controls={`faq-pane-${item.id}`}
      >
        <span>{item.question}</span>
        <div className="faq-label-icon">
          <div className="faq-icon-bar horizontal"></div>
          <div
            className={`faq-icon-bar vertical ${isActive ? "rotated" : ""}`}
          ></div>
        </div>
      </div>

      <div
        id={`faq-pane-${item.id}`}
        ref={contentRef}
        className="faq-accordion-pane"
        style={{
          maxHeight: isActive ? `${contentRef.current?.scrollHeight}px` : "0",
          opacity: isActive ? 1 : 0,
          transition: "max-height 0.3s ease, opacity 0.3s ease",
          overflow: "hidden",
        }}
      >
        <p>{item.answer}</p>
      </div>
    </div>
  );
}
