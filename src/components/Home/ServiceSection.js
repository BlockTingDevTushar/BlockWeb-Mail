import React, { Component } from 'react';
import Link from 'next/link';

class Service extends Component {

    render() {

        return (
            // style={{ backgroundImage:`url(${'assets/img/img3.jpg'})`}}
            <section className="service-area pt-120 pb-130">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-xxl-5 col-lg-6">
                            <div className="kservice-text mb-50" data-aos="fade-right" data-aos-duration="1000">
                                <h5 className="kservice-text-subtitle mb-15">SERVICES WE ARE OFFERING</h5>
                                <h4 className="kservice-text-title mb-40">BLOCKCHAIN, DEFI, OR NFTS - THE VIRAL THEY ARE, THE BIGGER THEY GET AND WE MAKE IT HAPPEN</h4>
                                <p className="mb-45">BlockTing is a team of experts that help devise the perfect marketing plan for your Blockchain and DeFi product. What makes us different is our deep insight into the Blockchain space and belief in the technology.</p>
                                {/* <div className="kservice-author">
                                    <div className="kservice-author-img mr-30">
                                        <img src="assets/img/service/service-author.png" className="img-fluid" alt="author-img"/>
                                    </div>
                                    <div className="kservice-author-sign">
                                        <span>Jessica Brown</span>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        <div className="col-xxl-6 col-lg-6">
                            <div className="row custom-mar-20" data-aos="fade-down" data-aos-duration="1000">
                                <div className="col-sm-6 custom-pad-20">
                                    <div className="kservice text-center mb-20">
                                        <div className="kservice-icon">
                                            <i className="flaticon-analytics"></i>
                                        </div>
                                        <div className="kservice-content">
                                            <h5 className="kservice-content-title"><Link href="/service-details"><a>Content <br/>Marketing</a></Link></h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 custom-pad-20">
                                    <div className="kservice text-center mb-20">
                                        <div className="kservice-icon">
                                            <i className="flaticon-marketing"></i>
                                        </div>
                                        <div className="kservice-content">
                                            <h5 className="kservice-content-title"><Link href="/service-details"><a>Blockchain <br/>Advertisement</a></Link></h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 custom-pad-20">
                                    <div className="kservice text-center mb-20">
                                        <div className="kservice-icon">
                                            <i className="flaticon-profile"></i>
                                        </div>
                                        <div className="kservice-content">
                                            <h5 className="kservice-content-title"><Link href="/service-details"><a>Defi &<br/>Exchange</a></Link></h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 custom-pad-20">
                                    <div className="kservice text-center mb-20">
                                        <div className="kservice-icon">
                                            <i className="flaticon-digital-marketing"></i>
                                        </div>
                                        <div className="kservice-content">
                                            <h5 className="kservice-content-title"><Link href="/service-details"><a>Influencer <br/>marketing</a></Link></h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 custom-pad-20">
                                    <div className="kservice text-center mb-20">
                                        <div className="kservice-icon">
                                            <i className="flaticon-profile"></i>
                                        </div>
                                        <div className="kservice-content">
                                            <h5 className="kservice-content-title"><Link href="/service-details"><a>Growth <br/>Hacking</a></Link></h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 custom-pad-20">
                                    <div className="kservice text-center mb-20">
                                        <div className="kservice-icon">
                                            <i className="flaticon-website"></i>
                                        </div>
                                        <div className="kservice-content">
                                            <h5 className="kservice-content-title"><Link href="/service-details"><a>Community <br/>marketing</a></Link></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Service;