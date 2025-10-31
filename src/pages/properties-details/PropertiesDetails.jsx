import "./properties-details.css";
import { useParams } from "react-router-dom";
import { propertiesData } from "../../data/propertiesData";
import useInViewObserver from "../../hooks/useInViewObserver";
import PropertiesDetailsHeroSection from "../../components/properties-details-hero-section/PropertiesDetailsHeroSection";
import PropertyFeatureSection from "../../components/property-feature-section/PropertyFeatureSection";
import PropertyInfoSection from "../../components/property-info-section/PropertyInfoSection";
import PropertyPlanSection from "../../components/property-plan-section/PropertyPlanSection";
import NewListingInner from "../../components/new-listing-inner/NewListingInner";
import GlobalCtaSection from "../../components/global-cta-section/GlobalCtaSection";

export default function PropertiesDetails() {
  const { id } = useParams();
  const property = propertiesData.find((p) => p.id.toString() === id);

  const similarListings = property
    ? propertiesData.filter((p) => property.similarProperties.includes(p.id))
    : [];

  useInViewObserver(".similar-listings-header h2", { threshold: 0.3 }, true);

  return (
    <div className="properties-details">
      <PropertiesDetailsHeroSection property={property} />
      <PropertyFeatureSection />
      <PropertyInfoSection property={property} />
      <PropertyPlanSection
        floorPlanDescription={property.floorPlanDescription}
      />
      <div className="similar-listings-header">
        <h2>Similar Listings</h2>
      </div>
      <NewListingInner variant="properties" data={similarListings} />
      <GlobalCtaSection />
    </div>
  );
}
