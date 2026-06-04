import { Link } from "react-router-dom";
import PageHero from "../../components/PageHero/PageHero";
import { ArrowRightOutlined } from "@ant-design/icons";

const ProjectManagement = () => {
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
                current="Project Management"
                title="Project Management"
                description="Firenor Middle East delivers projects through a structured Project Management framework aligned with internationally recognized PMO methodologies and governance practices."
                leftBg="/images/home/hero-right.jpg"
                rightBg="/images/core-strengths/project-management-hero.png"
            />

            <section className="py-16 bg-[#f4f4f4]">
                <div className="container-main">

                    {/* Overview */}
                    <div className="mb-16">
                        <h2 className="section-title mb-3">Overview</h2>

                        <p className="text-sm text-gray-600  max-w-5xl">
                            Our approach ensures disciplined planning, controlled execution,
                            proactive risk management, and transparent reporting throughout
                            every stage of the project lifecycle.
                            <br />
                            With a strong focus on safety, quality, cost control, and
                            schedule adherence, we successfully manage projects within highly
                            regulated industrial sectors where operational reliability is
                            critical.
                        </p>
                    </div>

                    {/* Core Services */}
                    <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">

                        <div>
                            <h2 className="section-title mb-3">
                                Manufacturing Capabilities
                            </h2>

                            <ul className="space-y-3 text-[15px] text-gray-600 leading-4 list-disc pl-5">
                                <li>Project planning, scheduling, and resource management</li>
                                <li>PMO-based project execution methodology and reporting structure</li>
                                <li>Budget control and cost monitoring</li>
                                <li>Risk management and mitigation planning</li>
                                <li>Procurement coordination and vendor management</li>
                                <li>Interface management with clients, consultants, EPC contractors, and authorities</li>
                                <li>Quality assurance and quality control management</li>
                                <li>Health, Safety & Environment (HSE) management during project execution</li>
                                <li>Progress monitoring, reporting, and project documentation control</li>
                                <li>Testing, commissioning, and project handover management</li>
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

export default ProjectManagement;