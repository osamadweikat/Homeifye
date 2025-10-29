import PropertiesDetailsHeroSection from "../../components/properties-details-hero-section/PropertiesDetailsHeroSection";
import PropertyFeatureSection from "../../components/property-feature-section/PropertyFeatureSection";
import PropertyInfoSection from "../../components/property-info-section/PropertyInfoSection";
import "./properties-details.css";

export default function PropertiesDetails() {
  return (
    <div className="properties-details">
      <PropertiesDetailsHeroSection />
      <PropertyFeatureSection />
      <PropertyInfoSection />
    </div>
  );
}
