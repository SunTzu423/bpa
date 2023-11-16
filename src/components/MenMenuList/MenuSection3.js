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
                onClick={() => tabActive({ a: true })} id="beef-tab" data-toggle="tab" to="#starters" role="tab" aria-controls="starters" aria-selected="true" >
                Chicken
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${tabMenu.b && "active"}`}
                onClick={() => tabActive({ b: true })} id="chicken-tab" data-toggle="tab" to="#steaks" role="tab" aria-controls="steaks" aria-selected="false" >
                Beef
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${tabMenu.c && "active"}`}
                onClick={() => tabActive({ c: true })} id="pork-tab" data-toggle="tab" to="#special" role="tab" aria-controls="special" aria-selected="false" >
                Pork
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${tabMenu.d && "active"}`}
                onClick={() => tabActive({ d: true })} id="seafood-tab" data-toggle="tab" to="#deserts" role="tab" aria-controls="deserts" aria-selected="false" >
                seafood
              </Link>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent" data-aos="fade-up" data-aos-duration={1500} >

              <div className={`tab-pane fade ${tabMenu.b && "show active"}`} id="beef" role="tabpanel" aria-labelledby="beef-tab" >
                <div className="container">
                  <div className="row">
                  <div className="col-lg-6 col-md-12">
                      <div className="dish_box">
                        <div className="dish_info">
                          <div className="dish_img">
                            <img src="assets/images/dish_02.png" alt="img" />
                          </div>
                          <div className="dish_text">
                            <h3>Bolognese</h3>
                            <p>
                            Pasta, Italian meat sauce, beef, pork, veal
                            </p>
                            <span className="price">$200.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <div className="dish_box">
                        <div className="dish_info">
                          <div className="dish_img">
                            <img src="assets/images/dish_01.png" alt="img" />
                          </div>
                          <div className="dish_text">
                            <h3>Filet Mignon</h3>
                            <p>
                            steak, garlic parmesan mashed potatoes, green beans
                            </p>
                            <span className="price">$520.00</span>
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
                            <h3>Meatball Hoagie</h3>
                            <p>
                            homemade meatballs, provolone cheese, marinara, hoagie bun, hand cut fries
                            </p>
                            <span className="price">$170.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`tab-pane fade ${tabMenu.a && "show active"}`} id="chicken" role="tabpanel" aria-labelledby="chicken-tab" >
                <div className="container">
                  <div className="row">
                  <div className="col-lg-6 col-md-12">
                      <div className="dish_box">
                        <div className="dish_info">
                          <div className="dish_img">
                            <img src="assets/images/dish_09.png" alt="img" />
                          </div>
                          <div className="dish_text">
                            <h3>Alfredo</h3>
                            <p>
                            alfredo sauce, parmesan cheese | option of adding chicken breast for + $70 | option of adding shrimp for + $90 | option of adding sausage for + $70
                            </p>
                            <span className="price">$160.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  <div className="col-lg-6 col-md-12">
                      <div className="dish_box">
                        <div className="dish_info">
                          <div className="dish_img">
                            <img src="assets/images/dish_08.png" alt="img" />
                          </div>
                          <div className="dish_text">
                            <h3>Chicken Parmesan Sandwich</h3>
                            <p>
                            Chicken breast, Parmesan herb crust, red sauce, provolone, lemon parmesan aioli, romaine, red onion, brioche bun, hand cut fries
                            </p>
                            <span className="price">$160.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <div className="dish_box">
                        <div className="dish_info">
                          <div className="dish_img">
                            <img src="assets/images/dish_07.png" alt="img" />
                          </div>
                          <div className="dish_text">
                            <h3>Chicken Piccata</h3>
                            <p>
                            Chicken breast, angel hair, lemon, capers, parmesan reggiano
                            </p>
                            <span className="price">$250.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            
              <div className={`tab-pane fade ${tabMenu.c && "show active"}`} id="pork" role="tabpanel" aria-labelledby="pork-tab" >
                <div className="container">
                  <div className="row">
                  <div className="col-lg-6 col-md-12">
                      <div className="dish_box">
                        <div className="dish_info">
                          <div className="dish_img">
                            <img src="assets/images/dish_08.png" alt="img" />
                          </div>
                          <div className="dish_text">
                            <h3>Alfredo</h3>
                            <p>
                            alfredo sauce, parmesan cheese | option of adding chicken breast for + $70 | option of adding shrimp for + $90 | option of adding sausage for + $70
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
                            <img src="assets/images/dish_07.png" alt="img" />
                          </div>
                          <div className="dish_text">
                            <h3>Bolognese</h3>
                            <p>
                            Pasta, Italian meat sauce, beef, pork, veal
                            </p>
                            <span className="price">$200.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <div className="dish_box">
                        <div className="dish_info">
                          <div className="dish_img">
                            <img src="assets/images/dish_09.png" alt="img" />
                          </div>
                          <div className="dish_text">
                            <h3>Italian Grilled Cheese</h3>
                            <p>
                            pesto, provolone, pepper jack, caramelized onions, capicola ham, focaccia bread, hand cut fries, side of marinara
                            </p>
                            <span className="price">$16.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          
              <div className={`tab-pane fade ${tabMenu.d && "show active"}`} id="seafood" role="tabpanel" aria-labelledby="seafood-tab" >
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 col-md-12">
                      <div className="dish_box">
                        <div className="dish_info">
                          <div className="dish_img">
                            <img src="assets/images/desert1.png" alt="img" />
                          </div>
                          <div className="dish_text">
                            <h3>Alfredo</h3>
                            <p>
                            alfredo sauce, parmesan cheese | option of adding chicken breast for + $70 | option of adding shrimp for + $90 | option of adding sausage for + $70
                            </p>
                            <span className="price">$160.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <div className="dish_box">
                        <div className="dish_info">
                          <div className="dish_img">
                            <img src="assets/images/desert2.png" alt="img" />
                          </div>
                          <div className="dish_text">
                            <h3>Blackened Scallop Risotto</h3>
                            <p>
                            scallops, sweet potato risotto
                            </p>
                            <span className="price">$350.00</span>
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
                            <h3>Gratifying Grouper</h3>
                            <p>
                            Grouper, crawfish cream sauce, Polenta
                            </p>
                            <span className="price">$350.00</span>
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
                            <h3>Mussels</h3>
                            <p>
                            mussels, white wine and garlic sauce, lemon, tomatoes
                            </p>
                            <span className="price">$220.00</span>
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
                            <h3>Savory Salmon</h3>
                            <p>
                            Salmon, green beans, zucchini, butter
                            </p>
                            <span className="price">$290.00</span>
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
                            <h3>Scallop Risotto</h3>
                            <p>
                            scallops, herb risotto
                            </p>
                            <span className="price">$18.00</span>
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