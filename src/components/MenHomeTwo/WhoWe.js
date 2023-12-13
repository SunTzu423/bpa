import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick';
import Icon01 from '../../assets/images/title_icon.png'
import gallery1 from '../../assets/images/gallery_01.png'
import gallery2 from '../../assets/images/gallery_02.png'
import gallery3 from '../../assets/images/gallery_03.png'
import gallery4 from '../../assets/images/gallery_04.png'
import gallery5 from '../../assets/images/gallery_05.png'
import gallery6 from '../../assets/images/gallery_06.png'
import gallery7 from '../../assets/images/gallery_07.png'
import gallery8 from '../../assets/images/gallery_08.png'

const Weslider = {
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

function WhoWe() {
    return (
        <>
            <div className="row_inner_am who_we_section who_version_two light_texchur">
                <div className="container">
                    <div className="section_title text-center" data-aos="fade-up" data-aos-duration={1500} >
                        <div className="icon">
                            <img src={Icon01} alt="img" />
                        </div>
                        <span className="sub_text">Who we are</span>
                        <h2>
                            A restaurant with Timeless &amp; Traditional taste <br />{" "}
                            
                            We Only Serve Real Steaks, <br />
                            Authentic Tastes &amp; Authentic Atmosphere, <br />
                            The steak you will always remember.{" "}
                            Let us <br /> change your life with our steaks.
                        </h2>
                    </div>
                </div>
                <div className="gallery_slider">
                    <Slider className="Slider-Who" id="gallery_flow_right" data-aos="fade-in" data-aos-duration={1500} {...Weslider} slidesToShow={11.5} arrows={false} autoplay={true} autoplaySpeed={1000}>
                        <div className="item">
                            <div className="img">
                                <img src={gallery1} alt="img" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={gallery2} alt="img" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={gallery3} alt="img" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={gallery4} alt="img" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={gallery1} alt="img" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={gallery2} alt="img" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={gallery3} alt="img" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={gallery4} alt="img" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={gallery1} alt="img" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={gallery2} alt="img" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={gallery3} alt="img" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={gallery4} alt="img" />
                            </div>
                        </div>
                    </Slider>
                    <Slider className="Slider-Who" id="gallery_flow_left" data-aos="fade-in" data-aos-duration={1500} {...Weslider} rtl={true} slidesToShow={11.5} arrows={false} autoplay={true} autoplaySpeed={1000} >
                        <div className="item">
                            <div className="img">
                                <img src={gallery5} alt="img" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={gallery6} alt="img" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={gallery7} alt="img" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={gallery8} alt="img" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={gallery5} alt="img" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={gallery6} alt="img" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={gallery7} alt="img" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={gallery8} alt="img" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={gallery5} alt="img" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={gallery6} alt="img" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={gallery7} alt="img" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={gallery8} alt="img" />
                            </div>
                        </div>
                    </Slider>
                </div>
                <div className="text-center" data-aos="fade-in" data-aos-duration={1500}>
                    <Link to="/About" className="btn btn_primary">
                        read our story
                    </Link>
                </div>
            </div>
        </>
    )
}

export default WhoWe