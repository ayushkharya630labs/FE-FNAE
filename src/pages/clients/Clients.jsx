import React from "react";
import { motion } from "framer-motion";
import PageHero from "../../components/PageHero/PageHero";

const Clients = () => {
    const clients = [
        "/images/clients/client-1.png",
        "/images/clients/client-2.png",
        "/images/clients/client-3.png",
        "/images/clients/client-4.png",
        "/images/clients/client-5.png",
        "/images/clients/client-6.png",

        "/images/clients/client-3.png",
        "/images/clients/client-6.png",
        "/images/clients/client-1.png",
        "/images/clients/client-2.png",
        "/images/clients/client-4.png",
        "/images/clients/client-5.png",

        "/images/clients/client-6.png",
        "/images/clients/client-5.png",
        "/images/clients/client-4.png",
        "/images/clients/client-3.png",
        "/images/clients/client-1.png",
        "/images/clients/client-2.png",
    ];

    return (
        <>
            <PageHero
                breadcrumb="Home"
                current="Clients"
                title="Our Clients"
                description="Trusted by clients across industries, we have delivered over 350 projects with a strong focus on safety, quality, and compliance."
                leftBg="/images/home/hero-right.jpg"
                rightBg="/images/clients/clients-bg.jpg"
            />

            <motion.section
                className="py-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="container-main">

                    <motion.h2
                        className="clients-title text-center mb-4"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        Clients
                    </motion.h2>

                    <div className="clients-grid mx-10">
                        {clients.map((logo, index) => (
                            <motion.div
                                key={index}
                                className="client-logo"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.05,
                                }}
                                whileHover={{
                                    y: -5,
                                    scale: 1.03,
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
        </>
    );
};

export default Clients;