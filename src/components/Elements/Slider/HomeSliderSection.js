import React, { Component } from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, } from 'swiper';
import { EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css/bundle';
import Link from 'next/link';

class HomeSlider extends Component {

    render() {

        return (
            <section className="slider-area fix position-relative">
                <div className="slider-active swiper-container">
                    <div className="swiper-wrapper">
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay]}
                            effect="fade"
                            spaceBetween={30}
                            slidesPerView={1}
                            autoplaydisableoninteraction={"false"}
                            loop={true}
                            breakpoints={{
                                768: {
                                    slidesPerView: 1
                                },
                                1200: {
                                    slidesPerView: 1,
                                }
                            }}
                           autoplay= {{
                               delay: 3000,
                               disableOnInteraction: true
                           }}
                            pagination={{ clickable: true }}
                        >
                        <SwiperSlide>
                            <div className="single-slider slider-height swiper-slides" data-swiper-autoplay="10000">
                                <div className="slide-bg" style={{ backgroundImage:`url(${'assets/img/img7.jpg'})`}}></div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="kslider z-index">
                                                <h5 className="kslider--subtitle mb-25" data-animation="fadeInUp" data-delay="0.3s">Welcome to BLOCKTING</h5>
                                                <h2 className="kslider--title mb-40" data-animation="fadeInUp" data-delay="0.5s">HUMANIZING BLOCKCHAIN<br/>AND DEFI</h2>
                                                <div className="kslider--btn" data-animation="fadeInUp" data-delay="0.7s">
                                                    <Link href="/service"><a className="theme-btn">Discover more</a></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="slide-shape shape-1"><img src="assets/img/slider/slider-shape-1.png" className="img-fluid" alt="shape-img"/></div>
                                <div className="slide-shape shape-2"><img src="assets/img/slider/slider-shape-2.png" className="img-fluid" alt="shape-img"/></div> */}
                            </div>
                        </SwiperSlide>

                        {/* <SwiperSlide>
                            <div className="single-slider slider-height swiper-slides" data-swiper-autoplay="10000">
                                <div className="slide-bg" style={{ backgroundImage:`url(${'assets/img/img16.jpg'})`}}></div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="kslider z-index">
                                                <h5 className="kslider--subtitle mb-25" data-animation="fadeInUp" data-delay="0.3s">Welcome to BLOCKTING</h5>
                                                <h2 className="kslider--title mb-40" data-animation="fadeInUp" data-delay="0.5s">HUMANIZING BLOCKCHAIN<br/>AND DEFI</h2>
                                                <div className="kslider--btn" data-animation="fadeInUp" data-delay="0.7s">
                                                    <Link href="/service"><a className="theme-btn">Discover more</a></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="slide-shape shape-1"><img src="assets/img/slider/slider-shape-1.png" className="img-fluid" alt="shape-img"/></div>
                                <div className="slide-shape shape-2"><img src="assets/img/slider/slider-shape-2.png" className="img-fluid" alt="shape-img"/></div>
                            </div>
                        </SwiperSlide> */}
{/* 
                        <SwiperSlide>
                            <div className="single-slider slider-height swiper-slides" data-swiper-autoplay="10000">
                                <div className="slide-bg" style={{ backgroundImage:`url(${'assets/img/img8.jpg'})`}}></div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="kslider z-index">
                                                <h5 className="kslider--subtitle mb-25" data-animation="fadeInUp" data-delay="0.3s">Welcome to BLOCKTING</h5>
                                                <h2 className="kslider--title mb-40" data-animation="fadeInUp" data-delay="0.5s">HUMANIZING BLOCKCHAIN<br/>AND DEFI</h2>
                                                <div className="kslider--btn" data-animation="fadeInUp" data-delay="0.7s">
                                                    <Link href="/service"><a className="theme-btn">Discover more</a></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="slide-shape shape-1"><img src="assets/img/slider/slider-shape-1.png" className="img-fluid" alt="shape-img"/></div>
                                <div className="slide-shape shape-2"><img src="assets/img/slider/slider-shape-2.png" className="img-fluid" alt="shape-img"/></div>
                            </div>
                        </SwiperSlide> */}
                        </Swiper>
                    </div>
                    
                    <div className="slider-paginations slide-dots"></div>
                </div>
            </section>
        );
    }
}

export default HomeSlider;