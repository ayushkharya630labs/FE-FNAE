import React from "react";
import { motion } from "framer-motion";
import {
    FileTextOutlined,
    SettingOutlined,
    ProjectOutlined,
    ToolOutlined,
    CheckCircleOutlined,
    ArrowRightOutlined, ArrowUpOutlined
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Home = () => {

    const heroSlides = [
        {
            type: "home",
            image: "/images/home/hero.jpg",
            title: "Integrated Engineering Solutions",
            highlight: "Precision in Engineering",
        },

        {
            type: "default",
            image: "/images/home/slide-1.png",
            subtitle: "For end-to-end solutions",
            title: "Comprehensive Fire Safety Services, From",
            highlight: " Design to Maintenance",
            link: "/services/fire-protection",
        },

        {
            type: "default",
            image: "/images/home/slide-2.png",
            subtitle: "High-end fire safety solutions",
            title: "Driving Safety Innovation Across ",
            highlight: " Diverse Industries Worldwide",
            link: "/systems",
        },

        {
            type: "default",
            image: "/images/home/slide-3.png",
            subtitle: "Innovation at the heart of safety",
            title: "Norwegian Legacy of Fire Protection Expertise, ",
            highlight: " Trusted Since 1953",
            link: "/core-strengths",
        },

        {
            type: "default",
            image: "/images/home/slide-4.png",
            subtitle: "Backed By Norwegian Legacy Since 1953",
            title: "Delivering Reliable Systems For ",
            highlight: " Demanding Industrial Environments",
            link: "/about",
        },
    ];

    const fadeUp = {
        hidden: {
            opacity: 0,
            y: 40,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    const stagger = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.12,
            },
        },
    };

    return (
        <>
            <section className="hero-section">

                <Swiper
                    modules={[Autoplay, Pagination, EffectFade]}
                    effect="fade"
                    loop
                    speed={1200}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    className="hero-swiper"
                >
                    {heroSlides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className="hero-slide"
                                style={{
                                    backgroundImage: `url(${slide.image})`,
                                }}
                            >
                                <div className="hero-overlay" />

                                <div className="container-main hero-content">

                                    {slide.type === "home" ? (

                                        <div className="hero-home-content">

                                            <h1 className="text-4xl md:text-5xl font-light leading-tight">
                                                <span className="text-white">
                                                    Integrated Engineering Solutions
                                                </span>
                                                <br />
                                                <span className="text-white"> for </span>
                                                <span className="text-secondary font-medium">
                                                    Precision in Engineering
                                                </span>
                                            </h1>

                                            {/* Stats */}
                                            <motion.div
                                                className="mt-16 grid grid-cols-3 max-w-3xl"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{
                                                    delay: 0.6,
                                                    duration: 0.8
                                                }}
                                            >

                                                <motion.div
                                                    initial={{ opacity: 0, y: 30 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{
                                                        delay: 0.8,
                                                        duration: 0.6
                                                    }}
                                                >
                                                    <h2 className="text-5xl font-light text-white">+25</h2>
                                                    <p className="mt-2 text-sm text-gray-300">
                                                        Years of experience
                                                    </p>
                                                </motion.div>

                                                <motion.div
                                                    initial={{ opacity: 0, y: 30 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{
                                                        delay: 1,
                                                        duration: 0.6
                                                    }}
                                                >
                                                    <h2 className="text-5xl font-light text-white">+350</h2>
                                                    <p className="mt-2 text-sm text-gray-300">
                                                        Successful projects
                                                    </p>
                                                </motion.div>

                                                <motion.div
                                                    initial={{ opacity: 0, y: 30 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{
                                                        delay: 1.2,
                                                        duration: 0.6
                                                    }}
                                                >
                                                    <h2 className="text-5xl font-light text-white">+150</h2>
                                                    <p className="mt-2 text-sm text-gray-300">
                                                        Expert team
                                                    </p>
                                                </motion.div>

                                            </motion.div>

                                        </div>

                                    ) : (

                                        <div className="hero-content-inner">

                                            <span className="hero-badge">
                                                {slide.subtitle}
                                            </span>

                                            <h1 className="hero-title">
                                                {slide.title}

                                                {slide.highlight && (
                                                    <>
                                                        <span className="hero-title-highlight">
                                                            {slide.highlight}
                                                        </span>
                                                    </>
                                                )}
                                            </h1>

                                            <Link
                                                to={slide.link}
                                                className="hero-btn"
                                            >
                                                Learn More
                                            </Link>

                                        </div>

                                    )}

                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </section>

            <motion.section
                className="py-16 bg-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.8 }}
            >
                <div className="container-main">

                    {/* Section Header */}
                    <motion.div
                        className="mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <h2 className="section-title">Explore Our Expertise</h2>
                        <div className="section-underline"></div>
                    </motion.div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        {/* Card 1 */}
                        <motion.div
                            className="expertise-card"
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.7,
                                delay: 0.1
                            }}
                            whileHover={{
                                y: -10
                            }}
                        >
                            <motion.img
                                src="/images/home/expertise-1.jpg"
                                alt="Fire Protection"
                                className="w-full h-48 object-cover"
                                whileHover={{
                                    scale: 1.05
                                }}
                                transition={{
                                    duration: 0.5
                                }}
                            />

                            <div className="p-6">
                                <h3 className="expertise-title mb-3">
                                    Fire Protection & Safety
                                </h3>

                                <p className="expertise-desc mb-6">
                                    Fire protection & Safety division undertakes turnkey projects
                                    in Fire Detection, Alarm, Protection & Suppression Systems.
                                    Typical...
                                </p>

                                <motion.a
                                    href="/services/fire-protection"
                                    className="expertise-link"
                                    whileHover={{ x: 4 }}
                                >
                                    VIEW <span>›</span>
                                </motion.a>
                            </div>
                        </motion.div>

                        {/* Card 2 */}
                        <motion.div
                            className="expertise-card"
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.7,
                                delay: 0.25
                            }}
                            whileHover={{
                                y: -10
                            }}
                        >
                            <motion.img
                                src="/images/home/expertise-2.jpg"
                                alt="Instrumentation"
                                className="w-full h-48 object-cover"
                                whileHover={{
                                    scale: 1.05
                                }}
                                transition={{
                                    duration: 0.5
                                }}
                            />

                            <div className="p-6">
                                <h3 className="expertise-title mb-3">
                                    Instrumentation & Automation
                                </h3>

                                <p className="expertise-desc mb-6">
                                    We have a full-fledged instrumentation design and construction
                                    team that can undertake installation, testing and
                                    commissioning...
                                </p>

                                <motion.a
                                    href="/services/instrumentation-control"
                                    className="expertise-link"
                                    whileHover={{ x: 4 }}
                                >
                                    VIEW <span>›</span>
                                </motion.a>
                            </div>
                        </motion.div>

                        {/* Card 3 */}
                        <motion.div
                            className="expertise-card"
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.7,
                                delay: 0.4
                            }}
                            whileHover={{
                                y: -10
                            }}
                        >
                            <motion.img
                                src="/images/home/expertise-3.jpg"
                                alt="Electrical Systems"
                                className="w-full h-48 object-cover"
                                whileHover={{
                                    scale: 1.05
                                }}
                                transition={{
                                    duration: 0.5
                                }}
                            />

                            <div className="p-6">
                                <h3 className="expertise-title mb-3">
                                    Electrical Systems
                                </h3>

                                <p className="expertise-desc mb-6">
                                    We provide multidisciplinary design and project management
                                    solutions for HV, MV & LV substations and industrial
                                    electrification projects.
                                </p>

                                <motion.a
                                    href="/services/electrical-systems"
                                    className="expertise-link"
                                    whileHover={{ x: 4 }}
                                >
                                    VIEW <span>›</span>
                                </motion.a>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </motion.section>

            <motion.section
                className="about-section"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8 }}
            >

                {/* LEFT */}
                <motion.div
                    className="about-left"
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.9,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >
                    <div className="about-content">
                        <h2 className="section-title text-white">About Firenor</h2>
                        <div className="section-underline"></div>

                        <motion.p
                            className="about-text mt-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            Firenor Middle East is a well-established engineering company with
                            its roots from the Scandinavian region, internationally recognized
                            for engineering excellence, Project Management skills, innovation,
                            and a strong safety culture. Building on this heritage, we deliver
                            reliable and integrated engineering solutions to clients across
                            the Oil & Gas, Industrial, Power, and Offshore sectors.
                        </motion.p>

                        <motion.p
                            className="about-text"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.35, duration: 0.6 }}
                        >
                            Our core focus lies in Fire Protection & Safety and Industrial
                            Automation, supported by comprehensive capabilities in electrical,
                            instrumentation, and control systems. We specialize in designing
                            and delivering customized solutions that enhance operational
                            safety, reliability, and efficiency in complex and high-risk
                            environments.
                        </motion.p>

                        <motion.p
                            className="about-text"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                        >
                            With over 25 years of regional experience and more than 350
                            successfully executed projects across the Middle East, India, and
                            Africa, Firenor Middle East has earned a reputation for quality,
                            technical excellence, and dependable project delivery.
                        </motion.p>
                    </div>
                </motion.div>

                {/* RIGHT */}
                <motion.div
                    className="about-right"
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.9,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >
                    <h3 className="services-title">Services offered.</h3>

                    {[
                        { icon: <FileTextOutlined />, text: "Basic & Detailed Design" },
                        { icon: <SettingOutlined />, text: "Engineering" },
                        { icon: <ProjectOutlined />, text: "Project Management" },
                        { icon: <ToolOutlined />, text: "Field Installation" },
                        { icon: <CheckCircleOutlined />, text: "Commissioning and Start-up" },
                        { icon: <FileTextOutlined />, text: "Customer Training" },
                        { icon: <FileTextOutlined />, text: "Documentation" },
                        { icon: <ProjectOutlined />, text: "After Project Support" },
                        { icon: <SettingOutlined />, text: "Annual Maintenance Contracts" },
                        { icon: <SettingOutlined />, text: "Product & Control System Solutions" },
                        { icon: <ToolOutlined />, text: "Control Panel Assy" },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            className="service-item"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: index * 0.06,
                                duration: 0.5,
                            }}
                            whileHover={{
                                x: 6,
                            }}
                        >
                            {item.icon} {item.text}
                        </motion.div>
                    ))}
                </motion.div>

            </motion.section>

            <motion.section
                className="py-16 bg-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8 }}
            >
                <div className="container-main">

                    {/* Header */}
                    <div className="clients-header">

                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="clients-title">
                                Trusted by Industry Leaders & Clients
                            </h2>

                            <div className="clients-underline"></div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <Link to="/clients" className="view-all-btn">
                                View All
                            </Link>
                        </motion.div>

                    </div>

                    {/* Logos */}
                    <div className="clients-grid">

                        {[
                            "/images/clients/client-1.png",
                            "/images/clients/client-2.png",
                            "/images/clients/client-3.png",
                            "/images/clients/client-4.png",
                            "/images/clients/client-5.png",
                            "/images/clients/client-6.png",
                        ].map((logo, index) => (
                            <motion.div
                                key={index}
                                className="client-logo"
                                initial={{
                                    opacity: 0,
                                    y: 30,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: index * 0.1,
                                    duration: 0.6,
                                }}
                                whileHover={{
                                    scale: 1.05,
                                    y: -4,
                                }}
                            >
                                <img
                                    src={logo}
                                    alt={`Client ${index + 1}`}
                                />
                            </motion.div>
                        ))}

                    </div>

                </div>
            </motion.section>


            <motion.section
                className="py-16 bg-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.8 }}
            >
                <div className="container-main">

                    <div>

                        <motion.h2
                            className="core-section-title"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            Explore our core strengths
                        </motion.h2>

                        <motion.div
                            className="core-underline"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            style={{ transformOrigin: "left" }}
                        />

                        {/* Grid */}
                        <div className="flex mt-8">

                            {/* Left info */}
                            <motion.div
                                className="core-card core-info basis-[50%]"
                                initial={{ opacity: 0, x: -60 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.8,
                                    ease: [0.22, 1, 0.36, 1]
                                }}
                            >
                                <div className="core-shape shape-1"></div>
                                <div className="core-shape shape-2"></div>
                                <div className="core-shape shape-3"></div>
                                <div className="core-shape shape-4"></div>

                                <div className="core-info-content">
                                    <h3>We are energy</h3>

                                    <p>
                                        Over 25 years experience & knowledge of international
                                        industrial systems, dedicated to provide the best
                                        economical solutions.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Right image */}
                            <motion.div
                                className="core-card basis-[50%]"
                                initial={{ opacity: 0, x: 60 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.8,
                                    ease: [0.22, 1, 0.36, 1]
                                }}
                                whileHover={{ y: -6 }}
                            >
                                <motion.img
                                    src="/images/core-strengths/strengths-5.png"
                                    alt=""
                                    whileHover={{ scale: 1.04 }}
                                    transition={{ duration: 0.5 }}
                                />

                                <Link to="/core-strengths/installation-commissioning" className="core-arrow">
                                    <ArrowRightOutlined />
                                </Link>
                                <h5>Installation & Commissioning</h5>
                            </motion.div>
                        </div>

                        {/* Bottom images */}
                        <div className="core-bottom flex">

                            <motion.div
                                className="core-card basis-[40%]"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: 0.1,
                                    duration: 0.7
                                }}
                                whileHover={{ y: -6 }}
                            >
                                <motion.img
                                    src="/images/core-strengths/strengths-1.jpg"
                                    alt=""
                                    whileHover={{ scale: 1.04 }}
                                    transition={{ duration: 0.5 }}
                                />

                                <Link to="/core-strengths/project-management" className="core-arrow">
                                    <ArrowRightOutlined />
                                </Link>
                                <h5>Project Management</h5>
                            </motion.div>

                            <motion.div
                                className="core-card basis-[30%]"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: 0.25,
                                    duration: 0.7
                                }}
                                whileHover={{ y: -6 }}
                            >
                                <motion.img
                                    src="/images/core-strengths/strengths-3.png"
                                    alt=""
                                    whileHover={{ scale: 1.04 }}
                                    transition={{ duration: 0.5 }}
                                />

                                <Link to="/core-strengths/production" className="core-arrow">
                                    <ArrowRightOutlined />
                                </Link>
                                <h5>Production</h5>
                            </motion.div>

                            <motion.div
                                className="core-card basis-[30%]"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: 0.4,
                                    duration: 0.7
                                }}
                                whileHover={{ y: -6 }}
                            >
                                <motion.img
                                    src="/images/core-strengths/strengths-6.png"
                                    alt=""
                                    whileHover={{ scale: 1.04 }}
                                    transition={{ duration: 0.5 }}
                                />

                                <Link to="/core-strengths/maintenance" className="core-arrow">
                                    <ArrowRightOutlined />
                                </Link>
                                <h5>Maintance</h5>
                            </motion.div>

                        </div>
                    </div>

                    {/* ===== Certifications ===== */}
                    <motion.div
                        className="cert-section"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.8,
                            delay: 0.2
                        }}
                    >
                        <h3 className="cert-title">Our Certifications</h3>

                        <p className="cert-desc">
                            Our certifications demonstrate our adherence to recognized
                            industry standards, ensuring reliable, safe, and compliant
                            solutions for our clients.
                        </p>

                        <p className="text-[#43494E] text-[22px]">
                            NEBOSH, BS 6387, IEC 60331, EN 50200, CE, FM, UL, DNV, BV, IMO, NFPA
                        </p>

                        <Link to="/contact">

                            <motion.button
                                className="cert-btn mt-5"
                                whileHover={{
                                    y: -2,
                                    scale: 1.02
                                }}
                                whileTap={{
                                    scale: 0.98
                                }}
                            >
                                Contact us
                            </motion.button>
                        </Link>
                    </motion.div>

                </div>
            </motion.section >

        </>

    );
};

export default Home;
