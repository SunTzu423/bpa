import React from 'react'
import { Link } from 'react-router-dom'
import Img01 from '../../assets/images/veg_side.png'
import Img02 from '../../assets/images/private_event_01.png'
import Img03 from '../../assets/images/private_icon.png'
import Img04 from '../../assets/images/private_event_02.png'

function PrivateSection() {
  return (
    <>
      <section className="row_am privet_event_section bg_white_textcher position-relative">
        <div className="sider_shape" data-aos="fade-in" data-aos-duration={1500}>
          <img src={Img01} alt="img" />
        </div>
        <div className="container">
          <div className="row py_50">
            <div className="col-md-6">
              <div className="privet_text" data-aos="fade-up" data-aos-duration={1500} >
                <div className="section_title">
                  <span className="sub_text">Private events</span>
                  <h2>
                    we provid private event with enjoyable dining experience &amp;
                    traditional cuisine
                  </h2>
                </div>
                <img className="d-block ml-auto" src={Img02} alt="img"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="privet_info position-relative">
                <div className="img" data-aos="fade-up" data-aos-duration={1500}>
                  <span className="side_icon">
                    <img src={Img03} alt="img" />
                  </span>
                  <img className="img-fluid radius_img" src={Img04} alt="img" />
                </div>
                <p data-aos="fade-up" data-aos-duration={1500}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry lorem Ipsum has been the industrys standard dummy text ever
                  since the when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book It has survived.
                </p>
                <Link to="/reservation" className="btn btn_primary" data-aos="fade-up" data-aos-duration={1500} >
                  BOOK EVENT NOW <i className="icofont-long-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PrivateSection