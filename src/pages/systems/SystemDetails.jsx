import { Link, useParams } from "react-router-dom";
import { systemsData } from "./systemsData";
import PageHero from "../../components/PageHero/PageHero";
import { ArrowRightOutlined } from "@ant-design/icons";

const SystemDetails = () => {
    const { slug } = useParams();

    const system =
        systemsData.find(item => item.slug === slug) ||
        systemsData[0];

    const strengths = systemsData.filter(
        item => item.slug !== slug
    );
    return (
        <>
            <PageHero
    breadcrumb="Home / Systems"
    current={system.hero.title}
    title={system.hero.title}
    description={system.hero.description}
    leftBg="/images/home/hero-right.jpg"
    rightBg={system.hero.image}
/>

            <section className="py-16 bg-[#f4f4f4]">
                <div className="container-main">

                    {/* Overview */}
                    <div className="mb-16">
                        <h2 className="section-title mb-3">System Design</h2>

                        <p className="text-sm text-gray-600 max-w-5xl">
                            {system.systemDesign}
                        </p>
                    </div>


                    <div className="flex mb-20 items-stretch">

                        {/* Left */}
                        <div className="basis-1/2 p-8 bg-[#47A5AE] flex flex-col justify-center">
                            <h2 className="section-title text-white mb-4">
                                {system.verification.title}
                            </h2>

                            <p className="text-sm text-white max-w-xl leading-relaxed">
                                {system.verification.description}
                            </p>
                        </div>

                        {/* Right */}
                        <div className="basis-1/2">
                            <img
                                src={system.verification.image}
                                alt="Project Management"
                                className="w-full h-full object-cover"
                            />
                        </div>

                    </div>

                    {/* Foam Supply */}
                    <div className="mb-16">
                        <h2 className="section-title mb-3">
                            {system.foamSupply.title}
                        </h2>

                        <p className="text-sm text-gray-600 max-w-5xl mb-2">
                            {system.foamSupply.description}
                        </p>

                        <ul className="list-disc pl-5 text-[14px] text-[#6C6D70]">
                            {system.foamSupply.items.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Nozzles */}
                    {system.nozzles && (
                        <div className="mb-16">
                            <h2 className="section-title mb-3">
                                Nozzles
                            </h2>

                            <p className="text-sm text-gray-600 max-w-5xl">
                                {system.nozzles}
                            </p>
                        </div>
                    )}

                    {/* Features */}
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
                                {system.features.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
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
                                {system.materials.title}
                            </h3>

                            <p className="text-sm text-gray-600 max-w-5xl mb-3">
                                {system.materials.description}
                            </p>

                            <ul className="list-disc marker:text-[#6C6D70] pl-5 space-y-2 text-sm text-gray-600">
                                {system.materials.items.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>

                            {/* Pattern overlay */}
                            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('/images/pattern.png')] bg-cover"></div>
                        </div>

                        <div className="stats-section bg-gray-200 p-8 rounded shadow-sm relative overflow-hidden">

                            {/* Icon */}
                            <div className="mb-4">
                                <img src="/images/services/icons/icon-5.png" className='w-12' alt="" />
                            </div>

                            <h3 className="text-gray-800 font-medium mb-4">
                                {system.documentation.title}
                            </h3>

                            <p className="text-sm text-gray-600 max-w-5xl mb-3">
                                {system.documentation.description}
                            </p>

                            <ul className="list-disc marker:text-[#6C6D70] pl-5 space-y-2 text-sm text-gray-600">
                                {system.documentation.items.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>

                            {/* Pattern overlay */}
                            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('/images/pattern.png')] bg-cover"></div>
                        </div>

                    </div>

                </div>
                {/* Other Business Streams */}
                <div className="mt-16">
                    <h2 className="section-title mb-8 px-24">
                        The Other Business Streams
                    </h2>

                    <div className="flex gap-5 overflow-x-auto pb-4">

                        {strengths.map((item, index) => (
                            <Link
                                key={index}
                                to={`/systems/${item.slug}`}
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
                                        src={item.cardImage}
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


            </section>
        </>
    )
}

export default SystemDetails