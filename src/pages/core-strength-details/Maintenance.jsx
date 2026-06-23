import CoreStrengthCards from "./CoreStrengthCards";
import PageHero from "../../components/PageHero/PageHero";

const Maintenance = () => {
  
    return (
        <>
            <PageHero
                breadcrumb="Home / Core Strengths"
                current="Maintenance"
                title="Maintenance & Lifecycle Support"
                description="Firenor Middle East provides comprehensive Maintenance and Lifecycle Support Services to maximize system availability, regulatory compliance, and long-term operational performance."
                leftBg="/images/home/hero-right.jpg"
                rightBg="/images/core-strengths/strengths-6.png"
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

                          <div style={{ height: "60vh" }}>
                            <img style={{ height: "100%"}}
                                src="/images/core-strengths/maintenance/img-1.png"
                                alt="Project Management"
                                className="w-full object-cover"
                            />
                        </div>

                    </div>

                </div>
                   {/* Core Strengths */}
                    <CoreStrengthCards currentPath="/core-strengths/maintenance" />


            </section>
        </>
    );
};

export default Maintenance;