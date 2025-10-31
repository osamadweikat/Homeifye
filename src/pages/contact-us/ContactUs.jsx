import ContactMainSection from "../../components/contact-main-section/ContactMainSection"
import PropertiesHeroSection from "../../components/properties-hero-section/PropertiesHeroSection"

export default function ContactUs() {
  return (
    <div className="contact-us">
      <PropertiesHeroSection showSearch={false} customTitle="Contact Us" />
      <ContactMainSection />
    </div>
  )
}
