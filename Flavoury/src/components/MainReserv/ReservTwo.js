import React from 'react'
import { Link } from 'react-router-dom'

function ReservTwo() {
  return (
    <>
      <section className="bredcrumb_section reservationpage_bg">
        <div className="container">
          <div className="section_title text-center" data-aos="fade-up" data-aos-duration={1500} >
            <span className="icon aos-init aos-animate" data-aos="fade-down" data-aos-duration={1500} >
              <img src="assets/images/calendar.png" alt="img" />
            </span>
            <span className="sub_text">Online Reservation</span>
            <h2>Flavoury Restaurant, Delicious City, London</h2>
          </div>
          <div className="row">
            <div className="col-md-1" />
            <div className="col-md-10">
              <div className="fade booking_model show" id="bookingForm_model" tabIndex={-1} role="dialog" aria-labelledby="bookingForm_modelTitle" aria-hidden="true" >
                <div className="modal-dialog modal-dialog-centered" role="document">
                  <div className="modal-content">
                    <div className="modal-header text-center border-0 d-block p-0">
                      <h2 className="mb-2">Book your delicious table now</h2>
                      <p>
                        Booking request <Link to="tel:+88123123456">+88-123-123456</Link>{" "}
                        or fill out the order form
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
                                <input type="time" className="form-control has_icon  flex-row-reverse pl-0" />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <textarea className="form-control" placeholder="Message" defaultValue={""} />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <button className="btn btn_primary w-100 ">
                                book a table
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-1" />
          </div>
        </div>
      </section>
    </>
  )
}

export default ReservTwo