import "./home.css";
import InnerSection from "../../components/inner-section/InnerSection";
import SearchProperty from "../../components/search-property/SearchProperty";
import NewListingInner from "../../components/new-listing-inner/NewListingInner";
import AboutUsSection from "../../components/about-us-section/AboutUsSection";
import FeaturedListingSection from "../../components/featured-listing-section/FeaturedListingSection";
import TestimonySection from "../../components/testimony-sectioon/TestimonySection";
import FaqSection from "../../components/faq-section/FaqSection";
import GlobalCtaSection from "../../components/global-cta-section/GlobalCtaSection";

export default function Home() {
  return (
    <div className="home">
      <div className="home-hero">
        <InnerSection />
      </div>
      <SearchProperty />
      <NewListingInner variant="home" />
      <AboutUsSection />
      <FeaturedListingSection />
      <TestimonySection />
      <FaqSection />
      <GlobalCtaSection />
    </div>
  );
}
