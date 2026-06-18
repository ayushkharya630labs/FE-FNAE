import React from "react";
import { motion } from "framer-motion";
import "./PageHero.css";

const PageHero = ({
  breadcrumb = "Home",
  current = "",
  title,
  description,
  leftBg,
  rightBg,
}) => {
  return (
    <motion.section
      className="page-hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background layers */}
      <motion.div
        className="page-hero-bg-left"
        style={{ backgroundImage: `url(${leftBg})` }}
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 8,
          ease: "easeOut",
        }}
      />

      <motion.div
        className="page-hero-bg-right"
        style={{ backgroundImage: `url(${rightBg})` }}
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 8,
          ease: "easeOut",
        }}
      />

      <div className="page-hero-overlay" />

      {/* Content */}
      <div className="page-hero-content h-full flex items-center">
        <div className="container-main m-0">

          {/* Breadcrumb */}
          <motion.p
            className="text-sm text-gray-300 mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
          >
            {breadcrumb} / <span>{current}</span>
          </motion.p>

          {/* Title */}
          <motion.h1
            className="text-4xl text-white font-medium mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.35,
            }}
          >
            {title}
          </motion.h1>

          {/* Description */}
          {description && (
            <motion.p
              className="max-w-3xl text-sm text-gray-200 leading-relaxed"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.55,
              }}
            >
              {description}
            </motion.p>
          )}

        </div>
      </div>
    </motion.section>
  );
};

export default PageHero;