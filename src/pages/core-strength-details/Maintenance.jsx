import { Link } from "react-router-dom";
import PageHero from "../../components/PageHero/PageHero";
import { ArrowRightOutlined } from "@ant-design/icons";

const Maintenance = () => {
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
                current="Maintenance"
                title="Maintenance & Lifecycle Support"
                description="Firenor Middle East provides comprehensive Maintenance and Lifecycle Support Services to maximize system availability, regulatory compliance, and long-term operational performance."
                leftBg="/images/home/hero-right.jpg"
                rightBg="/images/core-strengths/project-management-hero.png"
            />

            <section className="py-16 bg-[#f4f4f4]">
                <div className="container-main">

                    {/* Overview */}
                    <div className="mb-16">
                        <h2 className="section-title mb-3">Overview</h2>

                        <p className="text-sm text-gray-600  max-w-5xl">
                            Our maintenance programs are designed to reduce downtime, improve reliability, and extend the service life of critical fire protection, detection, automation, and industrial safety systems.
                            <br />
                            Through Annual Maintenance Contracts (AMC) and long-term service agreements, we ensure systems continue to operate safely and effectively throughout their lifecycle.
                        </p>
                    </div>

                    {/* Core Services */}
                    <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">

                        <div>
                            <h2 className="section-title mb-3">
                                Service Capabilities
                            </h2>

                            <ul className="space-y-3 text-[15px] text-gray-600 leading-4 list-disc pl-5">
                                <li>Preventive maintenance for Fire Fighting Systems</li>

                                <li>Preventive maintenance for Fire Alarm and Fire Detection Systems</li>

                                <li>Inspection, testing, and certification in line with NFPA and local regulations</li>

                                <li>Corrective maintenance and emergency breakdown support</li>

                                <li>Annual Maintenance Contracts (AMC) and long-term service agreements</li>

                                <li>System troubleshooting and fault rectification</li>

                                <li>System upgrades, retrofits, and expansions</li>

                                <li>Spare parts supply and asset lifecycle management</li>

                                <li>PLC, automation, and instrumentation maintenance support</li>

                                <li>Compliance audits, inspections, and system performance assessments</li>
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

export default Maintenance;