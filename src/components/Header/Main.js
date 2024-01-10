import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import cart from '../../assets/images/cart.png'

function Main() {

  const [active, setActive] = useState();
  const [Nav, setNav] = useState(false);
  const [Home, setHome] = useState();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleMenuItemClick = () => {
    closeMenu();
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      {active &&
        <div className="menu-backdrop" style={{ opacity: "1", visibility: "visible" }}></div>
      }
      <header className={`fixed ${menuOpen ? 'menu-open' : ''}`}>
        <div className="container-fluid" style={{backgroundColor:'#191919'}}>
          <nav className="navbar navbar-expand-lg">
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="image" />
            </Link>
            
            <button className={`navbar-toggler ${menuOpen ? 'open' : ''}`} type="button" onClick={toggleMenu}>
              <span className="navbar-toggler-icon" onClick={() => setHome(Home === true ? false : true)}>
                <span className={`toggle-wrap ${menuOpen ? "active" : ""}`}>
                  <span className="toggle-bar"></span>
                </span>
              </span>
            </button>
            <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/" onClick={handleMenuItemClick}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/menulist" onClick={handleMenuItemClick}>
                    MENU
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about" onClick={handleMenuItemClick}>
                    ABOUT US
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/review" onClick={handleMenuItemClick}>
                    reviews
                  </Link>
                </li>
                <li className="nav-item contact_number">
                  <Link className="nav-link" to="tel:+18001234578">
                    <span>book a table :</span> +1 614-525-1000
                  </Link>
                </li>
                <li className="d-lg-none">
                  <Link to="/reservation" className="btn btn_primary" onClick={handleMenuItemClick}>
                    Book A TABLE
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="navbar-brand" to="/cart">
                  <img src={cart} alt="image" />
            </Link>
                </li>
              </ul>
            </div>

            <div className="action_bar">
              <Link to="/reservation" className="btn btn_primary" onClick={handleMenuItemClick}>
                Book A TABLE
              </Link>
              <div className="bar" onClick={() => setNav(true)}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {Nav &&
        <div className={`right_sidemenu ${Nav && "active"}`}>
          <span className="close_rightmenu" onClick={() => setNav(false)}>
            <i className="icofont-close-circled" />
          </span>
          <div className="menu_inner_content">
            <Link to="/" className="side_logo">
              <img src={logo} alt="image" />
            </Link>
            <ul className="contact_listing">
              <li>
                <p className="sub_title">Call us</p>
                <div className="cnt_block">
                  <Link to="tel:+11234567890">+1 614-525-1000</Link>
                  <span>
                    <i className="icofont-ui-call" />
                  </span>
                </div>
              </li>
              <li>
                <p className="sub_title">Email us</p>
                <div className="cnt_block">
                  <a href="mailto:gamedaygrillbpa@gmail.com">gamedaygrillbpa@gmail.com</a>
                  <span>
                    <i className="icofont-envelope-open" />
                  </span>
                </div>
              </li>
              <li>
                <p className="sub_title">Find us</p>
                <div className="cnt_block">
                  <p><Link to="https://www.google.com/maps/place/Delaware+Area+Career+Center+South+Campus/@40.2315079,-83.0396507,18.75z/data=!4m15!1m8!3m7!1s0x8838f05796444f13:0x94db90b3be66c2e6!2s4565+Columbus+Pike,+Delaware,+OH+43015!3b1!8m2!3d40.2317138!4d-83.0390411!16s%2Fg%2F11c5c3mc20!3m5!1s0x8838f057158834c1:0xefcdfe7e59a24f21!8m2!3d40.2316919!4d-83.0390239!16s%2Fm%2F0clw0pk?entry=ttu" className="btn btn_primary mt-3" id="bookingForm_modelTitle" data-toggle="modal" data-target="#bookingForm_model" onClick={() => setytShow(false)}>
                  4565 Columbus Pike, <br /><br /> Delaware, OH</Link></p>
                  <span>
                    <i className="icofont-location-pin" />
                  </span>
                </div>
              </li>
            </ul>
            <Link to="/reservation" className="btn btn_primary">
              book a table
            </Link>
            
          </div>
        </div>
      }
    </>
  )
}

export default Main