import React from 'react'
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageHero from "../../components/PageHero/PageHero";

const CoreStrengths = () => {
    return (
        <>
            {/* ================= HERO ================= */}
            <PageHero
                breadcrumb="Home"
                current="Core Strengths"
                title="Core Strengths"
                description="Firenor Middle-East provides engineering, production, installation, and maintenance of advanced firefighting systems, ensuring safety and reliability for global energy, oil, gas, and renewable projects."
                leftBg="/images/home/hero-right.jpg"
                rightBg="/images/core-strengths/core-strengths-hero.png"
            />

            {/* ================= SCOPE OF WORK ================= */}
            <motion.section
                className="py-16 bg-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.8 }}
            >
                <div className="container-main">

                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        {/* Card 1 */}
                        <motion.div
                            className="expertise-card"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.7
                            }}
                            whileHover={{
                                y: -8
                            }}
                        >
                            <img
                                src="/images/core-strengths/strengths-1.jpg"
                                alt="Fire Protection"
                                className="w-full h-48 object-cover"
                            />

                            <div className="p-6">
                                <h3 className="expertise-title mb-3">
                                    Project Management
                                </h3>

                                <p className="expertise-desc mb-6">
                                    Project management office (PMO) defines and maintains standards for project management within the organization.
                                </p>

                                <Link
                                    to="/core-strengths/project-management"
                                    className="expertise-link"
                                >
                                    VIEW <span>›</span>
                                </Link>
                            </div>
                        </motion.div>

                        {/* Card 2 */}
                        <motion.div
                            className="expertise-card"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.7
                            }}
                            whileHover={{
                                y: -8
                            }}
                        >
                            <img
                                src="/images/core-strengths/strengths-2.jpg"
                                alt="Instrumentation"
                                className="w-full h-48 object-cover"
                            />

                            <div className="p-6">
                                <h3 className="expertise-title mb-3">
                                    Engineering
                                </h3>

                                <p className="expertise-desc mb-6">
                                    Firenor can take full responsibility for designing and delivery of detection and firefighting equipment. Engineering can be provided independently.
                                </p>

                                <Link
                                    to="/core-strengths/engineering"
                                    className="expertise-link"
                                >
                                    VIEW <span>›</span>
                                </Link>
                            </div>
                        </motion.div>

                        {/* Card 3 */}
                        <motion.div
                            className="expertise-card"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.7
                            }}
                            whileHover={{
                                y: -8
                            }}
                        >
                            <img
                                src="/images/core-strengths/strengths-3.png"
                                alt="Electrical Systems"
                                className="w-full h-48 object-cover"
                            />

                            <div className="p-6">
                                <h3 className="expertise-title mb-3">
                                    Production
                                </h3>

                                <p className="expertise-desc mb-6">
                                    The exceptional quality of our equipment is driven by highly skilled people who have many years of experience in this field
                                </p>

                                <Link
                                    to="/core-strengths/production"
                                    className="expertise-link"
                                >
                                    VIEW <span>›</span>
                                </Link>
                            </div>
                        </motion.div>
                        {/* Card 4 */}
                        <motion.div
                            className="expertise-card"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.7
                            }}
                            whileHover={{
                                y: -8
                            }}
                        >
                            <img
                                src="/images/core-strengths/strengths-4.png"
                                alt="Electrical Systems"
                                className="w-full h-48 object-cover"
                            />

                            <div className="p-6">
                                <h3 className="expertise-title mb-3">
                                    Testing
                                </h3>

                                <p className="expertise-desc mb-6">
                                    Firenor carries out a variety of tests during production of the equipment. For commissioning or periodic testing transportable test equipment are available.
                                </p>

                                <Link
                                    to="/core-strengths/testing"
                                    className="expertise-link"
                                >
                                    VIEW <span>›</span>
                                </Link>
                            </div>
                        </motion.div>
                        {/* Card 5 */}
                        <motion.div
                            className="expertise-card"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.7
                            }}
                            whileHover={{
                                y: -8
                            }}
                        >
                            <img
                                src="/images/core-strengths/strengths-5.png"
                                alt="Electrical Systems"
                                className="w-full h-48 object-cover"
                            />

                            <div className="p-6">
                                <h3 className="expertise-title mb-3">
                                    Installation & Commissioning
                                </h3>

                                <p className="expertise-desc mb-6">
                                    Firenor can provide personnel resources who were involved in the project life cycle to assist during installation and commissioning.
                                </p>

                                <Link
                                    to="/core-strengths/installation-commissioning"
                                    className="expertise-link"
                                >
                                    VIEW <span>›</span>
                                </Link>
                            </div>
                        </motion.div>
                        {/* Card 6 */}
                        <motion.div
                            className="expertise-card"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.7
                            }}
                            whileHover={{
                                y: -8
                            }}
                        >
                            <img
                                src="/images/core-strengths/strengths-6.png"
                                alt="Electrical Systems"
                                className="w-full h-48 object-cover"
                            />

                            <div className="p-6">
                                <h3 className="expertise-title mb-3">
                                    Maintenance
                                </h3>

                                <p className="expertise-desc mb-6">
                                    To ensure that the equipment will remain functional in the event of an emergency situation, maintenance inspections must be carried out at regular intervals.
                                </p>

                                <Link
                                    to="/core-strengths/maintenance"
                                    className="expertise-link"
                                >
                                    VIEW <span>›</span>
                                </Link>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </motion.section >
        </>
    )
}

export default CoreStrengths