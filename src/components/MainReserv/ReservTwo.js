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
            <span className="sub_text">Customer Checkout</span>
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
                                <input type="text" className="form-control" placeholder="Email" required/>
                              </div>
                              <div className="form-group">
                                <input type="text" className="form-control" placeholder="Last Name" required/>
                              </div>
                              <div className="form-group">
                                <input type="text" className="form-control" placeholder="City" required/>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <input type="text" className="form-control" placeholder="First Name" required/>
                              </div>
                              <div className="form-group">
                                <input type="text" className="form-control" placeholder="Address" required/>
                              </div>
                              <div className="form-group">
                                <input type="text" className="form-control" placeholder="Zip" required/>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-group">
                                  <select name="state" className="form-control"required>
                                      <option value="">Select State</option>
                                      <option value="Alabama">Alabama</option>
                                      <option value="Alaska">Alaska</option>
                                      <option value="Arizona">Arizona</option>
                                      <option value="Arkansas">Arkansas</option>
                                      <option value="California">California</option>
                                      <option value="Colorado">Colorado</option>
                                      <option value="Connecticut">Connecticut</option>
                                      <option value="Delaware">Delaware</option>
                                      <option value="Florida">Florida</option>
                                      <option value="Georgia">Georgia</option>
                                      <option value="Hawaii">Hawaii</option>
                                      <option value="Idaho">Idaho</option>
                                      <option value="Illinois">Illinois</option>
                                      <option value="Indiana">Indiana</option>
                                      <option value="Iowa">Iowa</option>
                                      <option value="Kansas">Kansas</option>
                                      <option value="Kentucky">Kentucky</option>
                                      <option value="Louisiana">Louisiana</option>
                                      <option value="Maine">Maine</option>
                                      <option value="Maryland">Maryland</option>
                                      <option value="Massachusetts">Massachusetts</option>
                                      <option value="Michigan">Michigan</option>
                                      <option value="Minnesota">Minnesota</option>
                                      <option value="Mississippi">Mississippi</option>
                                      <option value="Missouri">Missouri</option>
                                      <option value="Montana">Montana</option>
                                      <option value="Nebraska">Nebraska</option>
                                      <option value="Nevada">Nevada</option>
                                      <option value="New Hampshire">New Hampshire</option>
                                      <option value="New Jersey">New Jersey</option>
                                      <option value="New Mexico">New Mexico</option>
                                      <option value="New York">New York</option>
                                      <option value="North Carolina">North Carolina</option>
                                      <option value="North Dakota">North Dakota</option>
                                      <option value="Ohio">Ohio</option>
                                      <option value="Oklahoma">Oklahoma</option>
                                      <option value="Oregon">Oregon</option>
                                      <option value="Pennsylvania">Pennsylvania</option>
                                      <option value="Rhode Island">Rhode Island</option>
                                      <option value="South Carolina">South Carolina</option>
                                      <option value="South Dakota">South Dakota</option>
                                      <option value="Tennessee">Tennessee</option>
                                      <option value="Texas">Texas</option>
                                      <option value="Utah">Utah</option>
                                      <option value="Vermont">Vermont</option>
                                      <option value="Virginia">Virginia</option>
                                      <option value="Washington">Washington</option>
                                      <option value="West Virginia">West Virginia</option>
                                      <option value="Wisconsin">Wisconsin</option>
                                      <option value="Wyoming">Wyoming</option>
                                  </select>
                              </div>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Phone Number" required/>
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