import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick';
import WeImg from '../../assets/images/side_knife_img.png'
import WeIcon from '../../assets/images/knife_icon.png'
import Weimg from '../../assets/images/who_we.png'
import Wechef from '../../assets/images/who_chef.png'
import Wetext from '../../assets/images/who_text.png'
import gallery01 from '../../assets/images/gallery_01.png'
import gallery02 from '../../assets/images/gallery_02.png'
import gallery03 from '../../assets/images/gallery_03.png'
import gallery04 from '../../assets/images/gallery_04.png'
import gallery05 from '../../assets/images/gallery_05.png'
import gallery06 from '../../assets/images/gallery_06.png'
import gallery07 from '../../assets/images/gallery_07.png'
import gallery08 from '../../assets/images/gallery_08.png'

const Whoslider = {
  infinite: true,
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
      <div className="row_am who_we_section bg_white_textcher">
        <div className="sider_shape" data-aos="fade-in" data-aos-duration={1500}>
          <img src={WeImg} alt="img" />
        </div>
        <div className="container">
          <div className="section_title d-flex justify-content-center align-items-start" data-aos="fade-up" data-aos-duration={1500} >
            <div className="icon">
              <img src={WeIcon} alt="img" />
            </div>
            <div className="text">
              <span className="sub_text">Who we are</span>
              <h2>
                Luxurious restaurant with A rare taste <br /> you can’t find anywhere.{" "}
              </h2>
            </div>
          </div>
          <div className="row row_am">
            <div className="col-md-6">
              <div className="img" data-aos="fade-up" data-aos-duration={1500}>
                <img className="img-fluid radius_img" src={Weimg} alt="img" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="who_We_text">
                <p data-aos="fade-up" data-aos-duration={1500}>
                  Lorem Ipsum is simply dummy text of the printing and typeset ting
                  industry lorem Ipsum has been the industrys standard my text ever
                  since the when an unknown printer took a galley of type and
                  scrambled it to make a type book It has survived.
                </p>
                <div className="chef_block d-flex justify-content-center align-items-center" data-aos="fade-up" data-aos-duration={1500} >
                  <img className="chef_img" src={Wechef} alt="img" />
                  <img className="text_img" src={Wetext} alt="img" />
                </div>
                <div className="action_block" data-aos="fade-up" data-aos-duration={1500} >
                  <ul className="social_media d-flex align-content-center">
                    <li>
                      <Link to="#">
                        <i className="icofont-facebook" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="icofont-twitter" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="icofont-instagram" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="icofont-pinterest" />
                      </Link>
                    </li>
                  </ul>
                  <Link to="/contact" className="btn btn_primary">
                    Get direction <i className="icofont-location-pin" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="gallery_direction_right gallery_slider">
          <Slider className="Slider-Who" {...Whoslider} id="gallery_flow_right" data-aos="fade-in" data-aos-duration={1500} slidesToShow={11.5} arrows={false} autoplay={true} autoplaySpeed={1000}>
            <div className="item">
              <div className="img">
                <img src={gallery01} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery02} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery03} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery04} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery01} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery02} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery03} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery04} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery01} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery02} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery03} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery04} alt="img" />
              </div>
            </div>
          </Slider>
          <Slider className='Slider-Who'{...Whoslider} id="gallery_flow_left" data-aos="fade-in" data-aos-duration={1500}  rtl={true} slidesToShow={11.5} arrows={false} autoplay={true} autoplaySpeed={1000} >
            <div className="item">
              <div className="img">
                <img src={gallery05} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery06} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery07} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery08} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery05} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery06} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery07} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery08} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery05} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery06} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery07} alt="img" />
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={gallery08} alt="img" />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  )
}

export default WhoWe