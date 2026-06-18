import React from 'react'
import PageHero from "../../components/PageHero/PageHero";

const InstrumentationControl = () => {
    return (
        <>
            {/* ================= HERO ================= */}
            <PageHero
                breadcrumb="Home / Services"
                current="Instrumentation & Control Automation "
                title="Instrumentation & Control Automation "
                description="We provide instrumentation design, installation, testing, and commissioning services for oil storage terminals, refineries, and petrochemical industries. Our experienced team is supported by advanced equipment and a strong commitment to continuous learning and technical excellence."
                leftBg="/images/home/hero-right.png"
                rightBg="/images/services/instrumentation-control.jpg"
            />

            {/* ================= SCOPE OF WORK ================= */}
            <section className="py-16 bg-white">
                <div className="container-main">
                    <h3 className="text-gray-600 mb-6">
                        Our core expertise included
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Card 1 */}
                        <div className="border border-gray-200 bg-white">
                            <div className="relative">
                                <img
                                    src="/images/services/InstrumentationControl/service-1.jpg"
                                    alt=""
                                    className="w-full h-48 object-cover"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-base font-medium text-gray-800 mb-3">
                                    Engineering & Design
                                </h3>
                                <ul className="list-disc marker:text-[#6C6D70] pl-5 space-y-2 text-sm text-gray-600">
                                    <li>Review of PFDs and P&IDs</li>
                                    <li>Preparation of Instrument Index</li>
                                    <li>Development of Instrument Specifications & Data Sheets</li>
                                    <li>Instrument Loop Design</li>
                                    <li>Selection of instruments to suit process applications and area classification</li>
                                </ul>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="border border-gray-200 bg-white">
                            <div className="relative">
                                <img
                                    src="/images/services/InstrumentationControl/service-2.jpg"
                                    alt=""
                                    className="w-full h-48 object-cover"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-base font-medium text-gray-800 mb-3">
                                    Layout, Installation & Infrastructure
                                </h3>
                                <ul className="list-disc marker:text-[#6C6D70] pl-5 space-y-2 text-sm text-gray-600">
                                    <li>Instrument, JB, cabling & control room layout</li>
                                    <li>Installation of instrument systems for process plants</li>
                                    <li>Installation of local panels, cabinets & gauge boards</li>
                                    <li>Installation of main air line piping and air distribution headers</li>
                                    <li>Impulse piping and SS tubing</li>
                                </ul>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="border border-gray-200 bg-white">
                            <div className="relative">
                                <img
                                    src="/images/services/InstrumentationControl/service-3.jpg"
                                    alt=""
                                    className="w-full h-48 object-cover"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-base font-medium text-gray-800 mb-3">
                                    Testing, Integration & Commissioning
                                </h3>
                                <ul className="list-disc marker:text-[#6C6D70] pl-5 space-y-2 text-sm text-gray-600">
                                    <li>Calibration and loop testing</li>
                                    <li>Integration & system testing</li>
                               </ul>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="border border-gray-200 bg-white">
                            <div className="relative">
                                <img
                                    src="/images/services/InstrumentationControl/service-4.jpg"
                                    alt=""
                                    className="w-full h-48 object-cover"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-base font-medium text-gray-800 mb-3">
                                    Communication, Safety & Control Systems
                                </h3>
                                <ul className="list-disc marker:text-[#6C6D70] pl-5 space-y-2 text-sm text-gray-600">
                                    <li>CCTV systems</li>
                                    <li>PA/GA systems</li>
                                    <li>Telecommunication systems</li>
                                    <li>Implementation of fiber optic network systems</li>
                                    <li>Fire & Gas systems</li>
                               </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= CONTROL SYSTEMS BANNER ================= */}
            <section className="bg-[#4FA3A6] py-14">
                <div className="container-main text-center text-white">

                    {/* Title */}
                    <h2 className="text-3xl md:text-4xl font-light mb-4">
                        Control Systems & Integration
                    </h2>

                    {/* Description */}
                    <p className="text-sm md:text-base text-white/90 max-w-3xl mx-auto mb-6">
                        Firenor is proficient in system integration of Industrial and Safety Automation Systems from...
                    </p>

                    {/* Companies List */}
                    <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
                        <span className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                            Rockwell/Allen Bradley, USA
                        </span>

                        <span className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                            Siemens AG, Germany
                        </span>

                        <span className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                            Emerson
                        </span>

                        <span className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                            Honeywell Automation
                        </span>
                    </div>
                </div>
            </section>

            {/* ================= SCOPE OF WORK ================= */}
            <section className="py-16 bg-white">
                <div className="container-main">
                    <h3 className="text-gray-600 mb-6">
                        Our control system capabilities include design and implementation of
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Card 5 */}
                        <div className="border border-gray-200 bg-white">
                            <div className="relative">
                                <img
                                    src="/images/services/InstrumentationControl/service-5.jpg"
                                    alt=""
                                    className="w-full h-48 object-cover"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-base font-medium text-gray-800 mb-3">
                                    Control & Automation
                                </h3>
                                <ul className="list-disc marker:text-[#6C6D70] pl-5 space-y-2 text-sm text-gray-600">
                                    <li>PLC Based Control System</li>
                                    <li>SCADA Based Monitoring & Control System</li>
                                    <li>Emergency Shutdown System</li>
                               </ul>
                            </div>
                        </div>

                        {/* Card 6 */}
                        <div className="border border-gray-200 bg-white">
                            <div className="relative">
                                <img
                                    src="/images/services/InstrumentationControl/service-6.jpg"
                                    alt=""
                                    className="w-full h-48 object-cover"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-base font-medium text-gray-800 mb-3">
                                    Safety & Surveillance
                                </h3>
                                <ul className="list-disc marker:text-[#6C6D70] pl-5 space-y-2 text-sm text-gray-600">
                                    <li>Fire & Gas Detection System</li>
                                    <li>CCTV Monitoring & Surveillance System</li>
                               </ul>
                            </div>
                        </div>

                        {/* Card 7 */}
                        <div className="border border-gray-200 bg-white">
                            <div className="relative">
                                <img
                                    src="/images/services/InstrumentationControl/service-7.jpg"
                                    alt=""
                                    className="w-full h-48 object-cover"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-base font-medium text-gray-800 mb-3">
                                    Terminal & Asset Management
                                </h3>
                                <ul className="list-disc marker:text-[#6C6D70] pl-5 space-y-2 text-sm text-gray-600">
                                    <li>Terminal Automation System</li>
                                    <li>Terminal Business Management System</li>
                                    <li>Tank Farm Inventory Management System</li>
                               </ul>
                            </div>
                        </div>

                        {/* Card 8 */}
                        <div className="border border-gray-200 bg-white">
                            <div className="relative">
                                <img
                                    src="/images/services/InstrumentationControl/service-8.jpg"
                                    alt=""
                                    className="w-full h-48 object-cover"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-base font-medium text-gray-800 mb-3">
                                    Pipeline & Valve Solutions
                                </h3>
                                <ul className="list-disc marker:text-[#6C6D70] pl-5 space-y-2 text-sm text-gray-600">
                                    <li>Pipeline Monitoring & Leak Detection System</li>
                                    <li>Telemetry & Remote Communication System</li>
                                    <li>Manual Valves Retrofitting & Automation Solutions</li>
                               </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default InstrumentationControl