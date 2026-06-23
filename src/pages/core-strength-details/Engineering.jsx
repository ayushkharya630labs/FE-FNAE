import CoreStrengthCards from "./CoreStrengthCards";
import PageHero from "../../components/PageHero/PageHero";

const Engineering = () => {


    return (
        <>
            <PageHero
                breadcrumb="Home / Core Strengths"
                current="Engineering"
                title="Design & Engineering"
                description="Firenor Middle East delivers advanced Design and Engineering solutions for fire protection, fire detection, and integrated industrial systems serving oil tanking terminals, petrochemical facilities, and high-risk industrial environments across the UAE."
                leftBg="/images/home/hero-right.jpg"
                rightBg="/images/core-strengths/strengths-2.jpg"
            />

            <section className="py-16 bg-[#f4f4f4]">
                <div className="container-main">

                    {/* Overview */}
                    <div className="mb-16">
                        <h2 className="section-title mb-3">Overview</h2>

                        <p className="text-sm text-gray-600  max-w-5xl">
                            Leveraging extensive engineering expertise, international technical standards, and proven project methodologies, we provide optimized, compliant, and reliable system designs that meet global codes, local authority regulations, and client-specific operational requirements.
                            <br />
                            Our engineering philosophy is centered on safety, reliability, operational efficiency, and lifecycle performance, ensuring long-term system integrity in demanding industrial environments.
                        </p>
                    </div>

                    {/* Core Services */}
                    <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">

                        <div>
                            <h2 className="section-title mb-3">
                                Key Capabilities
                            </h2>

                            <ul className="space-y-3 text-[15px] text-gray-600 leading-4 list-disc pl-5">
                                <li>
                                    Detailed engineering design for Fire Fighting Systems including
                                    foam systems, hydrant systems, deluge systems, and water spray systems
                                </li>

                                <li>
                                    Engineering design for Fire Detection & Fire Alarm Systems
                                    for industrial and hazardous environments
                                </li>

                                <li>
                                    Hydraulic calculations, system sizing, and engineering analysis
                                </li>

                                <li>
                                    Electrical & Instrumentation system design for industrial
                                    fire protection systems
                                </li>

                                <li>
                                    PLC and Industrial Automation system design and control
                                    philosophy development
                                </li>

                                <li>
                                    Preparation of engineering drawings, layouts, schematics,
                                    and cause & effect diagrams
                                </li>

                                <li>
                                    System integration design between fire & gas systems,
                                    PLC, SCADA, and plant control systems
                                </li>

                                <li>
                                    Compliance with NFPA, IEC, API, ATEX, and local civil defense regulations
                                </li>

                                <li>
                                    Design review, technical documentation, and authority approval support
                                </li>
                            </ul>
                        </div>


                        <div style={{ height: "60vh" }}>
                            <img style={{ height: "100%" }}
                                src="/images/core-strengths/engineering/img-1.jpg"
                                alt="Project Management"
                                className="w-full object-cover"
                            />
                        </div>

                    </div>

                </div>
                {/* Core Strengths */}
                <CoreStrengthCards currentPath="/core-strengths/engineering" />

            </section>
        </>
    );
};

export default Engineering;