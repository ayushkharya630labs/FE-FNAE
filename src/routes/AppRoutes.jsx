import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import FireProtection from "../pages/services/FireProtection";
import InstrumentationControl from "../pages/services/InstrumentationControl";
import ElectricalSystems from "../pages/services/ElectricalSystems";
import Clients from "../pages/clients/Clients";
import Contact from "../pages/contact/Contact";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services/fire-protection" element={<FireProtection />} />
          <Route path="/services/instrumentation-control" element={<InstrumentationControl />} />
          <Route path="/services/electrical-systems" element={<ElectricalSystems />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
