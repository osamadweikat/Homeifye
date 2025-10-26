import "./home.css";
import { useOutletContext } from "react-router-dom";
import InnerSection from "../../components/inner-section/InnerSection";
import SearchProperty from "../../components/search-property/SearchProperty";
import NewListingInner from "../../components/new-listing-inner/NewListingInner";
import AboutUsSection from "../../components/about-us-section/AboutUsSection";
import FeaturedListingSection from "../../components/featured-listing-section/FeaturedListingSection";
import TestimonySection from "../../components/testimony-sectioon/TestimonySection";
import FaqSection from "../../components/faq-section/FaqSection";
import GlobalCtaSection from "../../components/global-cta-section/GlobalCtaSection";

export default function Home() {
  const outletContext = useOutletContext();
  const setOpenDropdown = outletContext?.setOpenDropdown;

  return (
    <div className="home">
      <div onClick={() => setOpenDropdown?.(false)} className="home-hero">
        <InnerSection />
      </div>
      <SearchProperty />
      <NewListingInner />
      <AboutUsSection />
      <FeaturedListingSection />
      <TestimonySection />
      <FaqSection />
      <GlobalCtaSection />
    </div>
  );
}
