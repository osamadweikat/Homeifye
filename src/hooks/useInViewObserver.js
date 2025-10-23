import { useEffect, useState } from "react";

export default function useInViewObserver(
  selector,
  options = {},
  useClass = false
) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const checkInitialVisibility = (el) => {
      const rect = el.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom > 0;
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (useClass) {
            entry.target.classList.add("in-view");
          } else {
            setVisible(true);
          }
          observer.unobserve(entry.target);
        }
      });
    }, options);

    let elements = [];

    if (typeof selector === "string") {
      elements = Array.from(document.querySelectorAll(selector));
      elements.forEach((el) => {
        if (checkInitialVisibility(el)) {
          if (useClass) el.classList.add("in-view");
          else setVisible(true);
        } else {
          observer.observe(el);
        }
      });
    } else if (selector?.current) {
      const el = selector.current;
      if (checkInitialVisibility(el)) {
        if (useClass) el.classList.add("in-view");
        else setVisible(true);
      } else {
        observer.observe(el);
      }
    }

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [selector, options, useClass]);

  return visible;
}
