import React from 'react'
import Abt01 from '../../assets/images/chef-dish.png'
import Abt02 from '../../assets/images/title_icon.png'

function Abtbanner() {
    return (
        <>
            <section className="abt_banner">
                <div className="right_shape chef_shape position-absolute">
                    <img src={Abt01} alt="img" />
                </div>
                <div className="section_title text-center">
                    <span className="icon" data-aos="fade-down" data-aos-duration={1500}>
                        <img src={Abt02} alt="img" />
                    </span>
                    <span className="sub_text mb-1" data-aos="fade-down" data-aos-duration={1500} >
                        Our chef{" "}
                    </span>
                    <h2 data-aos="zoom-in" data-aos-duration={1500}>
                        Meet our expert chefs
                    </h2>
                    <p className="lead" data-aos="fade-up" data-aos-duration={1500}>
                        Lorem Ipsum is simply dummy text of the printing and typeset ting.
                    </p>
                </div>
            </section>
        </>
    )
}

export default Abtbanner