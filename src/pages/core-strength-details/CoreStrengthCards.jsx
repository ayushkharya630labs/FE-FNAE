import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightOutlined } from "@ant-design/icons";

const coreStrengths = [
  {
    title: "Project Management",
    image: "/images/core-strengths/strengths-1.jpg",
    link: "/core-strengths/project-management",
  },
  {
    title: "Engineering",
    image: "/images/core-strengths/strengths-2.jpg",
    link: "/core-strengths/engineering",
  },
  {
    title: "Production",
    image: "/images/core-strengths/strengths-3.png",
    link: "/core-strengths/production",
  },
  {
    title: "Testing",
    image: "/images/core-strengths/strengths-4.png",
    link: "/core-strengths/testing",
  },
  {
    title: "Installation & Commissioning",
    image: "/images/core-strengths/strengths-5.png",
    link: "/core-strengths/installation-commissioning",
  },
  {
    title: "Maintenance",
    image: "/images/core-strengths/strengths-6.png",
    link: "/core-strengths/maintenance",
  },
];

const CoreStrengthCards = ({
  currentPath = "",
  title = "Core Strengths",
}) => {
  const filteredStrengths = coreStrengths.filter(
    (item) => item.link !== currentPath
  );

  return (
    <div className="mt-16">
      <h2 className="section-title mb-8 px-24">
        {title}
      </h2>

      <div className="flex gap-5 overflow-x-auto pb-4">

        {filteredStrengths.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            className="
              min-w-[235px]
              max-w-[235px]
              bg-white
              border
              border-[#dddddd]
              flex
              flex-col
              relative
              transition-all
              duration-300
              hover:border-[#c4122f]
            "
          >

            {/* Image */}
            <div className="h-[120px] overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="relative h-[78px] px-4 flex items-center">

              <span
                className="
                  absolute
                  top-0
                  left-0
                  w-[10px]
                  h-[10px]
                  border-l-[3px]
                  border-t-[3px]
                  border-[#C4122F]
                "
              />

              <h3
                className="
                  text-[15px]
                  text-[#404040]
                  font-normal
                  leading-[1.15]
                  max-w-[135px]
                "
              >
                {item.title}
              </h3>

              <div
                className="
                  absolute
                  right-4
                  top-1/2
                  -translate-y-1/2
                  w-[32px]
                  h-[32px]
                  rounded-full
                  bg-[#C4122F]
                  flex
                  items-center
                  justify-center
                "
              >
                <ArrowRightOutlined
                  style={{
                    color: "#fff",
                    fontSize: "13px",
                    fontWeight: 400,
                  }}
                />
              </div>

            </div>

          </Link>
        ))}

      </div>
    </div>
  );
};

export default CoreStrengthCards;