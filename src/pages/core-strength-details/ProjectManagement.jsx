import PageHero from "../../components/PageHero/PageHero";
import CoreStrengthCards from "./CoreStrengthCards";

const ProjectManagement = () => {


    return (
        <>
            <PageHero
                breadcrumb="Home / Core Strengths"
                current="Project Management"
                title="Project Management"
                description="Firenor Middle East delivers projects through a structured Project Management framework aligned with internationally recognized PMO methodologies and governance practices."
                leftBg="/images/home/hero-right.jpg"
                rightBg="/images/core-strengths/strengths-1.jpg"
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

                        <div style={{ height: "60vh" }}>
                            <img style={{ height: "100%" }}
                                src="/images/core-strengths/project-management/img-1.png"
                                alt="Project Management"
                                className="w-full object-cover"
                            />
                        </div>

                    </div>

                </div>
                {/* Core Strengths */}
                <CoreStrengthCards
                    currentPath="/core-strengths/project-management"
                />


            </section>
        </>
    );
};

export default ProjectManagement;