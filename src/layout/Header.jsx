import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  MenuOutlined, CloseOutlined, DownOutlined, SafetyOutlined, ControlOutlined, ThunderboltOutlined, FireOutlined,
  SafetyCertificateOutlined,
  CloudOutlined,
  ExperimentOutlined,
  DeploymentUnitOutlined,
  ArrowRightOutlined,
  ProjectOutlined,
  SettingOutlined,
  BuildOutlined,
  ToolOutlined,
} from "@ant-design/icons";
import logo from "../assets/logo.png";

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isServicesActive = location.pathname.startsWith("/services");

  return (
    <>
      <header className="header">
        <div className="container-main header-inner">

          {/* Logo */}
          <div className="logo">
            <Link to="/" onClick={() => setOpen(false)}>
              <img src={logo} alt="Firenor Logo" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="nav">
            <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
              Home
            </NavLink>
            {/* About */}
            <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
              About Us
            </NavLink>

            {/* Services */}
            <div className="nav-dropdown">
              <div
                className={`nav-link dropdown-toggle ${isServicesActive ? "active" : ""
                  }`}
              >
                Services <DownOutlined className="dropdown-icon" />
              </div>

              <div className="dropdown-menu">
                <NavLink to="/services/fire-protection">
                  <SafetyOutlined /> Fire Protection & Safety
                </NavLink>

                <NavLink to="/services/instrumentation-control">
                  <ControlOutlined /> Instrumentation & Control Automation
                </NavLink>

                <NavLink to="/services/electrical-systems">
                  <ThunderboltOutlined /> Electrical Systems
                </NavLink>
              </div>
            </div>

            {/* Systems */}
            <div className="nav-dropdown">
              <div
                className={`nav-link dropdown-toggle ${isServicesActive ? "active" : ""
                  }`}
              >
                Systems <DownOutlined className="dropdown-icon" />
              </div>

              <div className="dropdown-menu systems-dropdown">

                <NavLink to="/systems/deluge-systems-multi-zone">
                  <FireOutlined />
                  <span>Deluge Systems</span>
                </NavLink>

                <NavLink to="/systems/diff-systems">
                  <SafetyCertificateOutlined />
                  <span>DIFF Systems</span>
                </NavLink>

                <NavLink to="/systems/foam-systems">
                  <CloudOutlined />
                  <span>Foam Systems</span>
                </NavLink>

                <NavLink to="/systems/water-mist-systems">
                  <ExperimentOutlined />
                  <span>Water Mist Systems</span>
                </NavLink>

                <NavLink to="/systems/gaseous-systems">
                  <DeploymentUnitOutlined />
                  <span>Gaseous Systems</span>
                </NavLink>

                <div className="dropdown-divider"></div>

                <NavLink
                  to="/systems"
                  className="view-all-systems"
                >
                  <span>View All Systems</span>
                  <ArrowRightOutlined />
                </NavLink>

              </div>
            </div>

            {/* Clients */}
            <NavLink to="/clients" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
              Clients
            </NavLink>

            {/* Core Strengths */}
            <div className="nav-dropdown">
              <div
                className={`nav-link dropdown-toggle ${isServicesActive ? "active" : ""
                  }`}
              >
                Core Strengths <DownOutlined className="dropdown-icon" />
              </div>

              <div className="dropdown-menu systems-dropdown">

                <NavLink to="/core-strengths/project-management">
                  <ProjectOutlined />
                  <span>Project Management</span>
                </NavLink>

                <NavLink to="/core-strengths/engineering">
                  <SettingOutlined />
                  <span>Engineering</span>
                </NavLink>

                <NavLink to="/core-strengths/production">
                  <BuildOutlined />
                  <span>Production</span>
                </NavLink>

                <NavLink to="/core-strengths/testing">
                  <ExperimentOutlined />
                  <span>Testing</span>
                </NavLink>

                <NavLink to="/core-strengths/installation-commissioning">
                  <ToolOutlined />
                  <span>Installation & Commissioning</span>
                </NavLink>

                <NavLink to="/core-strengths/maintenance">
                  <SafetyCertificateOutlined />
                  <span>Maintenance</span>
                </NavLink>

                <div className="dropdown-divider"></div>

                <NavLink
                  to="/core-strengths"
                  className="view-all-systems"
                >
                  <span>View All Core Strengths</span>
                  <ArrowRightOutlined />
                </NavLink>

              </div>
            </div>

            {/* <NavLink to="/strengths" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
              Core Strengths
            </NavLink> */}
            <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
              Contact Us
            </NavLink>
          </nav>

          {/* Mobile Hamburger */}
          <button className="mobile-menu-btn" onClick={() => setOpen(true)}>
            <MenuOutlined />
          </button>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <div className={`mobile-sidebar ${open ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setOpen(false)}>
          <CloseOutlined />
        </button>

        <nav className="mobile-nav">
          <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/about" onClick={() => setOpen(false)}>About Us</NavLink>
          <div className="mobile-services">
            <span className="mobile-services-title">Services</span>

            <NavLink to="/services/fire-protection" onClick={() => setOpen(false)}>
              <SafetyOutlined /> Fire Protection & Safety
            </NavLink>

            <NavLink to="/services/instrumentation-control" onClick={() => setOpen(false)}>
              <ControlOutlined /> Instrumentation & Control Automation
            </NavLink>

            <NavLink to="/services/electrical-systems" onClick={() => setOpen(false)}>
              <ThunderboltOutlined /> Electrical Systems
            </NavLink>
          </div>

          <NavLink to="/systems" onClick={() => setOpen(false)}>
            Systems
          </NavLink>
          <NavLink to="/clients" onClick={() => setOpen(false)}>Clients</NavLink>
          <NavLink to="/core-strengths" onClick={() => setOpen(false)}>Core Strengths</NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)}>Contact Us</NavLink>
        </nav>
      </div>

      {/* Overlay */}
      {open && <div className="mobile-overlay" onClick={() => setOpen(false)} />}
    </>
  );
};

export default Header;
