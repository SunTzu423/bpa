import React from 'react'
import { Link } from 'react-router-dom'
 
function ReservTwo() {
  return (
    <>
      <section className="bredcrumb_section resarvation_form reservationpage_1_bg">
        <div className="container">
          <div className="section_title text-center" data-aos="fade-up" data-aos-duration={1500} >
            <span className="icon aos-init aos-animate" data-aos="fade-down" data-aos-duration={1500} >
              <img src="assets/images/calendar.png" alt="img" />
            </span>
            <span className="sub_text">Customer Checkout</span><br />
            <h2>Game Day Grill, Delaware, Ohio</h2>
          </div>
          <div className="row">
            <div className="col-md-1" />
            <div className="col-md-10">
              <div className="fade booking_model show" id="bookingForm_model" tabIndex={-1} role="dialog" aria-labelledby="bookingForm_modelTitle" aria-hidden="true" >
                <div className="modal-dialog modal-dialog-centered" role="document">
                  <div className="modal-content">
                    <div className="modal-header text-center border-0 d-block p-0">
                      <h2 className="mb-2">Pay for your delicious orders</h2>
                      <p>
                        Fill out the form below to checkout your order
                      </p>
                    </div>
                    <div className="modal-body">
                      <div className="booking_form">
                        <form>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <input type="text" className="form-control" placeholder="First Name" tabIndex={1} required/>
                              </div>
                              <div className="form-group">
                              <input type="email" className="form-control" placeholder="Email" tabIndex={3} required/>
                              </div>
                              <div className="form-group">
                                <input type="text" className="form-control" placeholder="City" tabIndex={5} required/>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                              <input type="text" className="form-control" placeholder="Last Name" tabIndex={2} required/>
                              </div>
                              <div className="form-group">
                                <input type="text" className="form-control" placeholder="Address" tabIndex={4} required/>
                              </div>
                              <div className="form-group">
                                <input type="text" className="form-control" placeholder="Zip" tabIndex={6} required/>
                              </div>
                            </div>
                            
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Phone Number" tabIndex={7} required/>
                              </div>
                            <div className="col-md-4">
                            </div>
                            <div className="col-md-12">
                            </div>
                            <div className="col-md-12">
                              <button className="btn btn_primary w-100 ">
                                pay now
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