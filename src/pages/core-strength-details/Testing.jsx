import CoreStrengthCards from "./CoreStrengthCards";
import PageHero from "../../components/PageHero/PageHero";

const Testing = () => {
 
    return (
        <>
            <PageHero
                breadcrumb="Home / Core Strengths"
                current="Testing"
                title="Testing"
                description="Firenor designs, produces, assembles, tests, installs and performs commissioning on an enormous variety of high quality active firefighting systems for onshore, offshore, and marine industries"
                leftBg="/images/home/hero-right.jpg"
                rightBg="/images/core-strengths/strengths-4.png"
            />

            <section className="py-16 bg-[#f4f4f4]">
                <div className="container-main">

                    {/* Overview */}
                    <div className="mb-16">
                        <h2 className="section-title mb-3">Overview</h2>

                        <p className="text-sm text-gray-600  max-w-5xl">
                            As part of our quality assurance procedures, Firenor carries out a variety of tests during production of the equipment and prior to the delivery. Some of the tests are listed below, however Firenor can adopt its test procedures to any project specification.
                        </p>
                    </div>

                    {/* Core Services */}
                    <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">

                        <div>
                            <h2 className="section-title mb-3">
                                Testing & Quality Assurance
                            </h2>

                            <ul className="space-y-3 text-[15px] text-gray-600 leading-4 list-disc pl-5">
                                <li>Positive Material Identification</li>

                                <li>Welding Non-Destructive Tests</li>

                                <li>Pull Test</li>

                                <li>Painting Qualification Tests</li>

                                <li>Painting Destructive Tests</li>

                                <li>Insulation Resistance and Loop Test</li>

                                <li>Pressure Test</li>

                                <li>Assembly Leak Test</li>

                                <li>Function Test</li>

                                <li>Full Scale Test</li>

                                <li>Foam analyzes</li>

                                <li>Noise Test</li>
                            </ul>
                        </div>

                        <div style={{ height: "60vh" }}>
                            <img style={{ height: "100%"}}
                                src="/images/core-strengths/testing/img-1.png"
                                alt="Project Management"
                                className="w-full object-cover"
                            />
                        </div>

                    </div>
                </div>

                    {/* Core Strengths */}
                    <CoreStrengthCards currentPath="/core-strengths/testing" />


            </section>
        </>
    );
};

export default Testing;