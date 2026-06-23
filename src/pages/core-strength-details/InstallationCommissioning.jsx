import CoreStrengthCards from "./CoreStrengthCards";
import PageHero from "../../components/PageHero/PageHero";

const InstallationCommissioning = () => {

    return (
        <>
            <PageHero
                breadcrumb="Home / Core Strengths"
                current="Installation & Commissioning"
                title="Installation & Commissioning"
                description="Firenor Middle East provides end-to-end Installation and Commissioning services for fire protection, fire detection, electrical, instrumentation, and automation systems."
                leftBg="/images/home/hero-right.jpg"
                rightBg="/images/core-strengths/strengths-5.png"
            />

            <section className="py-16 bg-[#f4f4f4]">
                <div className="container-main">

                    {/* Overview */}
                    <div className="mb-16">
                        <h2 className="section-title mb-3">Overview</h2>

                        <p className="text-sm text-gray-600  max-w-5xl">
                            Our experienced site teams and commissioning specialists ensure all systems are installed, tested, verified, and commissioned in accordance with project specifications, international standards, and regulatory requirements. Structured procedures, inspection plans, and testing protocols are applied throughout execution to ensure operational readiness, safety compliance, and system reliability.
                        </p>
                    </div>

                    {/* Core Services */}
                    <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">

                        <div>
                            <h2 className="section-title mb-3">
                                Service Deliverables
                            </h2>

                            <ul className="space-y-3 text-[15px] text-gray-600 leading-4 list-disc pl-5">
                                <li>Installation of Fire Fighting Systems including piping, foam systems, hydrants, monitors, and suppression systems</li>

                                <li>Installation of Fire Detection & Fire Alarm Systems including detectors, panels, field devices, and communication networks</li>

                                <li>Electrical installation including control panels, cabling, terminations, and power systems</li>

                                <li>Instrumentation installation including field instruments, control devices, and monitoring systems</li>

                                <li>PLC panels, automation systems, and control system installation</li>

                                <li>Loop checking, calibration, and functional testing</li>

                                <li>Integrated system testing and cause & effect verification</li>

                                <li>Pre-commissioning and commissioning activities</li>
                            </ul>
                        </div>

                        <div style={{ height: "60vh" }}>
                            <img style={{ height: "100%" }}
                                src="/images/core-strengths/installation-commissioning/img-1.png"
                                alt="Project Management"
                                className="w-full object-cover"
                            />
                        </div>

                    </div>
                </div>

                {/* Core Strengths */}
                <CoreStrengthCards currentPath="/core-strengths/installation-commissioning" />

            </section>
        </>
    );
};

export default InstallationCommissioning;