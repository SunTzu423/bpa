import React from 'react'
import Icon01 from '../../assets/images/outj_icon1.png'
import Icon02 from '../../assets/images/outj_icon2.png'
import Icon03 from '../../assets/images/outj_icon3.png'

function Journey() {
  return (
    <>
      <section className="row_am our_journey bg_black_textcher">

        <div className="container">
          <div className="row_am">
            <div className="section_title" data-aos="fade-up" data-aos-duration={1500} >
              <span className="sub_text">Why we are the best</span>
              <h2>
                our Journey started in 2023 <br /> to serve tasty steaks
              </h2>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="joueney_box" data-aos="fade-up" data-aos-duration={1500} >
                  <div className="icon">
                    <img src={Icon01} alt="img" />
                  </div>
                  <h3>Prime location</h3>
                  <p>
                    Outstanding scenery can be seen while you wait for your meal. Designed to take your breath away
                    as soon as you walk into our restaurant.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="joueney_box" data-aos="fade-up" data-aos-duration={1500} >
                  <div className="icon">
                    <img src={Icon02} alt="img" />
                  </div>
                  <h3>Free home delivery</h3>
                  <p>
                  For orders over $35 the delivery is on us.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="joueney_box" data-aos="fade-up" data-aos-duration={1500} >
                  <div className="icon">
                    <img src={Icon03} alt="img" />
                  </div>
                  <h3>premium services</h3>
                  <p>
                    Our team at Game Day Grill is dedicated to giving you the best ordering
                    and eating experience possible.
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

export default Journey