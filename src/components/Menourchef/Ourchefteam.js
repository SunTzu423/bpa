import React from 'react'
import Slider from 'react-slick';
import Img1 from '../../assets/images/chef_01.png'
import Img2 from '../../assets/images/chef_02.png'
import Img3 from '../../assets/images/chef_03.png'
import Img4 from '../../assets/images/chef_01.png'
import Img5 from '../../assets/images/chef_02.png'

const Teamslider = {
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


function Ourchefteam() {
  return (
    <>
      <section className="row_inner_am our_team_section">
        <div className="container">
          <div className="team_slider_wraper" data-aos="fade-in" data-aos-duration={1500} >
            <Slider className="Slider-Menu" id="team_slider" {...Teamslider} arrows={false} slidesToShow={3}> 
              <div className="item">
                <div className="team_card">
                  <div className="img">
                    <img src={Img1} alt="img" />
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
                    <img src={Img2} alt="img" />
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
                    <img src={Img3} alt="img" />
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
                    <img src={Img4} alt="img" />
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
                    <img src={Img5} alt="img" />
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

export default Ourchefteam