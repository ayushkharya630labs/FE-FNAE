import { Link } from "react-router-dom";
import PageHero from "../../components/PageHero/PageHero";
import { ArrowRightOutlined } from "@ant-design/icons";

const Engineering = () => {
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

export default Engineering;