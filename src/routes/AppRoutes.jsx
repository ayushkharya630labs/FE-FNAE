import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
// services
import FireProtection from "../pages/services/FireProtection";
import InstrumentationControl from "../pages/services/InstrumentationControl";
import ElectricalSystems from "../pages/services/ElectricalSystems";
// Business Stream
import BusinessStream from "../pages/business-stream/BusinessStream";
import DelugeSystemsMultiZone from "../pages/business-stream-details/DelugeSystemsMultiZone";
// clients
import Clients from "../pages/clients/Clients";
// core strengths
import CoreStrengths from "../pages/core-strengths/CoreStrengths";
import ProjectManagement from "../pages/core-strength-details/ProjectManagement";
import Engineering from "../pages/core-strength-details/Engineering";
import Production from "../pages/core-strength-details/Production";
import Testing from "../pages/core-strength-details/Testing";
import InstallationCommissioning from "../pages/core-strength-details/InstallationCommissioning";
import Maintenance from "../pages/core-strength-details/Maintenance";
// contact
import Contact from "../pages/contact/Contact";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* Services */}
          <Route path="/services/fire-protection" element={<FireProtection />} />
          <Route path="/services/instrumentation-control" element={<InstrumentationControl />} />
          <Route path="/services/electrical-systems" element={<ElectricalSystems />} />
          {/* Business Stream */}
          <Route path="/business-stream" element={<BusinessStream />} />
          <Route path="/business-stream/deluge-systems-multi-zone" element={<DelugeSystemsMultiZone />} />
          {/* Clients */}
          <Route path="/clients" element={<Clients />} />
          {/* Core Strengths */}
          <Route path="/core-strengths" element={<CoreStrengths />} />
          <Route
            path="/core-strengths/project-management"
            element={<ProjectManagement />}
          />
          <Route
            path="/core-strengths/engineering"
            element={<Engineering />}
          />
          <Route
            path="/core-strengths/production"
            element={<Production />}
          />
          <Route
            path="/core-strengths/testing"
            element={<Testing />}
          />
          <Route
            path="/core-strengths/installation-commissioning"
            element={<InstallationCommissioning />}
          />
          <Route
            path="/core-strengths/maintenance"
            element={<Maintenance />}
          />
          {/* Contact */}
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
