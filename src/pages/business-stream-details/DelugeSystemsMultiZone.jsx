import { Link } from "react-router-dom";
import PageHero from "../../components/PageHero/PageHero";
import { ArrowRightOutlined } from "@ant-design/icons";

const DelugeSystemsMultiZone = () => {
    const strengths = [
        {
            title: "Deluge Systems, Single Zone",
            image: "/images/core-strengths/strengths-1.jpg",
            link: "/business-stream/deluge-systems-single-zone",
        },
        {
            title: "DIFF Systems",
            image: "/images/core-strengths/strengths-1.jpg",
            link: "/business-stream/diff-systems",
        },
        {
            title: "Standalone DIFF",
            image: "/images/core-strengths/strengths-1.jpg",
            link: "/business-stream/standalone-diff",
        },
        {
            title: " Monitor System",
            image: "/images/core-strengths/strengths-1.jpg",
            link: "/business-stream/monitor-system",
        },
    ];
    return (
        <>
            <PageHero
                breadcrumb="Home / Business Stream"
                current="Deluge Systems, Multi Zone"
                title="Deluge Systems, Multi Zone"
                description="The Firenor multi zone deluge skid system offers exceptional fire protection for high risk areas where rapid fire spread is a potential scenario, by allowing quick discharge of water with or without foam in case of emergency. While this system is designed for high risk fire suppression, it is also excellent for cooling purposes, general area protection, and protection of high risk objects during a fire. Additionally, the design of this system can be customized to protect against pool fires by mixing foam into water at a precise flow."
                leftBg="/images/home/hero-right.jpg"
                rightBg="/images/core-strengths/maintenance/maintenance-hero.jpg"
            />

            <section className="py-16 bg-[#f4f4f4]">
                <div className="container-main">

                    {/* Overview */}
                    <div className="mb-16">
                        <h2 className="section-title mb-3">System Design</h2>

                        <p className="text-sm text-gray-600  max-w-5xl">
                            A deluge system consists of a network of dry pipework and open nozzles that is connected to a water supply through a normally closed on-off or a pressure regulating deluge valve. Every system standardly comes equipped with all necessary valves and instrumentation for operation, maintenance and testing purposes. The system can be customized to conform to any required safety integrity level and can be delivered full flow pre-tested. In addition to the Firenor standard design, the multi zone deluge system can be customized to meet specific project requirements. Customizations include deluge system piping on open frame or inside cabinet for environmental protection purposes, and the choice of pneumatic, hydraulic, or electrical signals for the release mechanism
                        </p>
                    </div>


                    <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">

                        <div>
                            <h2 className="section-title mb-3">
                                Verification
                            </h2>

                            <p className="text-sm text-gray-600  max-w-5xl">
                                All systems can be customized to comply with project-specific requirements and international standards such as CE, FM, UL, ASME, DIN, DNV, IMO, NFPA, and Norsok. Comprehensive documentation, certifications, third-party approvals, and test reports are available for tailor-made solutions.
                            </p>
                        </div>

                        <div>
                            <img
                                src="/images/core-strengths/project-management/service-img.jpg"
                                alt="Project Management"
                                className="w-full object-cover"
                            />
                        </div>

                    </div>
                </div>


                {/* Story */}
                <div className="grid grid-cols-1 lg:grid-cols-2 mb-20">

                    {/* Image */}
                    <div className="" style={{ height: "58vh" }}>
                        <img
                            src="/images/about/story-2.jpg"
                            alt="Industry"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Teal content */}
                    <div className="bg-[#47A5AE] text-white p-16 flex items-center">
                        <p className="text-sm leading-relaxed max-w-xl">
                            With over 25 years of regional experience and more than 350 successfully executed projects across the Middle East, India, and Africa, Firenor Middle East has earned a reputation for quality, technical excellence, and dependable project delivery. Our solutions are driven by right engineering values and a customer-centric approach, ensuring long-term partnerships and sustainable value for our clients.

                        </p>
                    </div>
                </div>

                <div className="container-main">

                    {/* Nozzles */}
                    <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">

                        <div>
                            <h2 className="section-title mb-3">
                                Nozzles
                            </h2>

                            <p className="text-sm text-gray-600  max-w-5xl">
                                Deluge skid nozzles can be supplied with the system and are available in options such as medium velocity, high velocity, and open sprinkler heads. Firenor can design the nozzle placement for such a system and will carry out all necessary hydraulic calculations before installation and delivery.
                            </p>
                        </div>

                        <div>
                            <img
                                src="/images/core-strengths/project-management/service-img.jpg"
                                alt="Project Management"
                                className="w-full object-cover"
                            />
                        </div>

                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        <div className="stats-section bg-gray-200 p-8 rounded shadow-sm relative overflow-hidden">

                            {/* Icon */}
                            <div className="mb-4">
                                <img src="/images/services/icons/icon-3.png" className='w-12' alt="" />
                            </div>

                            {/* Title */}
                            <h3 className="text-gray-800 font-medium mb-4">
                                Features
                            </h3>

                            {/* List */}
                            <ul className="list-disc marker:text-[#6C6D70] pl-5 space-y-2 text-sm text-gray-600">
                                <li>Outlets from 2- 12 inches</li>
                                <li>Regulating or non-regulating deluge valve</li>
                                <li>Flexible design</li>
                                <li>Compatible with various hazardous area classifications and regulations (ATEX, UL, CSA etc.)</li>
                                <li>Compatible with IEC 61508 for Safety Integrity Level 2 or 3 </li>
                                <li>Full-scale tests up to 35 000 LPM</li>
                                <li>Working environment friendly design</li>

                            </ul>

                            {/* Pattern overlay */}
                            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('/images/pattern.png')] bg-cover"></div>
                        </div>

                        <div className="stats-section bg-gray-200 p-8 rounded shadow-sm relative overflow-hidden">

                            {/* Icon */}
                            <div className="mb-4">
                                <img src="/images/services/icons/icon-4.png" className='w-12' alt="" />
                            </div>

                            {/* Title */}
                            <h3 className="text-gray-800 font-medium mb-4">
                                Material
                            </h3>

                            <p className="text-sm text-gray-600  max-w-5xl mb-3">Every Firenor system is available in the following materials: </p>
                            {/* List */}
                            <ul className="list-disc marker:text-[#6C6D70] pl-5 space-y-2 text-sm text-gray-600">
                                <li>Galvanized carbon steel</li>
                                <li>Copper nickel</li>
                                <li>Super duplex</li>
                                <li>Titanium</li>
                                <li>Duplex</li>
                                <li>SS316</li>
                                <li>6Mo</li>
                                <li>GRE</li>
                            </ul>

                            {/* Pattern overlay */}
                            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('/images/pattern.png')] bg-cover"></div>
                        </div>

                        <div className="stats-section bg-gray-200 p-8 rounded shadow-sm relative overflow-hidden">

                            {/* Icon */}
                            <div className="mb-4">
                                <img src="/images/services/icons/icon-5.png" className='w-12' alt="" />
                            </div>

                            {/* Title */}
                            <h3 className="text-gray-800 font-medium mb-4">
                                Documentation
                            </h3>
                            <p className="text-sm text-gray-600  max-w-5xl mb-3">The engineering department produces documentation relevant to all phases of the project. Documentation normally includes the following:</p>
                            {/* List */}
                            <ul className="list-disc marker:text-[#6C6D70] pl-5 space-y-2 text-sm text-gray-600">
                                <li>Quality plan</li>
                                <li>ITP</li>
                                <li>Drawings</li>
                                <li>Data sheets</li>
                                <li>Indexes</li>
                                <li>Procedures</li>
                                <li>Calculations</li>
                                <li>Certificates</li>
                                <li>Reports</li>
                                <li>User manual</li>
                                <li>MRB</li>
                            </ul>

                            {/* Pattern overlay */}
                            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('/images/pattern.png')] bg-cover"></div>
                        </div>

                    </div>

                    {/* Other Business Streams */}
                    <div className="mt-16">
                        <h2 className="section-title mb-8">
                            The Other Business Streams
                        </h2>

                        <div className="flex gap-5 overflow-x-auto pb-4">

                            {strengths.map((item, index) => (
                                <Link
                                    key={index}
                                    to={item.link}
                                    className="
                                    min-w-[235px]
                                    max-w-[235px]
                                    bg-white
                                    border
                                    border-[#dddddd]
                                    flex
                                    flex-col
                                    relative
                                    transition-all
                                    duration-300
                                    hover:border-[#c4122f]
                                    "
                                >

                                    {/* Image */}
                                    <div className="h-[120px] overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="relative h-[78px] px-4 flex items-center">

                                        {/* Red Corner Mark */}
                                        <span
                                            className="
                            absolute
                            top-0
                            left-0
                            w-[10px]
                            h-[10px]
                            border-l-[3px]
                            border-t-[3px]
                            border-[#C4122F]
                            "
                                        />

                                        {/* Title */}
                                        <h3
                                            className="
                                            text-[15px]
                                            text-[#404040]
                                            font-normal
                                            leading-[1.15]
                                            max-w-[135px]
                                        "
                                        >
                                            {item.title}
                                        </h3>

                                        <div
                                            className="
    absolute
    right-4
    top-1/2
    -translate-y-1/2
    w-[32px]
    h-[32px]
    rounded-full
    bg-[#C4122F]
    flex
    items-center
    justify-center
  "
                                        >
                                            <ArrowRightOutlined
                                                style={{
                                                    color: "#fff",
                                                    fontSize: "13px",
                                                    fontWeight: 400,
                                                }}
                                            />
                                        </div>

                                    </div>

                                </Link>
                            ))}

                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}

export default DelugeSystemsMultiZone