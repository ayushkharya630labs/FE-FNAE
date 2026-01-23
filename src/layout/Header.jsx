import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import logo from "../assets/logo.png";

const Header = () => {
  const [open, setOpen] = useState(false);

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
            <NavLink to="/services" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
              Services
            </NavLink>
            <NavLink to="/clients" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
              Clients
            </NavLink>
            <NavLink to="/strengths" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
              Core Strengths
            </NavLink>
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
          <NavLink to="/services" onClick={() => setOpen(false)}>Services</NavLink>
          <NavLink to="/clients" onClick={() => setOpen(false)}>Clients</NavLink>
          <NavLink to="/strengths" onClick={() => setOpen(false)}>Core Strengths</NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)}>Contact Us</NavLink>
        </nav>
      </div>

      {/* Overlay */}
      {open && <div className="mobile-overlay" onClick={() => setOpen(false)} />}
    </>
  );
};

export default Header;
