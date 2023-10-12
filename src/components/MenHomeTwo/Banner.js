import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick';
import BG1 from '../../assets/images/banner_slide01.png'
import BG2 from '../../assets/images/banner_slide02.png'
import BG3 from '../../assets/images/banner_slide03.png'

const Bannerslider = {
    responsive: [
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 4,
            },
        },
    ],
}

function Banner() {
    return (
        <>
            <section className="banner_section second_banner">
                <div className="social_media_side side_fixer">
                    <ul>
                        <li>
                            <a href="https://www.facebook.com/" target='_blank'>Facebook</a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/" target='_blank'>Instagram</a>
                        </li>
                        <li>
                            <a href="https://twitter.com/" target='_blank'>Twitter</a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/" target='_blank'>Youtube</a>
                        </li>
                    </ul>
                </div>
                <div className="timing_side side_fixer">
                    <ul>
                        <li>
                            <span>Mon - Fri : 8AM - 9PM </span>
                        </li>
                        <li>
                            <span>Sat - Sun : 8AM - 11PM</span>
                        </li>
                    </ul>
                </div>
                <div className="banner_slider" data-aos="fade-up" data-aos-duration={3000} data-aos-offset={0} >
                    <Slider className="" id="banner_slider" {...Bannerslider} arrows={false} slidesToShow={1} autoplay={true} autoplaySpeed={5000}>
                        <div className="item">
                            <div className="slider_block" style={{ backgroundImage: `url(${BG1})` }} >
                                <div className="ban_text ">
                                    <div className="inner_text">
                                        <span className="sub_text">Welcome to the restaurant</span>
                                        <h1>Steak &amp; BBQ restaurant</h1>
                                        <p className="lead">
                                            We Only Serve Real Steaks, The steak you will always remember.{" "}
                                        </p>
                                        <Link href="/menulist1" className="btn btn_primary">
                                            view our full menu
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="slider_block" style={{ backgroundImage: `url(${BG2})` }} >
                                <div className="ban_text ">
                                    <div className="inner_text">
                                        <span className="sub_text">Welcome to the restaurant</span>
                                        <h1>Best taste of Steak &amp; BBQ</h1>
                                        <p className="lead">
                                            A restaurant with Timeless &amp; Traditional taste.{" "}
                                        </p>
                                        <Link href="/menulist2" className="btn btn_primary">
                                            view our full menu
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="slider_block" style={{ backgroundImage: `url(${BG3})` }} >
                                <div className="ban_text">
                                    <div className="inner_text">
                                        <span className="sub_text">Welcome to the restaurant</span>
                                        <h1>Timeless &amp; Traditional taste</h1>
                                        <p className="lead">
                                            Authentic Tastes &amp; Authentic Atmosphere, Change your life
                                            with our steaks.{" "}
                                        </p>
                                        <Link href="/MenuList1" className="btn btn_primary">
                                            view our full menu
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
        </>
    )
}

export default Banner