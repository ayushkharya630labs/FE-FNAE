import { motion } from "framer-motion";
import PageHero from "../../components/PageHero/PageHero";

const About = () => {
    const locations = [
        {
            name: "USA",
            value: "120+ Projects",
            left: "24%",
            top: "42%",
        },
        {
            name: "GCC Countries",
            value: "200+ Projects",
            left: "60%",
            top: "40%",
        },
        {
            name: "India",
            value: "90+ Projects",
            left: "67%",
            top: "52%",
        },
        {
            name: "Middle East",
            value: "150+ Projects",
            left: "57%",
            top: "56%",
        },
        {
            name: "Africa",
            value: "75+ Projects",
            left: "53%",
            top: "76%",
        },
    ];

    return (
        <>
            {/* ================= ABOUT HERO ================= */}
            <PageHero
                breadcrumb="Home"
                current="About Us"
                title="About Us"
                description="Firenor Middle East is a well-established engineering company with its roots from the Scandinavian region, internationally recognized for engineering excellence, Project Management skills, innovation, and a strong safety culture. Building on this heritage, we deliver reliable and integrated engineering solutions to clients across the Oil & Gas, Industrial, Power, and Offshore sectors. "
                leftBg="/images/home/hero-right.jpg"
                rightBg="/images/about/about-hero.jpg"
            />

            {/* ================= OUR STORY ================= */}
            <motion.section
                className="bg-white mt-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.8 }}
            >
                <div className="grid grid-cols-1 lg:grid-cols-2">

                    {/* Left text */}
                    <motion.div
                        className="p-16 flex flex-col justify-center"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="section-title mb-2">Our Story</h2>
                        <div className="section-underline mb-6"></div>

                        <p className="text-sm text-gray-600 leading-relaxed mb-4">
                            Our core focus lies in Fire Protection & Safety and Industrial Automation, supported by comprehensive capabilities in electrical, instrumentation, and control systems. We specialize in designing and delivering customized solutions that enhance operational safety, reliability, and efficiency in complex and high-risk environments.
                        </p>
                    </motion.div>

                    {/* Right image */}
                    <motion.div
                        style={{ height: "58vh" }}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.15 }}
                    >
                        <motion.img
                            src="/images/about/story-1.jpg"
                            alt="Our Story"
                            className="w-full h-full object-cover"
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.4 }}
                        />
                    </motion.div>
                </div>

                {/* Bottom split section */}
                <div className="grid grid-cols-1 lg:grid-cols-2">

                    {/* Image */}
                    <motion.div
                        style={{ height: "58vh" }}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.img
                            src="/images/about/story-2.jpg"
                            alt="Industry"
                            className="w-full h-full object-cover"
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.4 }}
                        />
                    </motion.div>

                    {/* Teal content */}
                    <motion.div
                        className="bg-[#47A5AE] text-white p-16 flex items-center"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.15 }}
                    >
                        <p className="text-sm leading-relaxed max-w-xl">
                            With over 25 years of regional experience and more than 350 successfully executed projects across the Middle East, India, and Africa, Firenor Middle East has earned a reputation for quality, technical excellence, and dependable project delivery. Our solutions are driven by right engineering values and a customer-centric approach, ensuring long-term partnerships and sustainable value for our clients.
                        </p>
                    </motion.div>
                </div>
            </motion.section>

            {/* <section className="stats-section relative py-16 my-12">
                <div className="px-16">

                    <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-12">

                        <div>
                            <div className="text-5xl font-light text-gray-600">+25</div>
                            <div className="mt-2 text-sm text-gray-500">
                                Years of experience
                            </div>
                        </div>

                        <div>
                            <div className="text-5xl font-light text-gray-600">+350</div>
                            <div className="mt-2 text-sm text-gray-500">
                                Successful projects
                            </div>
                        </div>

                        <div>
                            <div className="text-5xl font-light text-gray-600">+150</div>
                            <div className="mt-2 text-sm text-gray-500">
                                Expert team
                            </div>
                        </div>

                    </div>
                </div>
            </section> */}

            {/* ================= GLOBAL PRESENCE ================= */}
            <motion.section
                className="py-20 bg-[#f8f8f8]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.8 }}
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-16">

                    {/* Heading */}
                    <motion.h2
                        className="section-title mb-2"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        Our Global Presence
                    </motion.h2>

                    {/* Map Image */}
                    <motion.div
                        className="flex justify-center mt-10"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.9,
                            delay: 0.15
                        }}
                    >
                        <motion.img
                            src="/images/about/map.png"
                            alt="Global Presence"
                            className="w-full max-w-[800px] h-auto object-contain"
                            whileHover={{
                                scale: 1.02
                            }}
                            transition={{
                                duration: 0.4
                            }}
                        />
                    </motion.div>

                </div>
            </motion.section>
        </>
    );
};

export default About;
