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
                <li className="nav-item has_dropdown">
                  <Link className="nav-link" to="#" onClick={handleMenuItemClick}>
                    Home
                  </Link>
                  <span className="drp_btn">
                    <i className="icofont-rounded-down" />
                  </span>
                  <div className={`sub_menu ${isDropdownOpen ? 'open' : ''}`}>
                    <ul style={{ display: "block" }}>
                      <li>
                        <Link to="/">Home Defoult</Link>
                      </li>
                      <li>
                        <Link to="/home2">Home Slider Hero</Link>
                      </li>
                      <li>
                        <Link to="/home3">Home Dish List</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item has_dropdown">
                  <Link className="nav-link" to="#" onClick={handleMenuItemClick}>
                    MENU
                  </Link>
                  <span className="drp_btn">
                    <i className="icofont-rounded-down" />
                  </span>
                  <div className="sub_menu">
                    <ul>
                      <li>
                        <Link to="/menulist1">Menu List 1</Link>
                      </li>
                      <li>
                        <Link to="/menulist2">Menu List 2</Link>
                      </li>
                      <li>
                        <Link to="/menulist3">Menu List 3</Link>
                      </li>
                    </ul>
                  </div>
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
                        <Link to="/bloglist">Blog List </Link>
                      </li>
                      <li>
                        <Link to="/blogdetail">Blog Details</Link>
                      </li>
                      <li>
                        <Link to="/reservation1">reservation 1</Link>
                      </li>
                      <li>
                        <Link to="/reservation2">reservation 2</Link>
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
                    <span>book a table :</span> +1 800 123 45 78
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
                  <Link to="tel:+11234567890">+1 123 456 7890</Link>
                  <span>
                    <i className="icofont-ui-call" />
                  </span>
                </div>
                <div className="cnt_block">
                  <Link to="tel:+10987654321">+1 098 765 4321</Link>
                  <span>
                    <i className="icofont-whatsapp" />
                  </span>
                </div>
              </li>
              <li>
                <p className="sub_title">Email us</p>
                <div className="cnt_block">
                  <Link to="mailto:">hello@gmail.com</Link>
                  <span>
                    <i className="icofont-envelope-open" />
                  </span>
                </div>
              </li>
              <li>
                <p className="sub_title">Find us</p>
                <div className="cnt_block">
                  <p>Restaurant St, Delicious City, London 9578, UK</p>
                  <span>
                    <i className="icofont-location-pin" />
                  </span>
                </div>
              </li>
            </ul>
            <Link to="#" className="btn btn_primary">
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