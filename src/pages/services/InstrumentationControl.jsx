import React from 'react'
import { motion } from "framer-motion";
import PageHero from "../../components/PageHero/PageHero";

const InstrumentationControl = () => {

    const expertiseCards = [
        {
            image: "/images/services/InstrumentationControl/service-1.jpg",
            title: "Engineering & Design",
            items: [
                "Review of PFDs and P&IDs",
                "Preparation of Instrument Index",
                "Development of Instrument Specifications & Data Sheets",
                "Instrument Loop Design",
                "Selection of instruments to suit process applications and area classification",
            ],
        },
        {
            image: "/images/services/InstrumentationControl/service-2.jpg",
            title: "Layout, Installation & Infrastructure",
            items: [
                "Instrument, JB, cabling & control room layout",
                "Installation of instrument systems for process plants",
                "Installation of local panels, cabinets & gauge boards",
                "Installation of main air line piping and air distribution headers",
                "Impulse piping and SS tubing",
            ],
        },
        {
            image: "/images/services/InstrumentationControl/service-3.jpg",
            title: "Testing, Integration & Commissioning",
            items: [
                "Calibration and loop testing",
                "Integration & system testing",
            ],
        },
        {
            image: "/images/services/InstrumentationControl/service-4.jpg",
            title: "Communication, Safety & Control Systems",
            items: [
                "CCTV systems",
                "PA/GA systems",
                "Telecommunication systems",
                "Implementation of fiber optic network systems",
                "Fire & Gas systems",
            ],
        },
    ];

    const controlSystemCards = [
        {
            image: "/images/services/InstrumentationControl/service-5.jpg",
            title: "Control & Automation",
            items: [
                "PLC Based Control System",
                "SCADA Based Monitoring & Control System",
                "Emergency Shutdown System",
            ],
        },
        {
            image: "/images/services/InstrumentationControl/service-6.jpg",
            title: "Safety & Surveillance",
            items: [
                "Fire & Gas Detection System",
                "CCTV Monitoring & Surveillance System",
            ],
        },
        {
            image: "/images/services/InstrumentationControl/service-7.jpg",
            title: "Terminal & Asset Management",
            items: [
                "Terminal Automation System",
                "Terminal Business Management System",
                "Tank Farm Inventory Management System",
            ],
        },
        {
            image: "/images/services/InstrumentationControl/service-8.jpg",
            title: "Pipeline & Valve Solutions",
            items: [
                "Pipeline Monitoring & Leak Detection System",
                "Telemetry & Remote Communication System",
                "Manual Valves Retrofitting & Automation Solutions",
            ],
        },
    ];


    const ServiceCard = ({ card, index }) => (
        <motion.div
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
                    src={card.image}
                    alt=""
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
                    {card.title}
                </h3>

                <ul className="list-disc marker:text-[#6C6D70] pl-5 space-y-2 text-sm text-gray-600">
                    {card.items.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );

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
                    <motion.h3
                        className="text-gray-600 mb-6"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >  Our core expertise included</motion.h3>


                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {expertiseCards.map((card, index) => (
                            <ServiceCard
                                key={index}
                                card={card}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= CONTROL SYSTEMS BANNER ================= */}
            <motion.section
                className="bg-[#4FA3A6] py-14"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8 }}
            >
                <div className="container-main text-center text-white">

                    {/* Title */}
                    <motion.h2
                        className="text-3xl md:text-4xl font-light mb-4"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.7,
                            delay: 0.1
                        }}
                    >
                        Control Systems & Integration
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        className="text-sm md:text-base text-white/90 max-w-3xl mx-auto mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.7,
                            delay: 0.25
                        }}
                    >
                        Firenor is proficient in system integration of Industrial and Safety Automation Systems from...
                    </motion.p>

                    {/* Companies List */}
                    <motion.div
                        className="flex flex-wrap justify-center gap-6 text-sm md:text-base"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.8,
                            delay: 0.4
                        }}
                    >
                        {[
                            "Rockwell/Allen Bradley, USA",
                            "Siemens AG, Germany",
                            "Emerson",
                            "Honeywell Automation",
                        ].map((company, index) => (
                            <motion.span
                                key={company}
                                className="flex items-center gap-2"
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.5 + index * 0.1,
                                }}
                                whileHover={{
                                    y: -2,
                                }}
                            >
                                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                                {company}
                            </motion.span>
                        ))}
                    </motion.div>

                </div>
            </motion.section>

            {/* ================= SCOPE OF WORK ================= */}
            <section className="py-16 bg-white">
                <div className="container-main">
                    <motion.h3
                        className="text-gray-600 mb-6"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >Our control system capabilities include design and implementation of</motion.h3>


                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {controlSystemCards.map((card, index) => (
                            <ServiceCard
                                key={index}
                                card={card}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </section>

        </>
    )
}

export default InstrumentationControl