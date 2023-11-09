import React from 'react'
import { Link } from 'react-router-dom'
import Chef01 from '../../assets/images/master_chef.png'
import Chef02 from '../../assets/images/chef_cap.png'
import Chef03 from '../../assets/images/chef_text_white.png'

function Ourchefsection() {
  return (
    <>
      <section className="chef_section chef_page row_am">
        <div className="container">
          <div className="row my-2 my-sm-4">
            <div className="col-md-6" data-aos="fade-up" data-aos-duration={1500}>
              <div className="chef_img">
                <img className="radius_img img-fluid" src={Chef01} alt="img" />
              </div>
              <h3 className="chef_name">
                <span>master chef</span> Jammie Waters
              </h3>
            </div>
            <div className="col-md-6">
              <div className="abt_chef" data-aos="fade-up" data-aos-duration={1500}>
                <div className="banner_badge">
                  <img className="img-fluid" src={Chef02} alt="img" />
                  <div className="round_anim">
                    <img src={Chef03} alt="img" />
                  </div>
                </div>
                <div className="section_title">
                  <span className="sub_text">Our chef</span><br/>
                  <h2 className="mb-3">
                    a master chef with 25 <br /> years of experience
                  </h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typeset ting
                    industry lorem Ipsum has the industrys standard my text ever since
                    the when an unknown printer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Ourchefsection