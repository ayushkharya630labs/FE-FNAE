import React from 'react'
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageHero from "../../components/PageHero/PageHero";

const BusinessStream = () => {
  return (
    <>
            {/* ================= HERO ================= */}
            <PageHero
                breadcrumb="Home"
                current="Business Stream"
                title="Business Stream"
                description="lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit auctor dui, sed efficitur ligula. Sed at nunc a enim efficitur efficitur. Donec in odio ac nisi efficitur commodo."
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
        duration: 0.6,
    }}
    whileHover={{
        y: -8,
    }}
>
                            <img
                                src="/images/core-strengths/strengths-1.jpg"
                                alt="Fire Protection"
                                className="w-full h-48 object-cover"
                            />

                            <div className="p-6">
                                <h3 className="expertise-title mb-3">
                                   Deluge Systems, Multi Zone
                                </h3>

                                <p className="expertise-desc mb-6">
                                   The Firenor multi zone deluge skid system offers exceptional fire protection for high risk areas where rapid fire spread is a potential scenario, by allowing quick discharge of water with or without f...
                                </p>

                                <Link
                                    to="/business-stream/deluge-systems-multi-zone"
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
        duration: 0.6,
    }}
    whileHover={{
        y: -8,
    }}
>
                            <img
                                src="/images/core-strengths/strengths-1.jpg"
                                alt="Instrumentation"
                                className="w-full h-48 object-cover"
                            />

                            <div className="p-6">
                                <h3 className="expertise-title mb-3">
                                    Deluge Systems, Single Zone
                                </h3>

                                <p className="expertise-desc mb-6">
                                    A Deck Integrated Fire Fighting (DIFF) system is an effective fire suppression system that is normally the primary firefighting system on a helideck.
                                </p>

                                <Link
                                    to="/business-stream/deluge-systems-single-zone"
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
        duration: 0.6,
    }}
    whileHover={{
        y: -8,
    }}
>
                            <img
                                src="/images/core-strengths/strengths-1.jpg"
                                alt="Electrical Systems"
                                className="w-full h-48 object-cover"
                            />

                            <div className="p-6">
                                <h3 className="expertise-title mb-3">
                                    DIFF Systems
                                </h3>

                                <p className="expertise-desc mb-6">
                                    A Deck Integrated Fire Fighting (DIFF) system is an effective fire suppression system that is normally the primary firefighting system on a helideck.
                                </p>

                                <Link
                                    to="/business-stream/diff-systems"
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
        duration: 0.6,
    }}
    whileHover={{
        y: -8,
    }}
>
                            <img
                                src="/images/core-strengths/strengths-1.jpg"
                                alt="Electrical Systems"
                                className="w-full h-48 object-cover"
                            />

                            <div className="p-6">
                                <h3 className="expertise-title mb-3">
                                    Standalone DIFF
                                </h3>

                                <p className="expertise-desc mb-6">
                                   A Deck Integrated Fire Fighting (DIFF) system is an effective fire suppression system that is normally the primary firefighting system on a helideck.
                                </p>

                                <Link
                                    to="/business-stream/standalone-diff"
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
        duration: 0.6,
    }}
    whileHover={{
        y: -8,
    }}
>
                            <img
                                src="/images/core-strengths/strengths-1.jpg"
                                alt="Electrical Systems"
                                className="w-full h-48 object-cover"
                            />

                            <div className="p-6">
                                <h3 className="expertise-title mb-3">
                                    Monitor System
                                </h3>

                                <p className="expertise-desc mb-6">
                                    A monitor system is a fast acting fire protection system used primarily to protect against rapid fire spread in high risk areas.
                                </p>

                                <Link
                                    to="/business-stream/monitor-system"
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
        duration: 0.6,
    }}
    whileHover={{
        y: -8,
    }}
>
                            <img
                                src="/images/core-strengths/strengths-1.jpg"
                                alt="Electrical Systems"
                                className="w-full h-48 object-cover"
                            />

                            <div className="p-6">
                                <h3 className="expertise-title mb-3">
                                    Standalone Compressed Air Foam Systems (CAFS)
                                </h3>

                                <p className="expertise-desc mb-6">
                                    The purpose of a foam extinguishing system is to separate burning liquid from oxygen by covering the liquid, resulting in suppression of the combustion.
                                </p>

                                <Link
                                    to="/business-stream/standalone-cafs"
                                    className="expertise-link"
                                >
                                    VIEW <span>›</span>
                                </Link>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </motion.section>
        </>
  )
}

export default BusinessStream