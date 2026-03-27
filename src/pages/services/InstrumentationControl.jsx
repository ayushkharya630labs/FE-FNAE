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
                description="We have a full-fledged instrumentation design and construction team that can undertake installation, testing and commissioning activities in oil storage terminals, refineries and petrochemical industries. The division comprises a team of highly trained, experienced and motivated group of professionals supported by the latest test and field equipments. We lay great emphasis on continuous learning with opportunities to improve and grow our skills."
                leftBg="/images/home/hero-left.jpg"
                rightBg="/images/services/instrumentation-control.jpg"
            />

            {/* ================= SCOPE OF WORK ================= */}
            <section className="py-16 bg-white">
                <div className="container-main">
                    <p className="text-sm text-gray-600 mb-10">
                        Our core expertise included
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Card 1 */}
                        <div className="border border-gray-200 bg-white">
                            <div className="relative">
                                <img
                                    src="/images/services/service-1.jpg"
                                    alt=""
                                    className="w-full h-48 object-cover"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-base font-medium text-gray-800 mb-3">
                                    Engineering & Risk Analysis
                                </h3>
                                <ol className="list-decimal pl-4 space-y-1 text-sm text-gray-500">
                                    <li>Fire risk assessments</li>
                                    <li>Heat radiation & worst fire case assessments</li>
                                    <li>Design and detailed engineering</li>
                                    <li>Advanced design and engineering solutions</li>
                                </ol>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="border border-gray-200 bg-white">
                            <div className="relative">
                                <img
                                    src="/images/services/service-2.jpg"
                                    alt=""
                                    className="w-full h-48 object-cover"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-base font-medium text-gray-800 mb-3">
                                    System Analysis & Execution
                                </h3>
                                <ol className="list-decimal pl-4 space-y-1 text-sm text-gray-500">
                                    <li>Hydraulic analysis and calculations</li>
                                    <li>Procurement and supply</li>
                                    <li>Installation and commissioning</li>
                                    <li>Experienced installation & commissioning team</li>
                                </ol>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="border border-gray-200 bg-white">
                            <div className="relative">
                                <img
                                    src="/images/services/service-3.jpg"
                                    alt=""
                                    className="w-full h-48 object-cover"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-base font-medium text-gray-800 mb-3">
                                    Compliance & Project Delivery
                                </h3>
                                <ol className="list-decimal pl-4 space-y-1 text-sm text-gray-500">
                                    <li>Statutory / local authority approvals</li>
                                    <li>Turnkey services</li>
                                    <li>Project consultancy services</li>
                                    <li>Proven project management skills</li>
                                </ol>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="border border-gray-200 bg-white">
                            <div className="relative">
                                <img
                                    src="/images/services/service-4.jpg"
                                    alt=""
                                    className="w-full h-48 object-cover"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-base font-medium text-gray-800 mb-3">
                                    Training & Lifecycle Support
                                </h3>
                                <ol className="list-decimal pl-4 space-y-1 text-sm text-gray-500">
                                    <li>Training and documentation</li>
                                    <li>Maintenance and after-sales support</li>
                                    <li>After-sales support & maintenance services</li>
                                </ol>
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
                    <p className="text-sm text-gray-600 mb-10">
                        Our control system capabilities include design and implementation of
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Card 1 */}
                        <div className="border border-gray-200 bg-white">
                            <div className="relative">
                                <img
                                    src="/images/services/service-1.jpg"
                                    alt=""
                                    className="w-full h-48 object-cover"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-base font-medium text-gray-800 mb-3">
                                    Engineering & Risk Analysis
                                </h3>
                                <ol className="list-decimal pl-4 space-y-1 text-sm text-gray-500">
                                    <li>Fire risk assessments</li>
                                    <li>Heat radiation & worst fire case assessments</li>
                                    <li>Design and detailed engineering</li>
                                    <li>Advanced design and engineering solutions</li>
                                </ol>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="border border-gray-200 bg-white">
                            <div className="relative">
                                <img
                                    src="/images/services/service-2.jpg"
                                    alt=""
                                    className="w-full h-48 object-cover"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-base font-medium text-gray-800 mb-3">
                                    System Analysis & Execution
                                </h3>
                                <ol className="list-decimal pl-4 space-y-1 text-sm text-gray-500">
                                    <li>Hydraulic analysis and calculations</li>
                                    <li>Procurement and supply</li>
                                    <li>Installation and commissioning</li>
                                    <li>Experienced installation & commissioning team</li>
                                </ol>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="border border-gray-200 bg-white">
                            <div className="relative">
                                <img
                                    src="/images/services/service-3.jpg"
                                    alt=""
                                    className="w-full h-48 object-cover"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-base font-medium text-gray-800 mb-3">
                                    Compliance & Project Delivery
                                </h3>
                                <ol className="list-decimal pl-4 space-y-1 text-sm text-gray-500">
                                    <li>Statutory / local authority approvals</li>
                                    <li>Turnkey services</li>
                                    <li>Project consultancy services</li>
                                    <li>Proven project management skills</li>
                                </ol>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="border border-gray-200 bg-white">
                            <div className="relative">
                                <img
                                    src="/images/services/service-4.jpg"
                                    alt=""
                                    className="w-full h-48 object-cover"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-base font-medium text-gray-800 mb-3">
                                    Training & Lifecycle Support
                                </h3>
                                <ol className="list-decimal pl-4 space-y-1 text-sm text-gray-500">
                                    <li>Training and documentation</li>
                                    <li>Maintenance and after-sales support</li>
                                    <li>After-sales support & maintenance services</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default InstrumentationControl