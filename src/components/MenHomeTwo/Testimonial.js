import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Test01 from "../../assets/images/testmonial_01.png";
import Test02 from "../../assets/images/testmonial_02.png";
import Test03 from "../../assets/images/testmonial_03.png";

const Testslider = {
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
};

function Testimonial() {
    return (
        <>
            <section className="row_inner_am testimonial_section bg_black_textcher">
                <div className="container-fluid">
                    <div className="section_title text-center" data-aos="fade-up" data-aos-duration={1500} >
                        <span className="sub_text">Tasty words</span>
                        <h2>customer reviews</h2>
                    </div>
                    <div className="testimonial_wraper" data-aos="fade-in" data-aos-duration={1500} >
                        <Slider className="" id="testimonial_slider" {...Testslider} arrows={false} autoplay={true} autoplaySpeed={2000} >
                            <div className="item">
                                <div className="testimonial_inner">
                                    <div className="img">
                                        <img src={Test01} alt="img" />
                                    </div>
                                    <div className="text">
                                        <span className="quote">“</span>
                                        <div className="star">
                                            <span>
                                                <i className="icofont-star" />
                                            </span>
                                            <span>
                                                <i className="icofont-star" />
                                            </span>
                                            <span>
                                                <i className="icofont-star" />
                                            </span>
                                            <span>
                                                <i className="icofont-star" />
                                            </span>
                                            <span>
                                                <i className="icofont-star" />
                                            </span>
                                        </div>
                                        <h2>
                                        Game Day Grill made the tastiest eggs and rice ever, like a party in my mouth. The nice staff made us happy, and we left really full with big smiles, giving them 5 stars for being so great.
                                        </h2>
                                        <h3>
                                            Miles Janow,{" "}
                                            <span className="designation">via Carrier Pigeon</span>
                                        </h3>
                                        <span className="quote text-right d-block">”</span>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="testimonial_inner">
                                    <div className="img">
                                        <img src={Test02} alt="img" />
                                    </div>
                                    <div className="text">
                                        <span className="quote">“</span>
                                        <div className="star">
                                            <span>
                                                <i className="icofont-star" />
                                            </span>
                                            <span>
                                                <i className="icofont-star" />
                                            </span>
                                            <span>
                                                <i className="icofont-star" />
                                            </span>
                                            <span>
                                                <i className="icofont-star" />
                                            </span>
                                            <span>
                                                <i className="icofont-star" />
                                            </span>
                                        </div>
                                        <h2>
                                        This website is amazing! It is very easy to navigate in, and the design within the website adds a lot to to the feeling of the restaurant.
                                        </h2>
                                        <h3>
                                            Kenneth Adams,{" "}
                                            <span className="designation">via Trip Advisor</span>
                                        </h3>
                                        <span className="quote text-right d-block">”</span>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="testimonial_inner">
                                    <div className="img">
                                        <img src={Test03} alt="img" />
                                    </div>
                                    <div className="text">
                                        <span className="quote">“</span>
                                        <div className="star">
                                            <span>
                                                <i className="icofont-star" />
                                            </span>
                                            <span>
                                                <i className="icofont-star" />
                                            </span>
                                            <span>
                                                <i className="icofont-star" />
                                            </span>
                                            <span>
                                                <i className="icofont-star" />
                                            </span>
                                            <span>
                                                <i className="icofont-star" />
                                            </span>
                                            
                                        </div>
                                        <h2>
                                           Howdy! Game Day Grill's website deserves a big 5 stars. It's easy to use, the menu looks tasty, and ordering online is super quick. Y'all gotta visit for some great eats!
                                        </h2>
                                        <h3>
                                            Levi Benjamin Scott Stover {" "}
                                            <span className="designation">via Voicemail</span>
                                        </h3>
                                        <span className="quote text-right d-block">”</span>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                    <div className="text-center" data-aos="fade-in" data-aos-duration={1500} >
                        <Link to="/review" className="btn btn_primary">
                            more testimonials
                        </Link>
                    </div>
                </div>
            </section>
        </> 
    );
}

export default Testimonial;
