import React from "react";
import { motion } from "framer-motion";
import PageHero from "../../components/PageHero/PageHero";

const ElectricalSystems = () => {
    const services = [
        {
            image: "/images/services/ElectricalSystems/service-1.jpg",
            title: "Power Distribution",
            items: [
                "MV Distribution Transformers",
                "RMUs",
                "LV Cables & Busbar Systems",
                "Earthing System",
            ],
        },
        {
            image: "/images/services/ElectricalSystems/service-2.jpg",
            title: "Switchgear & Control",
            items: [
                "MV & LV Switchgear Panels",
                "Switchgear and Generator Control Panels",
                "Synchronization Panels",
                "Auto Transfer System (ATS)",
            ],
        },
        {
            image: "/images/services/ElectricalSystems/service-3.jpg",
            title: "Motor & Drive Solutions",
            items: [
                "Motor Control Centers (MCC)",
                "VFDs, Soft Starters, Star-Delta & DOL",
            ],
        },
        {
            image: "/images/services/ElectricalSystems/service-4.jpg",
            title: "Power Backup & Reliability",
            items: [
                "Diesel Generators",
                "AC & DC UPS Systems",
            ],
        },
        {
            image: "/images/services/ElectricalSystems/service-5.jpg",
            title: "Specialized & Hazardous Area Solutions",
            items: [
                "Solar Power for Hazardous Areas",
                "Industrial & Hazardous Area Lighting",
            ],
        },
    ];

    return (
        <>
            {/* ================= HERO ================= */}
            <PageHero
                breadcrumb="Home / Services"
                current="Electrical Systems"
                title="Electrical Systems"
                description="We have a full-fledged instrumentation design and construction team that can undertake installation, testing and commissioning activities in oil storage terminals, refineries and petrochemical industries. The division comprises a team of highly trained, experienced and motivated group of professionals supported by the latest test and field equipments. We lay great emphasis on continuous learning with opportunities to improve and grow our skills."
                leftBg="/images/home/hero-right.jpg"
                rightBg="/images/services/electrical-systems.jpg"
            />

            {/* ================= SCOPE OF WORK ================= */}
            <motion.section
                className="py-16 bg-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="container-main">

                    <motion.h3
                        className="text-gray-600 mb-6"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        Our core expertise includes design, detailed Engineering,
                        equipment sizing/selection, procurement, installation and
                        commissioning of,
                    </motion.h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                className="border border-gray-200 bg-white"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                }}
                                whileHover={{
                                    y: -6,
                                }}
                            >
                                <div className="relative overflow-hidden">
                                    <motion.img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-48 object-cover"
                                        whileHover={{
                                            scale: 1.04,
                                        }}
                                        transition={{
                                            duration: 0.4,
                                        }}
                                    />
                                </div>

                                <div className="p-6">
                                    <h3 className="text-base font-medium text-gray-800 mb-3">
                                        {service.title}
                                    </h3>

                                    <ul className="list-disc marker:text-[#6C6D70] pl-5 space-y-2 text-sm text-gray-600">
                                        {service.items.map((item, itemIndex) => (
                                            <li key={itemIndex}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}

                    </div>
                </div>
            </motion.section>
        </>
    );
};

export default ElectricalSystems;