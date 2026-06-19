import React from "react";
import { motion } from "framer-motion";
import { PhoneOutlined, MailOutlined } from "@ant-design/icons";

const Contact = () => {
  return (
    <>
      {/* ================= CONTACT HERO ================= */}
      <motion.section
        className="contact-hero mb-10 py-sm-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background layers */}
        <div className="contact-hero-bg-left"></div>
        <div className="contact-hero-bg-right"></div>
        <div className="contact-hero-overlay"></div>

        {/* Content */}
        <div className="relative z-10 h-full">
          <div className="container-main h-full flex items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-md-16 gap-10 w-full">

              {/* LEFT CONTENT */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Breadcrumb */}
                <p className="text-sm text-gray-300 mb-3">
                  Home / <span className="text-secondary">Contact Us</span>
                </p>

                <h1 className="text-4xl text-white font-medium mb-4">
                  Contact Us
                </h1>

                <h2 className="text-2xl text-white font-light mb-4">
                  Have a question or <br /> need expert support?
                </h2>

                <p className="text-sm text-gray-200 max-w-md mb-6 leading-relaxed">
                  Get in touch with our team to discuss your fire protection
                  and safety requirements.
                </p>

                {/* Contact Info */}
                <motion.div
                  className="space-y-2 text-sm text-gray-200"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: 0.4,
                    duration: 0.6,
                  }}
                >
                  <div className="flex items-center gap-2">
                    <PhoneOutlined />
                    <span>+971 12345678</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <MailOutlined />
                    <span>email@firenor.ae</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* RIGHT FORM */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                }}
              >
                <form className="space-y-6 max-w-md ml-auto">
                  <div>
                    <label className="block text-sm text-gray-200 mb-1">
                      Name
                    </label>

                    <motion.input
                      type="text"
                      className="contact-input"
                      whileFocus={{
                        scale: 1.01,
                      }}
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-200 mb-1">
                      Email
                    </label>

                    <motion.input
                      type="email"
                      className="contact-input"
                      whileFocus={{
                        scale: 1.01,
                      }}
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-200 mb-1">
                      Message
                    </label>

                    <motion.textarea
                      rows="4"
                      placeholder="Enter"
                      className="contact-input resize-none"
                      whileFocus={{
                        scale: 1.01,
                      }}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="contact-btn"
                    whileHover={{
                      y: -2,
                      scale: 1.02,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                  >
                    Submit
                  </motion.button>
                </form>
              </motion.div>

            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Contact;