import React from 'react'
import { Link } from 'react-router-dom';
import BG1 from '../../assets/images/banner.png'

function Banner() {
    return (
        <>
            <section className="banner_section second_banner">
                <div className="banner_slider" data-aos="fade-up" data-aos-duration={3000} data-aos-offset={0} >
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
                    </div>
            </section>
        </>
    )
}

export default Banner