import {
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
  UserOutlined,
} from "@ant-design/icons";

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
            Firenor delivers trusted fire protection and safety
            solutions. Committed to quality, compliance, and
            reliable engineering.
          </p>
        </div>

        {/* Middle: Links */}
        <div className="md:pl-16">
          <ul className="space-y-3 text-sm">
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Clients</li>
          </ul>
        </div>

        {/* Right: Contact info */}
        <div className="space-y-4 text-sm">
          <div className="flex items-start gap-3">
            <UserOutlined className="mt-1" />
            <span>
              Firenor Middle East LLC - Engineering<br />
              Al Batha Tower - 2001,<br />
              283 Corniche St - Sharjah, UAE
            </span>
          </div>

          <div className="flex items-center gap-3">
            <PhoneOutlined />
            <span>+971 12345678</span>
          </div>

          <div className="flex items-center gap-3">
            <PhoneOutlined />
            <span>+971 12345678</span>
          </div>

          <div className="flex items-center gap-3">
            <PhoneOutlined />
            <span>+971 12345678</span>
          </div>

          <div className="flex items-center gap-3">
            <MailOutlined />
            <span>email@firenor.ae</span>
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
