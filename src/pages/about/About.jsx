import PageHero from "../../components/PageHero/PageHero";

const About = () => {
    return (
        <>
            {/* ================= ABOUT HERO ================= */}
            <PageHero
                breadcrumb="Home"
                current="About Us"
                title="About Us"
                description="Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s..."
                leftBg="/images/home/hero-left.jpg"
                rightBg="/images/about/about-hero.jpg"
            />

            {/* ================= OUR STORY ================= */}
            <section className="bg-white mt-16">
                <div className="container-main py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Left text */}
                    <div>
                        <h2 className="section-title mb-2">Our Story</h2>
                        <div className="section-underline mb-6"></div>

                        <p className="text-sm text-gray-600 leading-relaxed mb-4">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when an unknown
                            printer took a galley of type and scrambled it to make a
                            type specimen book.
                        </p>

                        <p className="text-sm text-gray-600 leading-relaxed">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s.
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
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when an unknown
                            printer took a galley of type and scrambled it to make a
                            type specimen book. Lorem Ipsum is simply dummy text of the
                            printing and typesetting industry.
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
