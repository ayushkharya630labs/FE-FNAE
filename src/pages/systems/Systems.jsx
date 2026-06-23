import React from 'react'
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageHero from "../../components/PageHero/PageHero";

const Systems = () => {

    const systemsData = [
        {
            title: "Deluge Systems, Multi Zone",
            description:
                "The Firenor multi zone deluge skid system offers exceptional fire protection for high risk areas where rapid fire spread is a potential scenario, by allowing quick discharge of water with or without foam in case of emergency.",
            image: "/images/systems/system-1.jpg",
            link: "/systems/deluge-systems-multi-zone",
        },
        {
            title: "Deluge Systems, Single Zone",
            description:
                "A deluge system consists of a network of dry pipework and open nozzles that is connected to a water supply through a normally closed on-off or a pressure regulating deluge valve.",
            image: "/images/systems/system-2.jpg",
            link: "/systems/deluge-systems-single-zone",
        },
        {
            title: "DIFF Systems (Deck Integrated Fire Fighting)",
            description:
                "A Deck Integrated Fire Fighting (DIFF) system is an effective fire suppression system that is normally the primary firefighting system on a helideck. The compact design of the system also allows it to be easily installed in storage areas and hangars used for aircrafts and helicopters. This versatile system can also extinguish a pool fire by mixing foam in the water at a specified flow, should the need arise.",
            image: "/images/systems/system-3.jpg",
            link: "/systems/diff-systems",
        },
        {
            title: "Standalone DIFF Systems",
            description:
                "A Deck Integrated Fire Fighting (DIFF) system is an effective fire suppression system that is normally the primary firefighting system on a helideck.",
            image: "/images/systems/system-4.jpg",
            link: "/systems/standalone-diff",
        },
        {
            title: "Standalone Compressed Air Foam Systems (CAFS)",
            description:
                "A homogenous foam produced by the combination of water, foam concentrate, and air or nitrogen under pressure.",
            image: "/images/systems/system-5.png",
            link: "/systems/standalone-cafs",
        },
        {
            title: "Monitor Systems",
            description:
                "A monitor system is a fast acting fire protection system used primarily to protect against rapid fire spread in high risk areas.",
            image: "/images/systems/system-6.jpg",
            link: "/systems/monitor-system",
        },
        {
            title: "Sprinkler Systems",
            description:
                "A sprinkler system offers optimal fire protection in areas where there is little to no risk of rapid fire spread.",
            image: "/images/systems/system-7.jpg",
            link: "/systems/sprinkler-systems",
        },
        {
            title: "DAHR Systems (Dual Agent Hose Reel)",
            description:
                "The Firenor Dual Agent Hose Reel (DAHR) is a high quality supplemental fire extinguishing device intended for manual use against smaller fires on and in the vicinity of helicopter decks, as well as areas with high risk of hydrocarbon fires where the primary fixed firefighting system may have limited reach.",
            image: "/images/systems/system-8.jpg",
            link: "/systems/dahr-systems",
        },
        {
            title: "Hose Reels",
            description:
                "The Firenor firewater hose reel is a high quality quick-response piece of equipment ideal for manual fighting of small fires and for protection of personnel during evacuation. Use against smaller fires on and in the vicinity of helicopter decks, as well as areas with high risk of hydrocarbon fires where the primary fixed firefighting system may have limited reach.",
            image: "/images/systems/system-9.jpg",
            link: "/systems/hose-reels",
        },
        {
            title: "Hydrants",
            description:
                "The Firenor hydrant is designed to be fully compliant with all relevant governing rules and regulations for firefighting equipment on offshore and marine installations.",
            image: "/images/systems/system-10.png",
            link: "/systems/hydrants",
        },
        {
            title: "Foam Systems",
            description:
                "The Firenor foam system is connected to the foam ring main which efficiently supplies foam to all foam consuming equipment.",
            image: "/images/systems/system-11.jpg",
            link: "/systems/foam-systems",
        },
        {
            title: "Water Mist Systems",
            description:
                "A water mist system combines the strength of deluge and gaseous systems. It is used for protection of enclosed areas e.g. generator rooms, turbine enclosures, and machine enclosures.",
            image: "/images/systems/system-12.jpg",
            link: "/systems/water-mist-systems",
        },
        {
            title: "Gaseous Systems",
            description:
                "A gaseous fire suppression system can be designed to release a variety of gasses, including Argonite, Inergen, CO2, FM200, Novec, or an equivalent gas.",
            image: "/images/systems/system-13.jpg",
            link: "/systems/gaseous-systems",
        },
        {
            title: "Hydrophore Systems",
            description:
                "Hydrophore system is a safety system designed to prevent pressure surges in the firewater distribution piping.",
            image: "/images/systems/system-14.jpg",
            link: "/systems/hydrophore-systems",
        },
        {
            title: "APPC Systems",
            description:
                "Active Pressure Pulse Compensator (APPC) is to protect the firefighting systems from damage by preventing pressure surges in the firewater distribution piping.",
            image: "/images/systems/system-15.jpg",
            link: "/systems/appc-systems",
        },
        {
            title: "Powder Test Container",
            description:
                "To ensure environment friendly full-scale testing of any Firefighting System containing powder, Firenor has developed a powder test container.",
            image: "/images/systems/system-16.jpg",
            link: "/systems/powder-test-container",
        },
        {
            title: "Utility Stations",
            description:
                "The Firenor utility station is a high quality system that is generally installed in area where specific utility services are required during operation and maintenance.",
            image: "/images/systems/system-17.jpg",
            link: "/systems/utility-stations",
        },
    ];

    return (
        <>
            {/* ================= HERO ================= */}
            <PageHero
                breadcrumb="Home"
                current="Systems"
                title="Systems"
                description="Firenor Middle-East specializes in advanced firefighting systems, offering reliable solutions designed to protect industrial facilities and ensure safety in high-risk environments."
                leftBg="/images/home/hero-right.jpg"
                rightBg="/images/home/slide-2.png"
            />

            {/* ================= SCOPE OF WORK ================= */}
            <motion.section
                className="py-16 bg-white"
            >
                <div className="container-main">

                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {systemsData.map((item, index) => (
                            <motion.div
                                key={index}
                                className="expertise-card"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                }}
                                whileHover={{
                                    y: -8,
                                }}
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-48 object-cover"
                                />

                                <div className="p-6">
                                    <h3 className="expertise-title mb-3">
                                        {item.title}
                                    </h3>

                                    <p className="expertise-desc mb-6">
                                        {item.description.split(" ").length > 30
                                            ? item.description.split(" ").slice(0, 30).join(" ") + "..."
                                            : item.description}
                                    </p>

                                    <Link
                                        to={item.link}
                                        className="expertise-link"
                                    >
                                        VIEW <span>›</span>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>
        </>
    )
}

export default Systems