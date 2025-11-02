import OurTeamSection from "../../components/our-team-section/OurTeamSection";
import PropertiesHeroSection from "../../components/properties-hero-section/PropertiesHeroSection";
import GlobalCtaSection from "../../components/global-cta-section/GlobalCtaSection";

export default function OurTeams() {
  return (
    <div className="our-teams">
        <PropertiesHeroSection showSearch={false} customTitle="Our Teams" />
        <OurTeamSection />
        <GlobalCtaSection />
    </div>
  )
}
