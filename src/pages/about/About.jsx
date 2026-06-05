import PageHero from "../../components/PageHero/PageHero";

const About = () => {
    return (
        <>
            {/* ================= ABOUT HERO ================= */}
            <PageHero
                breadcrumb="Home"
                current="About Us"
                title="About Us"
                description="Firenor is a Norwegian-based company with an international presence, delivering engineered fire protection and safety solutions to the energy, oil & gas, industrial, and renewable sectors since 1953."
                leftBg="/images/home/hero-right.jpg"
                rightBg="/images/about/about-hero.jpg"
            />

            {/* ================= OUR STORY ================= */}
            <section className="bg-white mt-16">
                <div className="grid grid-cols-1 lg:grid-cols-2">

                    {/* Left text */}
                    <div className="p-16 flex flex-col justify-center">
                        <h2 className="section-title mb-2">Our Story</h2>
                        <div className="section-underline mb-6"></div>

                        <p className="text-sm text-gray-600 leading-relaxed mb-4">
                            Founded in Norway in 1953, Firenor has built a strong reputation for delivering high-end engineered fire protection and safety systems to clients worldwide. With decades of industry experience, we help organizations mitigate risk through innovative, reliable, and standards-compliant fire safety solutions.
                        </p>

                        <p className="text-sm text-gray-600 leading-relaxed">
                            Our expertise spans the complete project lifecycle, from concept development and engineering design to manufacturing, testing, installation, commissioning, and long-term maintenance support. This integrated approach enables us to provide tailored solutions that meet the demanding requirements of industrial, energy, offshore, and infrastructure projects.

                        </p>
                    </div>

                    {/* Right image */}
                    <div>
                        <img
                            src="/images/about/story-1.jpg"
                            alt="Our Story"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Bottom split section */}
                <div className="grid grid-cols-1 lg:grid-cols-2">

                    {/* Image */}
                    <div>
                        <img
                            src="/images/about/story-2.jpg"
                            alt="Industry"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Teal content */}
                    <div className="bg-[#47A5AE] text-white p-16 flex items-center">
                        <p className="text-sm leading-relaxed max-w-xl">
                            Firenor designs, engineers, manufactures, and supplies comprehensive fire safety systems for projects in the energy, oil & gas, marine, industrial, and renewable sectors. Our portfolio includes gaseous suppression systems, sprinkler systems, foam systems, water mist systems, hydrants, utility stations, hose reels, and specialized firefighting solutions.
                            <br/>
                            By combining Norwegian engineering expertise with global project experience, we deliver reliable systems that protect people, assets, and operations in some of the world's most demanding environments.
                        </p>
                    </div>
                </div>
            </section>

            <section className="stats-section relative py-16 my-12">
                <div className="px-16">

                    {/* Stats */}
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
            </section>
        </>
    );
};

export default About;
