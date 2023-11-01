import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Main() {

  const [ytshow, setytShow] = useState(false);

  return (
    <>
      <footer>
        <div className="container">
          <div className="foote_widget contact_info">
            <div className="row py_50">
              <div className="col-md-7 direction_block">
                <p>
                  308 Negra Arroyo Lane, <br />
                  Albuquerque, NM <br />
                  Booking : <Link to="tel:+88-123-123456">614-525-1000</Link>
                </p>
                <Link to="/contact" className="btn_text">
                  get direction <i className="icofont-long-arrow-right" />
                </Link>
              </div>
              <div className="col-md-5 text-md-right timing_block">
                <p>
                  Monday - Friday : 11AM - 10PM <br />
                  Saturday - Sunday : 10AM - 11PM
                </p>
                <Link to="/reservation1" className="btn btn_primary mt-3" id="bookingForm_modelTitle" data-toggle="modal" data-target="#bookingForm_model" onClick={() => setytShow(false)}>
                  book a table
                </Link>
              </div>
            </div>
          </div>
          <div className="foote_widget newsletter_block">
            <div className="row py_50">
              <div className="col-md-7 offer_block">
                <h2>Get News &amp; Offers</h2>
                <p>
                  Subscribe us &amp; Get <span>15% Off.</span>
                </p>
                <form>
                  <div className="form-group">
                    <span className="icon position-absolute">
                      <i className="icofont-envelope-open" />
                    </span>
                    <input type="text" placeholder="Your email" className="form-control" required="" />
                    <button className="btn btn_primary">subscribe now</button>
                  </div>
                </form>
              </div>
              <div className="col-md-5">
                <ul className="social_media">
                  <li>
                    <a href="https://twitter.com/CordenRoge61866" target='_blank'>Twitter</a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/channel/UCboic6ngDvgZPiySSZhdruQ" target='_blank'>Youtube</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="foote_widget menu_links">
            <div className="row">
              <div className="col-md-12">
                <ul className="links d-flex justify-content-center">
                  <li>
                    <Link to="/home2">Home</Link>
                  </li>

                  <li>
                    <Link to="/menulist3">Menu </Link>
                  </li>

                  <li>
                    <Link to="/about">About us</Link>
                  </li>
                  <li>
                    <Link to="/ourchef">Our chefs</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 copy_right text-center">
              <p>
                © 2023 Game Day Grill. All Rights Reserved 
              </p>
            </div>
          </div>
        </div>
        <div className="go_top" id="Gotop">
          <span>
            <i className="icofont-rounded-up" />
          </span>
        </div>
      </footer>
      {ytshow &&
        <div className="modal fade booking_model show" id="bookingForm_model" tabIndex={-1} aria-labelledby="bookingForm_modelTitle" style={{ display: "block", paddingRight: 17 }} aria-modal="true" role="dialog" >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header text-center border-0 d-block p-0">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => setytShow(false)}>
                  <span aria-hidden="true">
                    <i className="icofont-close-line" />
                  </span>
                </button>
                <h2 className="mb-2">Online Reservation</h2>
                <p>
                  Booking request <a href="tel:+88123123456">614-525-1000</a> or fill
                  out the order form
                </p>
              </div>
              <div className="modal-body">
                <div className="booking_form">
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
                      <div className="col-md-4">
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
                          <input type="time" className="form-control has_icon  flex-row-reverse pl-0"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            placeholder="Message"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <button className="btn btn_primary w-100 ">book a table</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Main