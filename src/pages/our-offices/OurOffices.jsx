import OurAllOfficesSection from "../../components/our-all-offices-section/OurAllOfficesSection";
import PropertiesHeroSection from "../../components/properties-hero-section/PropertiesHeroSection";

export default function OurOffices() {
  return (
    <div className="our-offices">
      <PropertiesHeroSection showSearch={false} customTitle="Our Offices" />
      <OurAllOfficesSection />
    </div>
  );
}
