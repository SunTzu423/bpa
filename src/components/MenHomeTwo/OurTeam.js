import React from 'react'
import Slider from 'react-slick'
import Team01 from '../../assets/images/knife_fire.png'
import Team02 from '../../assets/images/chef_01.png'
import Team03 from '../../assets/images/chef_02.png'
import Team04 from '../../assets/images/chef_03.png'

const Team = {
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

function OurTeam() {
    return (
        <>
            <section className="row_inner_am our_team_section light_texchur">
                <div className="side_shape">
                    <img src={Team01} alt="img" />
                </div>
                <div className="container">
                    <div className="section_title text-center" data-aos="fade-up" data-aos-duration={1500} >
                        <span className="sub_text">Our team</span>
                        <h2>meet our chef</h2>
                    </div>
                    <div className="team_slider_wraper" data-aos="fade-in" data-aos-duration={1500} >
                        <Slider className="" id="team_slider" {...Team} slidesToShow={3} arrows={false}>
                            <div className="item">
                                <div className="team_card">
                                    <div className="img">
                                        <img src={Team02} alt="img" />
                                    </div>
                                    <div className="info">
                                        <h3>Jammie Waters</h3>
                                        <span className="position">Master Chef</span>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="team_card">
                                    <div className="img">
                                        <img src={Team03} alt="img" />
                                    </div>
                                    <div className="info">
                                        <h3>Amelia Ava</h3>
                                        <span className="position">Master Chef</span>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="team_card">
                                    <div className="img">
                                        <img src={Team04} alt="img" />
                                    </div>
                                    <div className="info">
                                        <h3>John Due</h3>
                                        <span className="position">Master Chef</span>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="team_card">
                                    <div className="img">
                                        <img src={Team02} alt="img" />
                                    </div>
                                    <div className="info">
                                        <h3>Jammie Waters</h3>
                                        <span className="position">Master Chef</span>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="team_card">
                                    <div className="img">
                                        <img src={Team03} alt="img" />
                                    </div>
                                    <div className="info">
                                        <h3>Amelia Ava</h3>
                                        <span className="position">Master Chef</span>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurTeam