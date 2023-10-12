import React from 'react'
import { Link } from 'react-router-dom'
import Img01 from '../../assets/images/reservation_side_elements.png'
import Img02 from '../../assets/images/calendar.png'

function ReservOne() {
  return (
    <>
      <section className="bredcrumb_section resarvation_form reservationpage_1_bg">
        <div className="side_shape position-absolute">
          <img src={Img01} alt="img" />
        </div>
        <div className="container">
          <div className="section_title text-center" data-aos="fade-up" data-aos-duration={1500} >
            <span className="icon">
              <img src={Img02} alt="img" />
            </span>
            <span className="sub_text">Online reservation</span>
            <h2>Flavoury Restaurant, Delicious City, London 9578, UK</h2>
          </div>
          <div className="form_inner" data-aos="fade-in" data-aos-duration={1500} data-aos-delay={150} >
            <div className="formBlock">
              <div className="text-center">
                <h2 className="mb-2">Book your delicious table now</h2>
                <p>
                  Booking request <Link to="tel:+88123123456">+88-123-123456</Link> or
                  fill out the order form
                </p>
              </div>
              <form>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Your Name" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Phone Number" />
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="form-group">
                      <span className="icon">
                        <i className="icofont-user-alt-7" />
                      </span>
                      <input type="text" className="form-control has_icon" placeholder="1 Person" />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <span className="icon">
                        <i className="icofont-calendar" />
                      </span>
                      <input type="date" className="form-control  flex-row-reverse" />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <span className="icon">
                        <i className="icofont-clock-time" />
                      </span>
                      <input type="time" className="form-control has_icon  flex-row-reverse pl-0" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea className="form-control" placeholder="Message" defaultValue={""} />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <button className="btn btn_primary w-100 ">book a table</button>
                  </div>
                </div>
              </form>
            </div>
            <div className="contact_block">
              <h2>Contact Us</h2>
              <div className="booking">
                <h3>Booking request</h3>
                <Link to="tel:+88-123-123456">+88-123-123456</Link>
              </div>
              <ul>
                <li>
                  <h3>Location</h3>
                  <p>
                    Restaurant St, Delicious City, <br />
                    London 9578, UK
                  </p>
                </li>
                <li>
                  <h3>Lunch Time</h3>
                  <p>
                    Monday to Sunday <br />
                    11.00 am - 2.30pm
                  </p>
                </li>
                <li>
                  <h3>Dinner Time</h3>
                  <p>
                    Monday to Sunday <br />
                    5.30 pm - 11.30 pm
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ReservOne