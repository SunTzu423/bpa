import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Img02 from '../../assets/images/calendar.png';

function ReservOne() {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    partySize: '',
    date: '',
    time: '',
    message: '',
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
  
    // Convert form data to a string
    const formDataString = JSON.stringify(formData);
  
    // Create a Blob with the form data
    const blob = new Blob([formDataString], { type: 'text/plain' });
  
    // Create a URL for the Blob
    const url = window.URL.createObjectURL(blob);
  
    // Create an anchor element to download the file
    const a = document.createElement('a');
    a.href = url;
    a.download = 'reservation.txt';
  
    // Trigger a click event to download the file
    a.click();
  
    // Clean up
    window.URL.revokeObjectURL(url);

    setFormData({
      name: '',
      phoneNumber: '',
      partySize: '',
      date: '',
      time: '',
      message: '',
    });
  };
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <>
      <section className="bredcrumb_section resarvation_form reservationpage_1_bg">
        <div className="container">
          <div className="section_title text-center" data-aos="fade-up" data-aos-duration={1500} >
            <span className="icon">
              <img src={Img02} alt="img" />
            </span>
            <span className="sub_text">Online reservation</span>
            <h2>Game Day Grill, Delaware, Ohio, USA</h2>
          </div>
          <div className="form_inner" data-aos="fade-in" data-aos-duration={1500} data-aos-delay={150} >
            <div className="formBlock">
              <div className="text-center">
                <h2 className="mb-2">Book your  table now</h2>
                <p>
                  Booking request <Link to="tel:614-525-1000">614-525-1000</Link> or
                  fill out the order form<br /><br /><br />
                </p>
              </div>
              <form onSubmit={handleFormSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                    <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                    <input
                    type="text"
                    className="form-control"
                    placeholder="Phone Number"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                  />
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="form-group">
                      <span className="icon">
                        <i className="icofont-user-alt-7" />
                      </span>
                      <input
                    type="text"
                    className="form-control"
                    placeholder="Party Size"
                    name="partySize"
                    value={formData.partySize}
                    onChange={handleInputChange}
                  />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      
                    <input
                    type="date"
                    className="form-control custom-input" // Add a custom class for styling
                    placeholder="  Select Date" // Add spaces before the placeholder text
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <span className="icon">
                        <i className="icofont-clock-time" />
                      </span>
                      <input
                      type="time"
                      className="form-control custom-input" // Add a custom class for styling
                      placeholder="  Select Time" // Add spaces before the placeholder text
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      />
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
                <Link to="tel:614-525-1000">614-525-1000</Link>
              </div>
              <ul>
                <li>
                  <h3>Location</h3>
                  <p>
                  4565 Columbus Pike, <br />Delaware, OH
                  </p>
                </li>
                <li>
                  <h3>Lunch Time</h3>
                  <p>
                    Monday to Saturday <br />
                    11:00 am - 3:30pm<br /><br />
                  </p>
                  <p>
                    Sunday <br />
                    12pm - 4pm
                  </p>
                </li>
                <li>
                  <h3>Dinner Time</h3>
                  <p>
                    Monday to Saturday <br />
                    5pm - 10 pm<br /><br />
                  </p>
                  <p>Sunday <br/>
                    5pm - 9pm
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