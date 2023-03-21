import React, { Component } from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css/bundle';
import Link from 'next/link';

class BlogSlider extends Component {

    render() {

        return (
            <section className="blog-area pt-120 fix" style={{ backgroundImage:`url(${'assets/img/blog/blog-bg-1.jpg'})`}}>
                <div className="container pb-120">
                    <div className="blog-border">
                        <div className='row'>
                            <div className='col-xl-4'>
                                <div className="blog-text pt-60" data-aos="zoom-in">
                                    <div className="section-title-wrapper pr-25 mb-50">
                                        <h5 className="section-subtitle mb-20">recent blog posts</h5>
                                        <h2 className="section-title mb-35">Latest News & Articles</h2>
                                        <p className="pr-50">Stay Ahead of the Curve: The Latest Insights on Technology and the Workplace to read our blogs.</p>
                                    </div>
                                    <div className="kblog-arrow">
                                        <div className="blog-button-prev slide-prev"><i className="far fa-long-arrow-left"></i></div>
                                        <div className="blog-button-next slide-next"><i className="far fa-long-arrow-right"></i></div> 
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-8'>
                                <div className="blog-active swiper-container">
                                    <div className="swiper-wrapper">
                                        <Swiper
                                            modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
                                            spaceBetween={30}
                                            slidesPerView={1}
                                            autoplaydisableoninteraction={"false"}
                                            loop={true}
                                            breakpoints={{
                                                480: {
                                                    slidesPerView: 1,
                                                },
                                                576: {
                                                    slidesPerView: 1,
                                                },
                                                768: {
                                                    slidesPerView: 2,
                                                },
                                                1200: {
                                                    slidesPerView: 2,
                                                },
                                                1400: {
                                                    slidesPerView: 3
                                                }
                                            }}
                                            autoplay= {{
                                                delay: 3000,
                                                disableOnInteraction: true
                                            }}
                                            navigation={{
                                                clickable: true,
                                                nextEl: '.blog-button-next',
                                                prevEl: '.blog-button-prev',
                                        }}
                                        >
                                        <SwiperSlide>
                                            <div className="kblog swiper-slides">
                                                <div className="kblog-img">
                                                    <a href="https://harmanpuri.medium.com/how-to-store-your-million-dollar-nfts-safely-decentralized-storage-is-your-answer-445eb7460dde" target="_blank"><img src="assets/img/img22.jpg" className="img-fluid" alt="blog-img"/></a>
                                                    <span>20 May</span>
                                                </div>
                                                <div className="kblog-text">
                                                    {/* <div className="kblog-meta">
                                                        <Link href="/blog-details"><a><i className="fal fa-user-circle"></i> by Admin</a></Link>
                                                        <Link href="/blog-details"><a><i className="fal fa-comments"></i> 2 Comments</a></Link>
                                                    </div> */}
                                                    <h3 className="kblog-text-title mb-20">
                                                        <a href="https://harmanpuri.medium.com/how-to-store-your-million-dollar-nfts-safely-decentralized-storage-is-your-answer-445eb7460dde" target="_blank">HOW TO STORE YOUR MILLION-DOLLAR NFTS SAFELY?</a>
                                                    </h3>
                                                    <div className="kblog-text-link">
                                                        <a href="https://harmanpuri.medium.com/how-to-store-your-million-dollar-nfts-safely-decentralized-storage-is-your-answer-445eb7460dde" target="_blank">Read more <i className="far fa-chevron-right"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <div className="kblog swiper-slides">
                                                <div className="kblog-img">                                                    
                                                    <a href="https://blog.airavatbot.io/harmony-one-and-cross-chain-interoperability-1205d7dcdc62" target="_blank"><img src="assets/img/img23.jpg" className="img-fluid" alt="blog-img"/></a>
                                                    <span>21 May</span>
                                                </div>
                                                <div className="kblog-text">
                                                    {/* <div className="kblog-meta">
                                                        <Link href="/blog-details"><a><i className="fal fa-user-circle"></i> by Admin</a></Link>
                                                        <Link href="/blog-details"><a><i className="fal fa-comments"></i> 2 Comments</a></Link>
                                                    </div> */}
                                                    <h3 className="kblog-text-title mb-20">
                                                        <a href="https://blog.airavatbot.io/harmony-one-and-cross-chain-interoperability-1205d7dcdc62" target="_blank">HARMONY (ONE) AND CROSS-CHAIN INTEROPERABILITY</a>
                                                    </h3>
                                                    <div className="kblog-text-link">
                                                        <a href="https://blog.airavatbot.io/harmony-one-and-cross-chain-interoperability-1205d7dcdc62" target="_blank">Read more <i className="far fa-chevron-right"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <div className="kblog swiper-slides">
                                                <div className="kblog-img">
                                                    <a href="https://medium.com/capitalfinance/all-about-nfts-in-defi-f2d1d9866f61" target="_blank"><img src="assets/img/img24.jpg" className="img-fluid" alt="blog-img"/></a>
                                                    <span>22 May</span>
                                                </div>
                                                <div className="kblog-text">
                                                    {/* <div className="kblog-meta">
                                                        <Link href="/blog-details"><a><i className="fal fa-user-circle"></i> by Admin</a></Link>
                                                        <Link href="/blog-details"><a><i className="fal fa-comments"></i> 2 Comments</a></Link>
                                                    </div> */}
                                                    <h3 className="kblog-text-title mb-20">
                                                        <a href="https://medium.com/capitalfinance/all-about-nfts-in-defi-f2d1d9866f61" target="_blank">ALL ABOUT NFTS IN DEFI, NFTs are bridging the gap between real-life</a>
                                                    </h3>
                                                    <div className="kblog-text-link">
                                                        
                                                        <a href="https://medium.com/capitalfinance/all-about-nfts-in-defi-f2d1d9866f61" target="_blank">Read more <i className="far fa-chevron-right"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        
                                        </Swiper>
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

export default BlogSlider;