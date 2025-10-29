import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Properties from "./pages/properties/Properties";
import NotFound from "./pages/not-found/NotFound";
import MainLayout from "./layouts/MainLayout";
import PropertiesDetails from "./pages/properties-details/PropertiesDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout showFooter={true} theme="dark" />}>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
        </Route>

        <Route element={<MainLayout showFooter={true} theme="light" />}>
          <Route path="/pd" element={<PropertiesDetails />} />
        </Route>

        <Route element={<MainLayout showFooter={false} theme="dark" />}>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
