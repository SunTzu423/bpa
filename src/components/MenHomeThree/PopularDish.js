import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import DishImg1 from '../../assets/images/chiken_side.png'
import DishImg2 from '../../assets/images/chiken_side2.png'

const Popular = {
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

function PopularDish() {
  return (
    <>
      <section className="row_inner_am popular_dish_section">
        <div className="side_shape">
          <img className="right_side" src={DishImg1} alt="img" />
          <img className="left_side" src={DishImg2} alt="img" />
        </div>
        <div className="container">
          <div className="section_title text-center" data-aos="fade-up" data-aos-duration={1500} >
            <span className="sub_text">Welcome to Flavoury</span>
            <h1>Steak &amp; BBQ restaurant</h1>
            <p>We Only Serve Real Steaks, The steak you will always remember.</p>
          </div>
          <div id="popular_dish" className="dishList_slider" data-aos="fade-in" data-aos-duration={1500} >
            <Slider className="Slider-dishes" {...Popular} slidesToShow={4} arrows={false} margin={15} autoplay={true} autoplaySpeed={1000}>
              <div className="item">
                <div className="dish_card">
                  <div className="img">
                    <img src="assets/images/pop_dish01.png" alt="img" />
                  </div>
                  <h3>sirloin steak</h3>
                </div>
              </div>
              <div className="item">
                <div className="dish_card">
                  <div className="img">
                    <img src="assets/images/pop_dish02.png" alt="img" />
                  </div>
                  <h3>Ancho steak</h3>
                </div>
              </div>
              <div className="item">
                <div className="dish_card">
                  <div className="img">
                    <img src="assets/images/pop_dish03.png" alt="img" />
                  </div>
                  <h3>Steak Pizzaiola</h3>
                </div>
              </div>
              <div className="item">
                <div className="dish_card">
                  <div className="img">
                    <img src="assets/images/pop_dish04.png" alt="img" />
                  </div>
                  <h3>Garlic Butter Steak</h3>
                </div>
              </div>
              <div className="item">
                <div className="dish_card">
                  <div className="img">
                    <img src="assets/images/pop_dish01.png" alt="img" />
                  </div>
                  <h3>Mongolian Beef</h3>
                </div>
              </div>
              <div className="item">
                <div className="dish_card">
                  <div className="img">
                    <img src="assets/images/pop_dish02.png" alt="img" />
                  </div>
                  <h3>Steak Tacos</h3>
                </div>
              </div>
              <div className="item">
                <div className="dish_card">
                  <div className="img">
                    <img src="assets/images/pop_dish03.png" alt="img" />
                  </div>
                  <h3>Beef Bulgogi</h3>
                </div>
              </div>
              <div className="item">
                <div className="dish_card">
                  <div className="img">
                    <img src="assets/images/pop_dish04.png" alt="img" />
                  </div>
                  <h3>Bistec Encebollado</h3>
                </div>
              </div>
            </Slider>
          </div>
          <div className="text-center mb-md-4">
            <Link to="/MenuList1" className="btn btn_primary">
              view our full menu
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default PopularDish