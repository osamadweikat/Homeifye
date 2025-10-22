import "./home.css";
import { useState, useEffect, useRef } from "react";
import Navbar from "../../components/navbar/Navbar";
import InnerSection from "../../components/inner-section/InnerSection";
import SearchProperty from "../../components/search-property/SearchProperty";
import NewListingInner from "../../components/new-listing-inner/NewListingInner";
import AboutUsSection from "../../components/about-us-section/AboutUsSection";

export default function Home() {
  const [openDropdown, setOpenDropdown] = useState(false);
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

  return (
    <div className="home">
      <div onClick={() => setOpenDropdown(false)} className="home-hero">
        <Navbar openDropdown={openDropdown} setOpenDropdown={setOpenDropdown} />
        <InnerSection />
      </div>
      <SearchProperty searchRef={searchRef} visible={visible} />
      <NewListingInner />
      <AboutUsSection />
    </div>
  );
}
