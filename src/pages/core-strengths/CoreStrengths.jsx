import React from 'react'
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
                description="lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit auctor dui, sed efficitur ligula. Sed at nunc a enim efficitur efficitur. Donec in odio ac nisi efficitur commodo."
                leftBg="/images/home/hero-right.jpg"
                rightBg="/images/core-strengths/core-strengths-hero.png"
            />

            {/* ================= SCOPE OF WORK ================= */}
            <section className="py-16 bg-white">
                <div className="container-main">

                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        {/* Card 1 */}
                        <div className="expertise-card">
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
                        </div>

                        {/* Card 2 */}
                        <div className="expertise-card">
                            <img
                                src="/images/core-strengths/strengths-1.jpg"
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
                        </div>

                        {/* Card 3 */}
                        <div className="expertise-card">
                            <img
                                src="/images/core-strengths/strengths-1.jpg"
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
                        </div>
                        {/* Card 4 */}
                        <div className="expertise-card">
                            <img
                                src="/images/core-strengths/strengths-1.jpg"
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
                        </div>
                        {/* Card 5 */}
                        <div className="expertise-card">
                            <img
                                src="/images/core-strengths/strengths-1.jpg"
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
                        </div>
                        {/* Card 6 */}
                        <div className="expertise-card">
                            <img
                                src="/images/core-strengths/strengths-1.jpg"
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
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default CoreStrengths