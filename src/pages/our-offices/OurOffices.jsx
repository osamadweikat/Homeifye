import OurAllOfficesSection from "../../components/our-all-offices-section/OurAllOfficesSection";
import PropertiesHeroSection from "../../components/properties-hero-section/PropertiesHeroSection";
import GlobalCtaSection from "../../components/global-cta-section/GlobalCtaSection";

export default function OurOffices() {
  return (
    <div className="our-offices">
      <PropertiesHeroSection showSearch={false} customTitle="Our Offices" />
      <OurAllOfficesSection />
      <GlobalCtaSection />
    </div>
  );
}
