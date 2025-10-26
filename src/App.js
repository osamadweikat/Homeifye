import Home from "./pages/home/Home";
import Properties from "./pages/properties/Properties";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/not-found/NotFound"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
