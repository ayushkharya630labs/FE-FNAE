import React from 'react'
import PageHero from "../../components/PageHero/PageHero";

const ElectricalSystems = () => {
    return (
        <>
            {/* ================= HERO ================= */}
            <PageHero
                breadcrumb="Home / Services"
                current="Electrical Systems "
                title="Electrical Systems "
                description="We have a full-fledged instrumentation design and construction team that can undertake installation, testing and commissioning activities in oil storage terminals, refineries and petrochemical industries. The division comprises a team of highly trained, experienced and motivated group of professionals supported by the latest test and field equipments. We lay great emphasis on continuous learning with opportunities to improve and grow our skills."
                leftBg="/images/home/hero-right.jpg"
                rightBg="/images/services/electrical-systems.jpg"
            />

            {/* ================= SCOPE OF WORK ================= */}
            <section className="py-16 bg-white">
                <div className="container-main">
                    <h3 className="text-gray-600 mb-6">
                        Our core expertise includes design, detailed Engineering, equipment sizing/selection, procurement, installation and commissioning of,
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Card 1 */}
                        <div className="border border-gray-200 bg-white">
                            <div className="relative">
                                <img
                                    src="/images/services/ElectricalSystems/service-1.jpg"
                                    alt=""
                                    className="w-full h-48 object-cover"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-base font-medium text-gray-800 mb-3">
                                    Power Distribution
                                </h3>
                                <ul className="list-disc marker:text-[#6C6D70] pl-5 space-y-2 text-sm text-gray-600">
                                    <li>MV Distribution Transformers</li>
                                    <li>RMUs</li>
                                    <li>LV Cables & Busbar Systems</li>
                                    <li>Earthing System</li>
                                </ul>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="border border-gray-200 bg-white">
                            <div className="relative">
                                <img
                                    src="/images/services/ElectricalSystems/service-2.jpg"
                                    alt=""
                                    className="w-full h-48 object-cover"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-base font-medium text-gray-800 mb-3">
                                   Switchgear & Control
                                </h3>
                                <ul className="list-disc marker:text-[#6C6D70] pl-5 space-y-2 text-sm text-gray-600">
                                    <li>MV & LV Switchgear Panels</li>
                                    <li>Switchgear and Generator Control Panels</li>
                                    <li>Synchronization Panels</li>
                                    <li>Auto Transfer System (ATS)</li>
                                </ul>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="border border-gray-200 bg-white">
                            <div className="relative">
                                <img
                                    src="/images/services/ElectricalSystems/service-3.jpg"
                                    alt=""
                                    className="w-full h-48 object-cover"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-base font-medium text-gray-800 mb-3">
                                    Motor & Drive Solutions
                                </h3>
                                <ul className="list-disc marker:text-[#6C6D70] pl-5 space-y-2 text-sm text-gray-600">
                                    <li>Motor Control Centers (MCC)</li>
                                    <li>VFDs, Soft Starters, Star-Delta & DOL</li>
                                </ul>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="border border-gray-200 bg-white">
                            <div className="relative">
                                <img
                                    src="/images/services/ElectricalSystems/service-4.jpg"
                                    alt=""
                                    className="w-full h-48 object-cover"
                                />
                            </div>
                            
                            <div className="p-6">
                                <h3 className="text-base font-medium text-gray-800 mb-3">
                                    Power Backup & Reliability
                                </h3>
                                <ul className="list-disc marker:text-[#6C6D70] pl-5 space-y-2 text-sm text-gray-600">
                                    <li>Diesel Generators</li>
                                    <li>AC & DC UPS Systems</li>
                                </ul>
                            </div>
                        </div>

                        {/* Card 5 */}
                        <div className="border border-gray-200 bg-white">
                            <div className="relative">
                                <img
                                    src="/images/services/ElectricalSystems/service-5.jpg"
                                    alt=""
                                    className="w-full h-48 object-cover"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-base font-medium text-gray-800 mb-3">
                                    Specialized & Hazardous Area Solutions
                                </h3>
                                <ul className="list-disc marker:text-[#6C6D70] pl-5 space-y-2 text-sm text-gray-600">
                                    <li>Solar Power for Hazardous Areas</li>
                                    <li>Industrial & Hazardous Area Lighting</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ElectricalSystems