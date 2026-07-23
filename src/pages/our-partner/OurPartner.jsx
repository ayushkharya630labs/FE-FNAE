import React, { useState } from "react";
import { motion } from "framer-motion";
import PageHero from "../../components/PageHero/PageHero";

const partners = [
    {
        image: "/images/partner/img-1.png",
        title: "McWane International - Kennedy Valve",
        description:
            "Kennedy Valves - Gate Valves, Check Valve, Butterfly Valve, Hydrants",
    },
    {
        image: "/images/partner/img-2.png",
        title: "Macron Safety Systems (UK) LTD ‐ SKUM",
        description:
            "SKUM Water and Foam Monitors, SKUM Foam Proportioners, SKUM Other Foam Hardware, SKUM Bladder Tanks, Foam Concentrates",
    },
    {
        image: "/images/partner/img-3.png",
        title: "SIEX 2001 S.L. – Siex",
        description:
            "SIEX CO2, SIEX FX / NOVEC, SIEX IG-541 Constant Flow, SIEX IG-55 Constant Flow, Siextrace, RG C02, RG FK / NOVEC, RG IG-541 Constant Flow, RG IG-55 Constant Flow Includes System Design, Installation,Testing, Commissioning and Maintenance on the products",
    },
    {
        image: "/images/partner/img-4.png",
        title: "Walter Frank & Sons Limited - Walter Frank",
        description:
            "All Products and Services Offered by Walter Frank (Product is the Frank Range of FM Approved and non-FM Approved Pressure Regulated Valves (PRV9i) and Frank range of FM approved and non-FM approved globe landing valves)",
    },
    {
        image: "/images/partner/img-5.png",
        title: "Fireproducts AS – Fireproducts",
        description:
            "All Products and Services offered for firefighting applications by Fireproducts. Fire Hose Nozzles, Fire Hoses, Fittings, Hose reels, Hydrant valves, Nozzles, Valves",
    },
    {
        image: "/images/partner/img-6.png",
        title: "AUMA Middle East FZE -DREHMO",
        description:
            "Valves (Al/ Bronze)/ Actuators",
    },
    {
        image: "/images/partner/img-7.png",
        title: "Automatic Compressed Air Foam (ACAF) Systems, Inc. – ACAF",
        description:
            "All ACAF Products Firefighting Equipment: BOSS handheld CAF EZ123 CAF Big Boss Dual Agent CAF/PPK Fire Suppression: CAF Generators Nozzles Zone Control – Control Valve unit Special Systems – Cross Fire, Rimshot and Rimseal Nozzle",
    },
    {
        image: "/images/partner/img-8.png",
        title: "OCV Control Valves",
        description:
            "Deluge valves Pressure Relief Valves Pressure Reducing Valves Thermal Expansion Relief Valves Air Maintenance Device",
    },
    {
        image: "/images/partner/img-9.png",
        title: "Foamtech AntiFire Company - Foamtech",
        description:
            "Foam Concentrate",
    },
    {
        image: "/images/partner/img-10.png",
        title: "Smith Applied Solutions",
        description:
            "Emergency Safety Shower Emergency Eyewash Station Portable emergency safety shower and eyewash station",
    },
    {
        image: "/images/partner/img-11.png",
        title: "Firechem - FIRE SAFETY DEVICES PRIVATE LIMITED",
        description:
            "Foam Concentrates Aqueous Film Forming Foam (AFFF) Alcohol Resistant AFFF (AR-AFFF) Protein & Fluoroprotein Fluorine Free",
    },
    {
        image: "/images/partner/img-12.png",
        title: "Fire Lion Global",
        description:
            "UL Bare Shaft Pump UL/FM Foam Pump Package Foam Pumping System Electronic Foam Proportioner (EFP) Foam Transfer Pump Hydraulic Drive Bracket Pump Pressure Relief/Safety Valve Fire Foam Pumps and Customized Systems - Fire Lion Global",
    },
    {
        image: "/images/partner/img-13.png",
        title: "Peerless Pumps",
        description:
            "Fire Pumps Horizontal In-line Multi-Stage Vertical Turbine Jockey Pumps",
    },
    {
        image: "/images/partner/img-14.png",
        title: "F.A.S. Fabbrica Apparecchiature Antincendio S.p.A. (Fire Fighting Systems)",
        description:
            `Casting Monitors
Manual Control with double handwheel, Self- oscillating, Electric, Oil-hydraulic actuation, Monitor in Bronze or corrosion proof light alloy, Manual Control with lever, Application for self-oscillating, monitor self-oscillating, Oil hydraulic actuation, Self- oscillating device made in steel, Electric-Oil Mini Power Pack Device in IP or EExd Atex execution Branchpipes for Monitors
Baffle plates single (DS) and double (DD), Full Jet Water branchpipe for monitors, Foam branchpipe for monitors, Self-induction foam branchpipe for monitors
Bladder Tank
Vertical - Foam Inside the bladder, Foam outside the bladder
Horizontal - Foam inside the bladder, Foam outside the bladder
Double bladder - Vertical double bladder tank with foam inside the bladder, Vertical double bladder tank with foam outside the bladder
Mixer for bladder tanks Foam Chambers
Trailers
Trailer for foam drum, Trailer for foam drum and monitor, Trailer for monitors with steel foam tank, Trailer CS approved cat.02, Trailer with polyethylene foam tank, Trailer with polyethylene foam tank 250 lt., Trailer for monitors, Trailer K1 approved cat. 01, Trailer monitors with extensible stabilizers, Trailer for monitors with stabilizers for high pressures Water of Foam Nozzles
Water NozzleLarge Bell, Full cone jet and well full cone jet nozzles, Blade jet nozzles, Water / Foam spray, Balde jet nozzles, Hollow cone spray nozzles, Water / foam spray
Fire Extinguishers
Dry Chemical powder portable fire extinguishers, Dry chemical powder wheeled fire extinguishers, CO2 portable fire extinguishers, CO2 wheeled fire extinguishers
Welded Monitors
Monitor self oscillating, Double branchpipe manual monitor with double handwheel, Electric controlled monitor in IP or EExd Atex executuon, Manual monitor controlled by lever, Oil hydraulic controlled monitor, Portable manual monitor, Manual monitor controlled by double handwheel, Self oscillating device made in steel, Electric-Oil Mini Power Pack Device in IP or EExd Atex execution Monitor Towers
Monitor tower with fixed platform, Monitor tower with rotating platform
Foam branchpipes
High back pressure, Foam branchpipe for floating roof tanks, Injection system, Portable low expansion foam branchpipe, Self-induction portable low expansion foam branchpipe, Steam branchpipe, Medium expansion foam branchpipe fixed or portable
Foam Pourers In-line Mixers
Pipe for in-line connection Adjustable suction percentage
Hydrants Wet, Dry
Cabinets and Boxes Nozzles for Monitors
Water/Foam, Self-induction water/foam, Water / Foam electric remote actuation, Water/Foam oil hydraulic actuation, Water / Foam bronze or aluminum
Control Panel Foam Test Valves Foam Generator
Extinguishers Hose Reels
Water hose reels, Double hose reels twin agent, powder and foam, Powder hose reel, Steam hose reel, Swivel mount hose reel
Hoses
Complements
Hydro Shields, Foam Guns, Branchpipes, Couplings, Boxes Foam Pumps, Windsock on Pole, Safety shower, Foam Agent, Firedoors, Safety Signs, Breathing apparatus, Fireproof suit, Boots and gloves, Fire Helmets`,
    },
    {
        image: "/images/partner/img-15.png",
        title: "The Protectowire Company, Inc. – Protectowire",
        description:
            `Linear Heat Detectors Standard Digital (PHSC)
Confirmed Temperature Initiation (CTI),
Fiber Optic
  PTS Fiber System
   PFS Series Fiber Optic Sensor Cable
Interface Modules
PIM-530 Module (PHSC), CTM-530 Module (CTI)
Control Panels
FireSystem SRP-4×4, FireSystem 2000 (FS 2000)
Battery Cabinets
Thermal Cameras
    PWTC-200 Series Thermal Camera
    PWTC-100 Thermal Camera
    PWTC-20 Thermal Camera
Installation Accessories
Fasteners & Mounting Clips, Splicing and Termination
Junction Boxes and Feed Cable, Messenger Wire, Service Tools
Notification Appliances
Strobe Signals, Electronic Signal/Strobe
Power Tone Amplified Speaker, Motorized Alarm Bells
Initiating Devices
Manual Pull Stations, Spot Heat Detectors- 302 Spot Heat Detectors- 5600 Series
Spectrex™ 40/40D Flame Detector Series
Spectrex™ 40/40C Flame Detector Series
Spectrex™ 20/20 Flame Detector Series
Spectrex™ Flame Detector Accessories
Protectowire | The Global Leader In Linear Heat Detection Systems`,
    },
    {
        image: "/images/partner/img-16.png",
        title: "Ex-Tech AS - Ex-tech",
        description:
            `All Ex-tech Products and Services Audible Visible Signalling Devices (AVS)
Beacons
Combinations of sounders and beacons Manual Call Points
Pushbuttons Sounders and Horns Status Lights
Ex Products and Equipment Accessories (plugs, cable glands
Components for pressurized solutions Control and Signal Components Enclosures and Control Cabinets Junction Boxes
Limit Switches
Local Control Stations Motor Starters and Isolators
Photocell Sensors Pressure Switches
Ex-lights, plug, sockets and breakers Ex Customized Products and Systems
Conversion of Industrial Equipment
Ex-certified wireless sensors`,
    },
];


const OurPartner = () => {

    const [currentPage, setCurrentPage] = useState(1);

    const pageData = [
        partners.slice(0, 6),      // Page 1
        partners.slice(6, 13),     // Page 2
        partners.slice(13, 14),    // Page 3
        partners.slice(14, 15),    // Page 4
        partners.slice(15, 16),    // Page 5
    ];

    const totalPages = pageData.length;

    const currentPartners = pageData[currentPage - 1];

    return (
        <>
            <PageHero
                breadcrumb="Home"
                current="Clients"
                title="Our Partners"
                description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
                leftBg="/images/home/hero-right.jpg"
                rightBg="/images/partner/bg-img.jpg"
            />

            <motion.section
                className="py-16 bg-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.15 }}
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
                        It is a long established fact that a reader will be distracted by
                        the readable content of a page when looking at its layout.
                    </motion.h3>

                    <div
                        className={`grid gap-8 ${currentPage <= 2
                                ? "grid-cols-1 md:grid-cols-2"
                                : "grid-cols-1"
                            }`}
                    >
                        {currentPartners.map((partner, index) => (
                            <motion.div
                                key={index}
                                className="border border-gray-200 bg-white"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                whileHover={{ y: -4 }}
                            >
                                <div className="relative">
                                    <img
                                        src={partner.image}
                                        alt={partner.title}
                                        className="h-30 p-2 object-contain max-w-[50%]"
                                    />
                                </div>

                                <div className="p-4 relative">
                                    <span
                                        className="
                      absolute
                      top-0
                      left-0
                      w-[12px]
                      h-[12px]
                      border-l-[4px]
                      border-t-[4px]
                      border-[#C4122F]
                    "
                                    />

                                    <h3 className="text-black mb-2">
                                        {partner.title}
                                    </h3>

                                    <p className="text-[14px] text-gray-500 whitespace-pre-line">
                                        {partner.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* pagination */}
                    <div className="flex items-center justify-center gap-6 mt-14">
                        {/* Previous */}
                        <button
                            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                            disabled={currentPage === 1}
                            className="flex items-center justify-center"
                        >
                            <img
                                src="/images/pagination-left-arrow.png"
                                alt="Previous"
                                className="w-11 h-11"
                            />
                        </button>
                        {/* Page Numbers */}
                        <div className="flex items-center gap-6">
                            {Array.from({ length: totalPages }).map((_, index) => {
                                const page = index + 1;
                                return (
                                    <button
                                        key={page}
                                        onClick={() => setCurrentPage(page)}
                                        className={`text-[17px] transition ${currentPage === page
                                            ? "text-black font-medium"
                                            : "text-gray-400"
                                            }`}
                                    >
                                        {page}
                                    </button>
                                );
                            })}
                        </div>
                        {/* Next */}
                        <button
                            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className="flex items-center justify-center disabled:opacity-50"
                        >
                            <img
                                src="/images/pagination-right-arrow.png"
                                alt="Next"
                                className="w-11 h-11"
                            />
                        </button>
                    </div>
                </div>
            </motion.section>
        </>
    );
};

export default OurPartner;