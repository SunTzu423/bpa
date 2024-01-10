import React from 'react'
import { Link } from 'react-router-dom'
import Ctn03 from '../../assets/images/contact_icon.png'
import Ctn04 from '../../assets/images/contact.png'

function ContactUS() {
  return (
    <>
      <section className="contact_us_section">


        <div className="container">
          <div className="section_title text-center">
            <span className="icon" data-aos="fade-down" data-aos-duration={1500}>
              <img src={Ctn03} alt="img" />
            </span>
            <span className="sub_text mb-1" data-aos="fade-up" data-aos-duration={1500} >
              Contact us
            </span>
            <h2 data-aos="fade-up" data-aos-duration={1500}>
              Get in touch with us
            </h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="img" data-aos="fade-up" data-aos-duration={1500}>
                <img className="radius_img" src={Ctn04} alt="img" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="contact_box">
                <ul className="contact_listing" data-aos="fade-up" data-aos-duration={1500} >
                  <li><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                    <p className="sub_title">Call us</p>
                    <div className="cnt_block">
                      <Link to="tel:+11234567890">+1 614-525-1000</Link>
                      <span>
                        <i className="icofont-ui-call" />
                      </span>
                    </div>
                  </li>
                  <li>
                    <p className="sub_title">Email us</p>
                    <div className="cnt_block">
                      <a href="mailto:gamedaygrillbpa@gmail.com">gamedaygrillbpa@gmail.com</a>
                      <span>
                        <i className="icofont-envelope-open" />
                      </span>
                    </div>
                  </li>
                  <li>
                    <p className="sub_title">Find us</p>
                    <div className="cnt_block">
                      <p><Link to="https://www.google.com/maps/place/Delaware+Area+Career+Center+South+Campus/@40.2315079,-83.0396507,18.75z/data=!4m15!1m8!3m7!1s0x8838f05796444f13:0x94db90b3be66c2e6!2s4565+Columbus+Pike,+Delaware,+OH+43015!3b1!8m2!3d40.2317138!4d-83.0390411!16s%2Fg%2F11c5c3mc20!3m5!1s0x8838f057158834c1:0xefcdfe7e59a24f21!8m2!3d40.2316919!4d-83.0390239!16s%2Fm%2F0clw0pk?entry=ttu" className="btn btn_primary mt-3" id="bookingForm_modelTitle" data-toggle="modal" data-target="#bookingForm_model" onClick={() => setytShow(false)}>
                  4565 Columbus Pike, Delaware, OH</Link></p>
                      <span>
                        <i className="icofont-location-pin" />
                      </span>
                    </div>
                  </li>
                </ul>
                
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </>
  )
}

export default ContactUS