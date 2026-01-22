import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="container-main header-inner">
        
        {/* Logo */}
        <div className="logo">
            <Link to="/" >
          <img src={logo} alt="Firenor Logo" />
            </Link>
        </div>

        {/* Navigation */}
        <nav className="nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""}`
            }
          >
            About Us
          </NavLink>

          <NavLink
            to="/services"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""}`
            }
          >
            Services
          </NavLink>

          <NavLink
            to="/clients"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""}`
            }
          >
            Clients
          </NavLink>

          <NavLink
            to="/strengths"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""}`
            }
          >
            Core Strengths
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""}`
            }
          >
            Contact Us
          </NavLink>
        </nav>

      </div>
    </header>
  );
};

export default Header;
