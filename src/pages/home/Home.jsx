import "./home.css";
import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import InnerSection from "../../components/inner-section/InnerSection";
import SearchProperty from "../../components/search-property/SearchProperty";
import NewListingInner from "../../components/new-listing-inner/NewListingInner";
import AboutUsSection from "../../components/about-us-section/AboutUsSection";
import FeaturedListingSection from "../../components/featured-listing-section/FeaturedListingSection";
import useSearchVisibility from "../../hooks/useSearchVisibility";

export default function Home() {
  const [openDropdown, setOpenDropdown] = useState(false);
  const { searchRef, visible } = useSearchVisibility();

  return (
    <div className="home">
      <div onClick={() => setOpenDropdown(false)} className="home-hero">
        <Navbar openDropdown={openDropdown} setOpenDropdown={setOpenDropdown} />
        <InnerSection />
      </div>
      <SearchProperty searchRef={searchRef} visible={visible} />
      <NewListingInner />
      <AboutUsSection />
      <FeaturedListingSection />
    </div>
  );
}
