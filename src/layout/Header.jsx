import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { MenuOutlined, CloseOutlined, DownOutlined, SafetyOutlined, ControlOutlined, ThunderboltOutlined } from "@ant-design/icons";
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
            <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
              About Us
            </NavLink>
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
            <NavLink to="/systems" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
              Systems
            </NavLink>
            {/* Clients */}

            <NavLink to="/clients" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
              Clients
            </NavLink>
            <NavLink to="/core-strengths" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
              Core Strengths
            </NavLink>
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
