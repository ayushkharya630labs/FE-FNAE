import CoreStrengthCards from "./CoreStrengthCards";
import PageHero from "../../components/PageHero/PageHero";

const Production = () => {
  

    return (
        <>
            <PageHero
                breadcrumb="Home / Core Strengths"
                current="Production"
                title="Production & Manufacturing"
                description="Firenor Middle East delivers specialized fabrication, production, and manufacturing solutions for fire protection skids, packaged systems, and engineered industrial units through strategic manufacturing partnerships across the UAE, China, and Europe."
                leftBg="/images/home/hero-right.jpg"
                rightBg="/images/core-strengths/strengths-3.png"
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

                        <div style={{ height: "60vh" }}>
                            <img style={{ height: "100%" }}
                                src="/images/core-strengths/production/img-1.png"
                                alt="Project Management"
                                className="w-full object-cover"
                            />
                        </div>

                    </div>

                </div>
                    {/* Core Strengths */}
                    <CoreStrengthCards currentPath="/core-strengths/production" />


            </section>
        </>
    );
};

export default Production;