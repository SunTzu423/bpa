import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function MenuSection3() {
  
  const [tabMenu, tabActive] = useState({ a: true });


  return (
    <>
      <section className="our_menu_section row_inner_am light_texchur">
        <div className="container">
          <ul className="nav nav-tabs" id="myTab" role="tablist" data-aos="fade-up" data-aos-duration={1500} >
            <li className="nav-item">
              <Link className={`nav-link ${tabMenu.a && "active"}`}
                onClick={() => tabActive({ a: true })} id="starters-tab" data-toggle="tab" to="#starters" role="tab" aria-controls="starters" aria-selected="true" >
                starters
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${tabMenu.b && "active"}`}
                onClick={() => tabActive({ b: true })} id="steaks-tab" data-toggle="tab" to="#steaks" role="tab" aria-controls="steaks" aria-selected="false" >
                steaks
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${tabMenu.c && "active"}`}
                onClick={() => tabActive({ c: true })} id="special-tab" data-toggle="tab" to="#special" role="tab" aria-controls="special" aria-selected="false" >
                special
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${tabMenu.d && "active"}`}
                onClick={() => tabActive({ d: true })} id="deserts-tab" data-toggle="tab" to="#deserts" role="tab" aria-controls="deserts" aria-selected="false" >
                deserts
              </Link>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent" data-aos="fade-up" data-aos-duration={1500} >

              <div className={`tab-pane fade ${tabMenu.a && "show active"}`} id="starters" role="tabpanel" aria-labelledby="starters-tab" >
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 col-md-12">
                      <div className="dish_box">
                        <div className="dish_info">
                          <div className="dish_img">
                            <img src="assets/images/dish_07.png" alt="img" />
                          </div>
                          <div className="dish_text">
                            <h3>Tommy’s Margarita</h3>
                            <p>
                              Tomatoes Beef, Eggs, poached Beef, Eggs, poached, with
                              bacon, Bacon, chorizo, roasted roma{" "}
                            </p>
                            <span className="price">$18.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <div className="dish_box">
                        <span className="new">NEW</span>
                        <div className="dish_info">
                          <div className="dish_img">
                            <img src="assets/images/dish_08.png" alt="img" />
                          </div>
                          <div className="dish_text">
                            <h3> Meat steak raw marbled</h3>
                            <p>
                              Shad angler arapaima pencilsmelt. Eggs, poached, with
                              Galjoen fish Australian lungfish sea, bacon.{" "}
                            </p>
                            <span className="price">$22.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <div className="dish_box">
                        <span className="new">NEW</span>
                        <div className="dish_info">
                          <div className="dish_img">
                            <img src="assets/images/dish_09.png" alt="img" />
                          </div>
                          <div className="dish_text">
                            <h3>Beef steak grill pan</h3>
                            <p>
                              Roasted roma tomatoes mushrooms &amp; spinach Beef, Eggs,
                              poached, fried, with bacon, chorizo.
                            </p>
                            <span className="price">$16.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <div className="dish_box">
                        <div className="dish_info">
                          <div className="dish_img">
                            <img src="assets/images/dish_04.png" alt="img" />
                          </div>
                          <div className="dish_text">
                            <h3>raw marbled meat steak</h3>
                            <p>
                              Shad angler arapaima pencilsmelt. Eggs, poached, fried,
                              with bacon. chorizo, roasted roma tomatoes.
                            </p>
                            <span className="price">$25.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <div className="dish_box">
                        <div className="dish_info">
                          <div className="dish_img">
                            <img src="assets/images/dish_05.png" alt="img" />
                          </div>
                          <div className="dish_text">
                            <h3>Prickly Pear Tonic</h3>
                            <p>
                              Galjoen fish Australian lungfish sea, Shad angler arapaima
                              pencilsmelt. Eggs, poached, with bacon.
                            </p>
                            <span className="price">$16.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <div className="dish_box">
                        <div className="dish_info">
                          <div className="dish_img">
                            <img src="assets/images/dish_06.png" alt="img" />
                          </div>
                          <div className="dish_text">
                            <h3>Bacon chorizo roasted</h3>
                            <p>
                              Bacon, chorizo, roasted roma tomatoes Beef, Eggs, poached
                              Beef, Eggs, poached, with bacon,{" "}
                            </p>
                            <span className="price">$22.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`tab-pane fade ${tabMenu.b && "show active"}`} id="steaks" role="tabpanel" aria-labelledby="steaks-tab" >
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 col-md-12">
                      <div className="dish_box">
                        <span className="new">NEW</span>
                        <div className="dish_info">
                          <div className="dish_img">
                            <img src="assets/images/dish_01.png" alt="img" />
                          </div>
                          <div className="dish_text">
                            <h3>Beef steak grill pan</h3>
                            <p>
                              Beef, Eggs, poached, fried, with bacon, chorizo, roasted
                              roma tomatoes mushrooms &amp; spinach.
                            </p>
                            <span className="price">$16.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <div className="dish_box">
                        <span className="new">NEW</span>
                        <div className="dish_info">
                          <div className="dish_img">
                            <img src="assets/images/dish_02.png" alt="img" />
                          </div>
                          <div className="dish_text">
                            <h3>raw marbled meat steak</h3>
                            <p>
                              Galjoen fish Australian lungfish sea, Shad angler arapaima
                              pencilsmelt. Eggs, poached, with bacon.{" "}
                            </p>
                            <span className="price">$22.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <div className="dish_box">
                        <div className="dish_info">
                          <div className="dish_img">
                            <img src="assets/images/dish_03.png" alt="img" />
                          </div>
                          <div className="dish_text">
                            <h3>Beef steak grill pan</h3>
                            <p>
                              Bacon, chorizo, roasted roma tomatoes Beef, Eggs, poached
                              Beef, Eggs, poached, with bacon,{" "}
                            </p>
                            <span className="price">$18.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <div className="dish_box">
                        <div className="dish_info">
                          <div className="dish_img">
                            <img src="assets/images/dish_04.png" alt="img" />
                          </div>
                          <div className="dish_text">
                            <h3>raw marbled meat steak</h3>
                            <p>
                              Shad angler arapaima pencilsmelt. Eggs, poached, fried,
                              with bacon. chorizo, roasted roma tomatoes.
                            </p>
                            <span className="price">$25.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <div className="dish_box">
                        <div className="dish_info">
                          <div className="dish_img">
                            <img src="assets/images/dish_05.png" alt="img" />
                          </div>
                          <div className="dish_text">
                            <h3>Beef steak grill pan</h3>
                            <p>
                              Galjoen fish Australian lungfish sea, Shad angler arapaima
                              pencilsmelt. Eggs, poached, with bacon.
                            </p>
                            <span className="price">$16.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <div className="dish_box">
                        <div className="dish_info">
                          <div className="dish_img">
                            <img src="assets/images/dish_06.png" alt="img" />
                          </div>
                          <div className="dish_text">
                            <h3>raw marbled meat steak</h3>
                            <p>
                              Bacon, chorizo, roasted roma tomatoes Beef, Eggs, poached
                              Beef, Eggs, poached, with bacon,{" "}
                            </p>
                            <span className="price">$22.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            
              <div className={`tab-pane fade ${tabMenu.c && "show active"}`} id="special" role="tabpanel" aria-labelledby="special-tab" >
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 col-md-12">
                      <div className="dish_box">
                        <div className="dish_info">
                          <div className="dish_img">
                            <img src="assets/images/dish_07.png" alt="img" />
                          </div>
                          <div className="dish_text">
                            <h3>Tommy’s Margarita</h3>
                            <p>
                              Tomatoes Beef, Eggs, poached Beef, Eggs, poached, with
                              bacon, Bacon, chorizo, roasted roma{" "}
                            </p>
                            <span className="price">$18.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <div className="dish_box">
                        <span className="new">NEW</span>
                        <div className="dish_info">
                          <div className="dish_img">
                            <img src="assets/images/dish_08.png" alt="img" />
                          </div>
                          <div className="dish_text">
                            <h3> Meat steak raw marbled</h3>
                            <p>
                              Shad angler arapaima pencilsmelt. Eggs, poached, with
                              Galjoen fish Australian lungfish sea, bacon.{" "}
                            </p>
                            <span className="price">$22.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <div className="dish_box">
                        <span className="new">NEW</span>
                        <div className="dish_info">
                          <div className="dish_img">
                            <img src="assets/images/dish_09.png" alt="img" />
                          </div>
                          <div className="dish_text">
                            <h3>Beef steak grill pan</h3>
                            <p>
                              Roasted roma tomatoes mushrooms &amp; spinach Beef, Eggs,
                              poached, fried, with bacon, chorizo.
                            </p>
                            <span className="price">$16.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <div className="dish_box">
                        <div className="dish_info">
                          <div className="dish_img">
                            <img src="assets/images/dish_04.png" alt="img" />
                          </div>
                          <div className="dish_text">
                            <h3>raw marbled meat steak</h3>
                            <p>
                              Shad angler arapaima pencilsmelt. Eggs, poached, fried,
                              with bacon. chorizo, roasted roma tomatoes.
                            </p>
                            <span className="price">$25.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <div className="dish_box">
                        <div className="dish_info">
                          <div className="dish_img">
                            <img src="assets/images/dish_05.png" alt="img" />
                          </div>
                          <div className="dish_text">
                            <h3>Prickly Pear Tonic</h3>
                            <p>
                              Galjoen fish Australian lungfish sea, Shad angler arapaima
                              pencilsmelt. Eggs, poached, with bacon.
                            </p>
                            <span className="price">$16.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <div className="dish_box">
                        <div className="dish_info">
                          <div className="dish_img">
                            <img src="assets/images/dish_06.png" alt="img" />
                          </div>
                          <div className="dish_text">
                            <h3>Bacon chorizo roasted</h3>
                            <p>
                              Bacon, chorizo, roasted roma tomatoes Beef, Eggs, poached
                              Beef, Eggs, poached, with bacon,{" "}
                            </p>
                            <span className="price">$22.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                
                </div>
              </div>
          
              <div className={`tab-pane fade ${tabMenu.d && "show active"}`} id="deserts" role="tabpanel" aria-labelledby="deserts-tab" >
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 col-md-12">
                      <div className="dish_box">
                        <span className="new">NEW</span>
                        <div className="dish_info">
                          <div className="dish_img">
                            <img src="assets/images/desert1.png" alt="img" />
                          </div>
                          <div className="dish_text">
                            <h3>Beef steak grill pan</h3>
                            <p>
                              Beef, Eggs, poached, fried, with bacon, chorizo, roasted
                              roma tomatoes mushrooms &amp; spinach.
                            </p>
                            <span className="price">$16.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <div className="dish_box">
                        <span className="new">NEW</span>
                        <div className="dish_info">
                          <div className="dish_img">
                            <img src="assets/images/desert2.png" alt="img" />
                          </div>
                          <div className="dish_text">
                            <h3>raw marbled meat steak</h3>
                            <p>
                              Galjoen fish Australian lungfish sea, Shad angler arapaima
                              pencilsmelt. Eggs, poached, with bacon.{" "}
                            </p>
                            <span className="price">$22.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <div className="dish_box">
                        <div className="dish_info">
                          <div className="dish_img">
                            <img src="assets/images/desert3.png" alt="img" />
                          </div>
                          <div className="dish_text">
                            <h3>Beef steak grill pan</h3>
                            <p>
                              Bacon, chorizo, roasted roma tomatoes Beef, Eggs, poached
                              Beef, Eggs, poached, with bacon,{" "}
                            </p>
                            <span className="price">$18.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <div className="dish_box">
                        <div className="dish_info">
                          <div className="dish_img">
                            <img src="assets/images/desert4.png" alt="img" />
                          </div>
                          <div className="dish_text">
                            <h3>raw marbled meat steak</h3>
                            <p>
                              Shad angler arapaima pencilsmelt. Eggs, poached, fried,
                              with bacon. chorizo, roasted roma tomatoes.
                            </p>
                            <span className="price">$25.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <div className="dish_box">
                        <div className="dish_info">
                          <div className="dish_img">
                            <img src="assets/images/dish_05.png" alt="img" />
                          </div>
                          <div className="dish_text">
                            <h3>Beef steak grill pan</h3>
                            <p>
                              Galjoen fish Australian lungfish sea, Shad angler arapaima
                              pencilsmelt. Eggs, poached, with bacon.
                            </p>
                            <span className="price">$16.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <div className="dish_box">
                        <div className="dish_info">
                          <div className="dish_img">
                            <img src="assets/images/dish_06.png" alt="img" />
                          </div>
                          <div className="dish_text">
                            <h3>raw marbled meat steak</h3>
                            <p>
                              Bacon, chorizo, roasted roma tomatoes Beef, Eggs, poached
                              Beef, Eggs, poached, with bacon,{" "}
                            </p>
                            <span className="price">$22.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
          
          </div>
        </div>
      </section>
    </>
  )
}

export default MenuSection3