import { Link } from "react-router-dom";
import PageHero from "../../components/PageHero/PageHero";
import { ArrowRightOutlined } from "@ant-design/icons";

const Production = () => {
    const strengths = [
        {
            title: "Production",
            image: "/images/core-strengths/strengths-1.jpg",
            link: "/core-strengths/production",
        },
        {
            title: "Testing",
            image: "/images/core-strengths/strengths-1.jpg",
            link: "/core-strengths/testing",
        },
        {
            title: "Installation & Commissioning",
            image: "/images/core-strengths/strengths-1.jpg",
            link: "/core-strengths/installation-commissioning",
        },
        {
            title: "Maintenance",
            image: "/images/core-strengths/strengths-1.jpg",
            link: "/core-strengths/maintenance",
        },
    ];

    return (
        <>
            <PageHero
                breadcrumb="Home / Core Strengths"
                current="Production"
                title="Production & Manufacturing"
                description="Firenor Middle East delivers specialized fabrication, production, and manufacturing solutions for fire protection skids, packaged systems, and engineered industrial units through strategic manufacturing partnerships across the UAE, China, and Europe."
                leftBg="/images/home/hero-right.jpg"
                rightBg="/images/core-strengths/production/production-hero.png"
            />

            <section className="py-16 bg-[#f4f4f4]">
                <div className="container-main">

                    {/* Overview */}
                    <div className="mb-16">
                        <h2 className="section-title mb-3">Overview</h2>

                        <p className="text-sm text-gray-600  max-w-5xl">
                            All systems are engineered, documented, and quality-controlled by Firenor Middle East, ensuring compliance with project specifications, international standards, and client requirements while maintaining manufacturing efficiency and delivery reliability.
                            <br />
                            Completed systems undergo rigorous testing and inspection before being delivered to project sites and client facilities worldwide.
                        </p>
                    </div>

                    {/* Core Services */}
                    <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">

                        <div>
                            <h2 className="section-title mb-3">
                                Core Services
                            </h2>

                            <ul className="space-y-3 text-[15px] text-gray-600 leading-4 list-disc pl-5">
                                <li>Manufacturing of fire protection skids and packaged systems</li>

                                <li>Fabrication of foam system skids, pump skids, valve skids, and modular fire protection units</li>

                                <li>Steel fabrication, structural frames, piping fabrication, and welding works through approved partners</li>

                                <li>Assembly of packaged fire fighting and fire protection systems</li>

                                <li>Containerized Fire Fighting packages</li>

                                <li>Factory Acceptance Testing (FAT), inspection, and quality control before shipment</li>

                                <li>Packaging, logistics coordination, and global delivery to project sites and client facilities</li>

                                <li>Documentation, material traceability, and quality records in line with project and regulatory requirements</li>
                            </ul>
                        </div>

                        <div>
                            <img
                                src="/images/core-strengths/project-management/service-img.jpg"
                                alt="Project Management"
                                className="w-full object-cover"
                            />
                        </div>

                    </div>

                    {/* Core Strengths */}
                    <div className="mt-16">
                        <h2 className="section-title mb-8">
                            Core Strengths
                        </h2>

                        <div className="flex gap-5 overflow-x-auto pb-4">

                            {strengths.map((item, index) => (
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

                                        {/* Red Corner Mark */}
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

                                        {/* Title */}
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
                </div>


            </section>
        </>
    );
};

export default Production;