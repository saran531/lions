import { Routes, Route } from "react-router-dom";

import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import MobileOverview from "./assets/components/MobileOverview";

import Home from "./pages/Home";
import About from "./pages/about/About";
import Gallery from "./pages/about/Gallery";
import Services from "./pages/services/services";
import ScaffoldingWorks from "./pages/services/ScaffoldingWorks";
import InsulationWorks from "./pages/services/InsulationWorks";
import SafetyNet from "./pages/services/SafetyNet";
import BuildingConstructionWorks from "./pages/services/BuildingConstructionWorks";
import SupplyOfManPower from "./pages/services/SupplyOfManPower";
import SecuritySupply from "./pages/services/SecuritySupply";
import Project from "./pages/project/Project";
import ScaffoldingProjects from "./pages/project/ScaffoldingProjects";
import InsulationProjects from "./pages/project/InsulationProjects";
import SafetyCatchNetProjects from "./pages/project/SafetyCatchNetProjects";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/gallery" element={<Gallery />} />
        <Route path="/about/*" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/scaffolding-works" element={<ScaffoldingWorks />} />
        <Route path="/services/insulation-works" element={<InsulationWorks />} />
        <Route path="/services/safety-net" element={<SafetyNet />} />
        <Route path="/services/building-construction-works" element={<BuildingConstructionWorks />} />
        <Route path="/services/supply-of-man-power" element={<SupplyOfManPower />} />
        <Route path="/services/security-supply" element={<SecuritySupply />} />
        <Route path="/project" element={<Project />} />
        <Route path="/projects/scaffolding-projects" element={<ScaffoldingProjects />} />
        <Route path="/projects/insulation-projects" element={<InsulationProjects />}/>
        <Route path="/projects/safety-catch-net-projects" element={<SafetyCatchNetProjects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>

      <Footer />
      <MobileOverview />
    </>
  );
}

export default App;
