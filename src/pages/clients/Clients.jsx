import React from "react";
import PageHero from "../../components/PageHero/PageHero";

const Clients = () => {
    return (
        <>
            <PageHero
                breadcrumb="Home"
                current="Clients"
                title="Our Clients"
                description="Trusted by clients across industries, we have delivered over 350 projects with a strong focus on safety, quality, and compliance."
                leftBg="/images/home/hero-left.jpg"
                rightBg="/images/clients/clients-bg.jpg"
            />
            <section className="py-12">
                <div className="container-main">
                     <h2 className="clients-title text-center mb-4">
                                Clients
                            </h2>
                    <div className="clients-grid my-2 mx-10">
                        <div className="client-logo">
                            <img src="/images/clients/client-1.png" alt="Client 1" />
                        </div>
                        <div className="client-logo">
                            <img src="/images/clients/client-2.png" alt="Client 2" />
                        </div>
                        <div className="client-logo">
                            <img src="/images/clients/client-3.png" alt="Client 3" />
                        </div>
                        <div className="client-logo">
                            <img src="/images/clients/client-4.png" alt="Client 4" />
                        </div>
                        <div className="client-logo">
                            <img src="/images/clients/client-5.png" alt="Client 5" />
                        </div>
                        <div className="client-logo">
                            <img src="/images/clients/client-6.png" alt="Client 6" />
                        </div>
                    </div>
                    <div className="clients-grid my-2 mx-10">
                        <div className="client-logo">
                            <img src="/images/clients/client-3.png" alt="Client 1" />
                        </div>
                        <div className="client-logo">
                            <img src="/images/clients/client-6.png" alt="Client 2" />
                        </div>
                        <div className="client-logo">
                            <img src="/images/clients/client-1.png" alt="Client 3" />
                        </div>
                        <div className="client-logo">
                            <img src="/images/clients/client-2.png" alt="Client 4" />
                        </div>
                        <div className="client-logo">
                            <img src="/images/clients/client-4.png" alt="Client 5" />
                        </div>
                        <div className="client-logo">
                            <img src="/images/clients/client-5.png" alt="Client 6" />
                        </div>
                    </div>
                    <div className="clients-grid mx-10">
                        <div className="client-logo">
                            <img src="/images/clients/client-6.png" alt="Client 1" />
                        </div>
                        <div className="client-logo">
                            <img src="/images/clients/client-5.png" alt="Client 2" />
                        </div>
                        <div className="client-logo">
                            <img src="/images/clients/client-4.png" alt="Client 3" />
                        </div>
                        <div className="client-logo">
                            <img src="/images/clients/client-3.png" alt="Client 4" />
                        </div>
                        <div className="client-logo">
                            <img src="/images/clients/client-1.png" alt="Client 5" />
                        </div>
                        <div className="client-logo">
                            <img src="/images/clients/client-2.png" alt="Client 6" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Clients