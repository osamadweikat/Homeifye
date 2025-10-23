import { useEffect, useRef, useState } from "react";

export default function useSearchVisibility() {
  const searchRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const currentRef = searchRef.current;
    const hasScroll =
      document.documentElement.scrollHeight > window.innerHeight;

    if (!hasScroll) {
      setVisible(true);
      return;
    }

    let userHasScrolled = false;

    const handleScroll = () => {
      userHasScrolled = true;
    };

    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && userHasScrolled) {
            setVisible(true);
            observer.disconnect();
            window.removeEventListener("scroll", handleScroll);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { searchRef, visible };
}
