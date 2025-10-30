import PropertiesDetailsHeroSection from "../../components/properties-details-hero-section/PropertiesDetailsHeroSection";
import PropertyFeatureSection from "../../components/property-feature-section/PropertyFeatureSection";
import PropertyInfoSection from "../../components/property-info-section/PropertyInfoSection";
import PropertyPlanSection from "../../components/property-plan-section/PropertyPlanSection";
import "./properties-details.css";
import { propertiesData } from "../../data/propertiesData";
import NewListingInner from "../../components/new-listing-inner/NewListingInner";
import useInViewObserver from "../../hooks/useInViewObserver";
import GlobalCtaSection from "../../components/global-cta-section/GlobalCtaSection";

export default function PropertiesDetails() {
  const similarListings = propertiesData.slice(-3)

  useInViewObserver(
      ".similar-listings-header h2",
      { threshold: 0.3 },
      true
    );

  return (
    <div className="properties-details">
      <PropertiesDetailsHeroSection />
      <PropertyFeatureSection />
      <PropertyInfoSection />
      <PropertyPlanSection />
      <div className="similar-listings-header">
        <h2>Similar Listings</h2>
      </div>
      <NewListingInner variant="properties" data={similarListings} />
      <GlobalCtaSection />
    </div>
  );
}
