import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Properties from "./pages/properties/Properties";
import NotFound from "./pages/not-found/NotFound";
import MainLayout from "./layouts/MainLayout";
import PropertiesDetails from "./pages/properties-details/PropertiesDetails";
import ScrollToTop from "./hooks/ScrollToTop";
import ContactUs from "./pages/contact-us/ContactUs";
import OurOffices from "./pages/our-offices/OurOffices";
import OurTeams from "./pages/our-teams/OurTeams";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout showFooter={true} theme="dark" />}>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/our-offices" element={<OurOffices />} />
          <Route path="/our-teams" element={<OurTeams />} />
        </Route>
        <Route element={<MainLayout showFooter={true} theme="light" />}>
          <Route path="/properties/:id" element={<PropertiesDetails />} />
        </Route>
        <Route element={<MainLayout showFooter={false} theme="dark" />}>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
