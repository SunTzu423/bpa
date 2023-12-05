import React from "react";
import { Link } from "react-router-dom";
import chefimg from '../../assets/images/abt_sideKnife.png'
import chefimg01 from '../../assets/images/master_chef.png'
import Img01 from '../../assets/images/chef_cap.png'
import Img02 from '../../assets/images/chef_text.png'

function Chef() {
  return (
    <>
      <section className="chef_section row_am bg_white_textcher">

        <div className="container">
          <div className="row my-2 my-sm-4">
            <div className="col-md-6" data-aos="fade-up" data-aos-duration={1500} >
              <div className="chef_img">
                <img className="radius_img img-fluid" src={chefimg01} alt="img" />
              </div>
              <h3 className="chef_name">
                <span>master chef</span> Adrian Wolfe
              </h3>
            </div>
            <div className="col-md-6">
              <div className="abt_chef" data-aos="fade-up" data-aos-duration={1500} >
                <div className="banner_badge">
                  <img className="img-fluid" src={Img01} alt="img" />
                  <div className="round_anim">
                    <img src={Img02} alt="img" />
                  </div>
                </div>
                <div className="section_title">
                  <span className="sub_text">Our chef</span>
                  <h2 className="mb-3">
                    a master chef with 25 <br /> years of experience
                  </h2>
                  <p>
                  Adrian Wolfe is a culinary maestro known for transforming ordinary ingredients into extraordinary masterpieces. With a career spanning decades and experiences in top kitchens worldwide, Chef Wolfe's innovative approach and meticulous attention to detail set him apart. His skillful blend of traditional techniques and avant-garde flair results in dishes that showcase both technical prowess and a deep understanding of ingredients. From perfectly seared meats to intricately plated desserts, Adrian Wolfe's creations are a testament to his passion and unwavering commitment to the art of gastronomy.
                  </p>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Chef;
