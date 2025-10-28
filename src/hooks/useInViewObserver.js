import { useEffect, useState } from "react";

export default function useInViewObserver(
  selector,
  options = {},
  useClass = false,
  extraDeps = []
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
        }
      });
    }, options);

    let elements = [];

    if (typeof selector === "string") {
      elements = Array.from(document.querySelectorAll(selector));
      elements.forEach((el) => {
        if (useClass) el.classList.remove("in-view");
        if (!checkInitialVisibility(el)) {
          observer.observe(el);
        } else if (useClass) {
          el.classList.add("in-view");
        } else {
          setVisible(true);
        }
      });
    } else if (selector?.current) {
      const el = selector.current;
      if (useClass) el.classList.remove("in-view");
      if (!checkInitialVisibility(el)) {
        observer.observe(el);
      } else if (useClass) {
        el.classList.add("in-view");
      } else {
        setVisible(true);
      }
    }

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [selector, options, useClass, extraDeps]);

  return visible;
}
