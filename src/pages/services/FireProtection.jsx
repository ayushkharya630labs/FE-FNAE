import React from 'react'
import PageHero from "../../components/PageHero/PageHero";

const FireProtection = () => {
    return (
        <>
            {/* ================= HERO ================= */}
            <PageHero
                breadcrumb="Home / Services"
                current="Fire Protection & Safety"
                title="Fire Protection & Safety"
                description="Fire protection & Safety division undertakes turnkey projects in Fire Detection, Alarm, Protection & Suppression Systems. Typical project scope includes the complete chain from conceptual engineering to installation and commissioning. Our after sales support includes services and maintenance of all our systems and supply of spare parts."
                leftBg="/images/home/hero-right.jpg"
                rightBg="/images/services/fire-protection.jpg"
            />

            {/* ================= SCOPE OF WORK ================= */}
            <section className="py-16 bg-white">
                <div className="container-main">
                    <p className="text-sm text-gray-600 mb-10">
                        The scope of work we undertake typically include the following,
                        individually or collectively
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

            {/* ================= DESIGN ENGINEERING SECTION ================= */}
            <section className="py-16 bg-gray-100">
                <div className="container-main">

                    {/* Heading */}
                    <p className="text-sm text-gray-600 mb-8">
                        Design, Engineering, Implementation of solutions for Tankage Solutions -
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* LEFT CARD */}
                        <div className="stats-section bg-gray-200 p-8 rounded shadow-sm relative overflow-hidden">

                            {/* Icon */}
                            <div className="mb-4">
                               <img src="/images/services/icons/icon-1.png" className='w-15' alt="" />
                            </div>

                            {/* Title */}
                            <h3 className="text-gray-800 font-medium mb-4">
                                Water based Fire Protection system
                            </h3>

                            {/* List */}
                            <ol className="list-decimal pl-4 space-y-1 text-sm text-gray-600">
                                <li>Yard Fire hydrant system</li>
                                <li>Indoor hydrant system</li>
                                <li>Deluge water spray system (High velocity & Medium velocity)</li>
                                <li>Automatic sprinkler system</li>
                                <li>Pre-action sprinkler system</li>
                                <li>Low, medium and high expansion Foam system</li>
                                <li>Foam water spray and sprinkler system</li>
                            </ol>

                            {/* Pattern overlay */}
                            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('/images/pattern.png')] bg-cover"></div>
                        </div>

                        {/* RIGHT CARD */}
                        <div className="stats-section bg-gray-200 p-8 rounded shadow-sm relative overflow-hidden">

                            {/* Icon */}
                            <div className="mb-4">
                                <img src="/images/services/icons/icon-2.png" className='w-15' alt="" />
                            </div>

                            {/* Title */}
                            <h3 className="text-gray-800 font-medium mb-4">
                                Gas Extinguishing system such as
                            </h3>

                            {/* List */}
                            <ol className="list-decimal pl-4 space-y-1 text-sm text-gray-600">
                                <li>FM200 system</li>
                                <li>Novec system</li>
                                <li>Inert gas system</li>
                                <li>CO2 system</li>
                            </ol>

                            {/* Pattern overlay */}
                            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('/images/pattern.png')] bg-cover"></div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default FireProtection