import React from "react";
import {
    FileTextOutlined,
    SettingOutlined,
    ProjectOutlined,
    ToolOutlined,
    CheckCircleOutlined,
    ArrowRightOutlined, ArrowUpOutlined
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <section className="hero-section">

                {/* Background layers */}
                <div className="hero-bg-left" />
                <div className="hero-bg-right" />
                <div className="hero-overlay" />

                {/* Content */}
                <div className="hero-content container-main flex flex-col justify-center">

                    {/* Heading */}
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-light leading-tight">
                            <span className="text-secondary">
                                Integrated Engineering Solutions
                            </span>
                            <br />
                            <span className="text-secondary"> for </span>
                            <span className="text-white font-medium">
                                Precision in Engineering
                            </span>
                        </h1>
                    </div>

                    {/* Stats */}
                    <div className="mt-16 grid grid-cols-3 max-w-3xl">
                        <div>
                            <h2 className="text-5xl font-light text-white">+25</h2>
                            <p className="mt-2 text-sm text-gray-300">
                                Years of experience
                            </p>
                        </div>

                        <div>
                            <h2 className="text-5xl font-light text-white">350</h2>
                            <p className="mt-2 text-sm text-gray-300">
                                Successful projects
                            </p>
                        </div>

                        <div>
                            <h2 className="text-5xl font-light text-white">550</h2>
                            <p className="mt-2 text-sm text-gray-300">
                                Expert team
                            </p>
                        </div>
                    </div>

                </div>
            </section>
            {/* ===== Explore Our Expertise ===== */}
            <section className="py-16 bg-white">
                <div className="container-main">

                    {/* Section Header */}
                    <div className="mb-12">
                        <h2 className="section-title">Explore Our Expertise</h2>
                        <div className="section-underline"></div>
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        {/* Card 1 */}
                        <div className="expertise-card">
                            <img
                                src="/images/home/expertise-1.jpg"
                                alt="Fire Protection"
                                className="w-full h-48 object-cover"
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

                                <a href="#" className="expertise-link">
                                    VIEW <span>›</span>
                                </a>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="expertise-card">
                            <img
                                src="/images/home/expertise-2.jpg"
                                alt="Instrumentation"
                                className="w-full h-48 object-cover"
                            />

                            <div className="p-6">
                                <h3 className="expertise-title mb-3">
                                    Instrumentation & Control Automation
                                </h3>

                                <p className="expertise-desc mb-6">
                                    We have a full-fledged instrumentation design and construction
                                    team that can undertake installation, testing and
                                    commissioning...
                                </p>

                                <a href="#" className="expertise-link">
                                    VIEW <span>›</span>
                                </a>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="expertise-card">
                            <img
                                src="/images/home/expertise-3.jpg"
                                alt="Electrical Systems"
                                className="w-full h-48 object-cover"
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

                                <a href="#" className="expertise-link">
                                    VIEW <span>›</span>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* ===== About Firenor Section ===== */}
            <section className="about-section">

                {/* LEFT */}
                <div className="about-left">
                    <div className="about-content">
                        <h2 className="section-title text-white">About Firenor</h2>
                        <div className="section-underline"></div>

                        <p className="about-text mt-4">
                            Firenor Middle East is a well-established engineering company with
                            its roots from the Scandinavian region, internationally recognized
                            for engineering excellence, Project Management skills, innovation,
                            and a strong safety culture. Building on this heritage, we deliver
                            reliable and integrated engineering solutions to clients across
                            the Oil & Gas, Industrial, Power, and Offshore sectors.
                        </p>

                        <p className="about-text">
                            Our core focus lies in Fire Protection & Safety and Industrial
                            Automation, supported by comprehensive capabilities in electrical,
                            instrumentation, and control systems. We specialize in designing
                            and delivering customized solutions that enhance operational
                            safety, reliability, and efficiency in complex and high-risk
                            environments.
                        </p>

                        <p className="about-text">
                            With over 25 years of regional experience and more than 350
                            successfully executed projects across the Middle East, India, and
                            Africa, Firenor Middle East has earned a reputation for quality,
                            technical excellence, and dependable project delivery.
                        </p>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="about-right">
                    <h3 className="services-title">Services offered.</h3>

                    <div className="service-item">
                        <FileTextOutlined /> Basic & Detailed Design
                    </div>
                    <div className="service-item">
                        <SettingOutlined /> Engineering
                    </div>
                    <div className="service-item">
                        <ProjectOutlined /> Project Management
                    </div>
                    <div className="service-item">
                        <ToolOutlined /> Field Installation
                    </div>
                    <div className="service-item">
                        <CheckCircleOutlined /> Commissioning and Start-up
                    </div>
                    <div className="service-item">
                        <FileTextOutlined /> Customer Training
                    </div>
                    <div className="service-item">
                        <FileTextOutlined /> Documentation
                    </div>
                    <div className="service-item">
                        <ProjectOutlined /> After Project Support
                    </div>
                    <div className="service-item">
                        <SettingOutlined /> Annual Maintenance Contracts
                    </div>
                    <div className="service-item">
                        <SettingOutlined /> Product & Control System Solutions
                    </div>
                    <div className="service-item">
                        <ToolOutlined /> Control Panel Assy
                    </div>
                </div>
            </section>
            {/* ===== Trusted Clients Section ===== */}
            <section className="py-16 bg-white">
                <div className="container-main">

                    {/* Header */}
                    <div className="clients-header">
                        <div>
                            <h2 className="clients-title">
                                Trusted by Industry Leaders & Clients
                            </h2>
                            <div className="clients-underline"></div>
                        </div>

                        <Link to='/clients' className="view-all-btn">View All</Link>
                    </div>

                    {/* Logos */}
                    <div className="clients-grid">
                        <div className="client-logo">
                            <img src="/images/clients/client-1.png" alt="Client 1" />
                        </div>
                        <div className="client-logo">
                            <img src="/images/clients/client-2.png" alt="Client 2" />
                        </div>
                        <div className="client-logo">
                            <img src="/images/clients/client-3.png" alt="Client 3" />
                        </div>
                        <div className="client-logo">
                            <img src="/images/clients/client-4.png" alt="Client 4" />
                        </div>
                        <div className="client-logo">
                            <img src="/images/clients/client-5.png" alt="Client 5" />
                        </div>
                        <div className="client-logo">
                            <img src="/images/clients/client-6.png" alt="Client 6" />
                        </div>
                    </div>

                </div>
            </section>


            {/* ===== Core Strengths ===== */}
            <section className="py-16 bg-white">
                <div className="container-main">
                    <div className="">
                        <h2 className="core-section-title">
                            Explore our core strengths
                        </h2>
                        <div className="core-underline"></div>

                        {/* Grid */}
                        <div className="flex mt-8">

                            {/* Left info */}
                            <div className="core-card core-info basis-[50%]">
                                <h3>We are energy</h3>
                                <p>
                                    Over 25 years experience & knowledge of international
                                    industrial systems, dedicated to provide the best
                                    economical solutions.
                                </p>
                            </div>

                            {/* Right image */}
                            <div className="core-card basis-[50%]">
                                <img src="/images/home/core-1.jpg" alt="" />
                                <div className="core-arrow">
                                    <ArrowRightOutlined />
                                </div>
                            </div>
                        </div>

                        {/* Bottom images */}
                        <div className="core-bottom flex">
                            <div className="core-card basis-[40%]">
                                <img src="/images/home/core-2.jpg" alt="" />
                                <div className="core-arrow">
                                    <ArrowRightOutlined />
                                </div>
                            </div>

                            <div className="core-card basis-[30%]">
                                <img src="/images/home/core-3.jpg" alt="" />
                                <div className="core-arrow">
                                    <ArrowRightOutlined />
                                </div>
                            </div>

                            <div className="core-card basis-[30%]">
                                <img src="/images/home/core-4.jpg" alt="" />
                                <div className="core-arrow">
                                    <ArrowRightOutlined />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ===== Certifications ===== */}
                    <div className="cert-section">
                        <h3 className="cert-title">Our Certifications</h3>

                        <p className="cert-desc">
                            Our certifications demonstrate our adherence to recognized
                            industry standards, ensuring reliable, safe, and compliant
                            solutions for our clients.
                        </p>

                        <p className="text-[#43494E] text-[22px]">
                            NEBOSH, BS 6387, IEC 60331, EN 50200, CE, FM, UL, DNV, BV, IMO, NFPA
                        </p>

                        <button className="cert-btn mt-5">Contact us</button>
                    </div>
                </div>
            </section>

        </>

    );
};

export default Home;
