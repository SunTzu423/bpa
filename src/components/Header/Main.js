import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import MenuImg from '../../assets/images/right_menu_table.png'

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
        <div className="container-fluid">
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
                  <Link className="nav-link" to="/home2" onClick={handleMenuItemClick}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/menulist3" onClick={handleMenuItemClick}>
                    MENU
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about" onClick={handleMenuItemClick}>
                    ABOUT US
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/ourchef" onClick={handleMenuItemClick}>
                    OUR CHEFS
                  </Link>
                </li>
                <li className="nav-item has_dropdown">
                  <Link className="nav-link" to="#" onClick={handleMenuItemClick}>
                    Pages
                  </Link>
                  <span className="drp_btn">
                    <i className="icofont-rounded-down" />
                  </span>
                  <div className="sub_menu">
                    <ul>
                      <li>
                        <Link to="/reservation1">reservation</Link>
                      </li>

                      <li>
                        <Link to="/review">reviews</Link>
                      </li>
                      <li>
                        <Link to="/gallery">gallery</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact" onClick={handleMenuItemClick}>
                    Contact
                  </Link>
                </li>
                <li className="nav-item contact_number">
                  <Link className="nav-link" to="tel:+18001234578">
                    <span>book a table :</span> +1 614-525-1000
                  </Link>
                </li>
                <li className="d-lg-none">
                  <Link to="/reservation1" className="btn btn_primary" onClick={handleMenuItemClick}>
                    FIND A TABLE
                  </Link>
                </li>
              </ul>
            </div>

            <div className="action_bar">
              <Link to="/reservation1" className="btn btn_primary" onClick={handleMenuItemClick}>
                FIND A TABLE
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
            <Link to="#" className="side_logo">
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
                  <p>308 Negra Arroyo Lane, Albuquerque, NM</p>
                  <span>
                    <i className="icofont-location-pin" />
                  </span>
                </div>
              </li>
            </ul>
            <Link to="mailto:gamedaygrillbpa@gmail.com" className="btn btn_primary">
              book a table
            </Link>
            <figure className="tab_img">
              <img src={MenuImg} alt="img" />
            </figure>
          </div>
        </div>
      }
    </>
  )
}

export default Main