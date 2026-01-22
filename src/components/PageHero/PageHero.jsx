// src/components/PageHero/PageHero.jsx
import React from "react";
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
    <section className="page-hero">
      {/* Background layers */}
      <div
        className="page-hero-bg-left"
        style={{ backgroundImage: `url(${leftBg})` }}
      />
      <div
        className="page-hero-bg-right"
        style={{ backgroundImage: `url(${rightBg})` }}
      />
      <div className="page-hero-overlay" />

      {/* Content */}
      <div className="page-hero-content h-full flex items-center">
        <div className="container-main m-0">
          {/* Breadcrumb */}
          <p className="text-sm text-gray-300 mb-2">
            {breadcrumb} /{" "}
            <span className="text-secondary">{current}</span>
          </p>

          {/* Title */}
          <h1 className="text-4xl text-white font-medium mb-4">
            {title}
          </h1>

          {/* Description */}
          {description && (
            <p className="max-w-3xl text-sm text-gray-200 leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
