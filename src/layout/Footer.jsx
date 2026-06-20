import {
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-white">
      {/* Top section */}
      <div className="container-main grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">

        {/* Left: Logo & description */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <img
              src="/footer-logo.png"
              alt="Firenor"
              className="h-10 sm:h-12"
            />
          </div>

          <p className="text-sm leading-relaxed max-w-sm">
           Firenor is a Norwegian based company with international presence mitigating risks by delivering high end engineered fire safety systems since 1953. Firenor designs, engineers and supplies fire safety solutions to the international projects in energy, oil & gas and renewable sectors.
          </p>
        </div>

        {/* Middle: Links */}
        <div className="md:pl-16">
          <ul className="space-y-3 text-sm">

            <li>
              <Link to="/" className="hover:text-red-400">Home</Link>
            </li>

            <li>
              <Link to="/about" className="hover:text-red-400">About Us</Link>
            </li>

            {/* Services Group */}
            <li className="mt-4 font-semibold text-white">Services</li>

            <li>
              <Link to="/services/fire-protection" className="hover:text-red-400">
                - Fire Protection & Safety
              </Link>
            </li>

            <li>
              <Link to="/services/instrumentation-control" className="hover:text-red-400">
                - Instrumentation & Control
              </Link>
            </li>

            <li>
              <Link to="/services/electrical-systems" className="hover:text-red-400">
                - Electrical Systems
              </Link>
            </li>

            <li className="mt-4">
              <Link to="/core-strengths" className="hover:text-red-400">Core Strengths</Link>
            </li>
            <li className="mt-4">
              <Link to="/clients" className="hover:text-red-400">Clients</Link>
            </li>

          </ul>
        </div>

        {/* Right: Contact info */}
        <div className="space-y-4 text-sm">
          <div className="flex items-start gap-3">
            <UserOutlined className="mt-1" />
            <span>
              Firenor International AS<br />
              Holskogveien 48<br />
              4624 Kristiansand, Norway
            </span>
          </div>

          <div className="flex items-center gap-3">
            <PhoneOutlined />
            <span>+47 99 09 73 00</span>
          </div>

          <div className="flex items-center gap-3">
            <MailOutlined />
            <span>post@firenor.no</span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/30 mx-4 sm:mx-24 my-6" />

      {/* Bottom copyright */}
      <div className="container-main text-xs sm:text-sm opacity-80 text-center sm:text-left">
        © 2026 Firenor All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
