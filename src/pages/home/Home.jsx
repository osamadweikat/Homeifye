import "./home.css";
import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import InnerSection from "../../components/inner-section/InnerSection";
import SearchProperty from "../../components/search-property/SearchProperty";
import NewListingInner from "../../components/new-listing-inner/NewListingInner";
import AboutUsSection from "../../components/about-us-section/AboutUsSection";
import FeaturedListingSection from "../../components/featured-listing-section/FeaturedListingSection";
import TestimonySection from "../../components/testimony-sectioon/TestimonySection";
import FaqSection from "../../components/faq-section/FaqSection";
import GlobalCtaSection from "../../components/global-cta-section/GlobalCtaSection";
import Footer from "../../components/footer/Footer";

export default function Home() {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <div className="home">
      <div onClick={() => setOpenDropdown(false)} className="home-hero">
        <Navbar openDropdown={openDropdown} setOpenDropdown={setOpenDropdown} />
        <InnerSection />
      </div>
      <SearchProperty />
      <NewListingInner />
      <AboutUsSection />
      <FeaturedListingSection />
      <TestimonySection />
      <FaqSection />
      <GlobalCtaSection />
      <Footer />
    </div>
  );
}
