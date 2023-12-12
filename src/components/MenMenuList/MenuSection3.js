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
                            <img src="../../assets/images/abtgallery_01.png" alt="img" />
                          </div>
                          <div className="dish_text">
                            <h3>Angus Beef Burger</h3>
                            <p>
                            Fresh beef that comes seasoned to your desire and melted cheese, served with handcut fries. <br /><br />
                            Half pound of angus beef, lettuce, tomato, burger bun, house aioli, hand cut fries
                            </p>
                            <span className="price">$16</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  <div className="col-lg-6 col-md-12">
                      <div className="dish_box">
                        <div className="dish_info">
                          <div className="dish_img">
                            <img src="../../assets/images/desert4.png" alt="img" />
                          </div>
                          <div className="dish_text">
                            <h3>Bolognese</h3>
                            <p>
                            A rich beef, veal and pork sauce complimented by the soft pasta that combines to bring you a mouthwatering aroma. <br /><br />
                            Pasta, Italian meat sauce, beef, pork, and veal
                            </p>
                            <span className="price">$20</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <div className="dish_box">
                        <div className="dish_info">
                          <div className="dish_img">
                            <img src="assets/images/desert1.png" alt="img" />
                          </div>
                          <div className="dish_text">
                            <h3>Filet Mignon</h3>
                            <p>
                            Juicy cut of beef seared to perfection complimented by rich garlic parmesan mashed potatoes and fabulous side of green beans.<br /><br />
                            steak, garlic parmesan mashed potatoes, green beans
                            </p>
                            <span className="price">$52</span>
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
                            Homemade meatballs spread out on a buttered bun topped with our savory marinara sauce with provolone cheese to bring you a classic taste that you will love. <br /><br />
                            homemade meatballs, provolone cheese, marinara, hoagie bun, hand cut fries
                            </p>
                            <span className="price">$17</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <div className="dish_box">
                        <div className="dish_info">
                          <div className="dish_img">
                            <img src="../../assets/images/dish_09.png" alt="img" />
                          </div>
                          <div className="dish_text">
                            <h3>NY Strip</h3>
                            <p>
                            A fresh cut of steak seared to your liking presented over top thick and creamy mashed potatoes that are prepared with garlic and parmesan cheese.<br /><br />
                            Steak, garlic parmesan mashed potatoes, asparagus
                            </p>
                            <span className="price">$45</span>
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
                            <img src="../../assets/images/abtgallery_07.png" alt="img" />
                          </div>
                          <div className="dish_text">
                            <h3>Grilled Chicken Sandwich</h3>
                            <p>
                            tender grilled chicken served in a buttered bun with tomatoes, lettuce and onion. Served with handcut fries and your choice of sauce. <br /><br />
                            Chicken, burger bun, fries, lettuce, tomatoes, onion
                            </p>
                            <span className="price">$16</span>
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
                            <img src="../../assets/images/dish_01.png" alt="img" />
                          </div>
                          <div className="dish_text">
                            <h3>Short Rib</h3>
                            <p>
                            Juicy cuts of pork that are atop a pillow of mashed potatoes and with a pork gravy topping of the eperience. <br /><br />
                            Pork, pork gravy, mashed potatoes, parsley
                            </p>
                            <span className="price">$32</span>
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
                            <h3>Bolognese</h3>
                            <p>
                            A rich beef, veal and pork sauce complimented by the soft pasta that combines to bring you a mouthwatering aroma. <br /><br />
                            Pasta, Italian meat sauce, beef, pork, veal
                            </p>
                            <span className="price">$20</span>
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
                            <h3>Italian Grilled Cheese</h3>
                            <p>
                            Buttered toasted bread with a melted assortment of cheese with caramelized onions and tender slices of ham with pesto to round out the taste. Served with a side of our hand cut fries and a side of marinara. <br /><br />
                            pesto, provolone, pepper jack, caramelized onions, capicola ham, focaccia bread, hand cut fries, side of marinara
                            </p>
                            <span className="price">$16</span>
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
                            <img src="assets/images/dish_02.png" alt="img" />
                          </div>
                          <div className="dish_text">
                          <h3>Ahi Tuna Salad</h3>
                            <p>
                            Fresh, never frozen Ahi Tuna over a bed of spinach and cucumbers topped with the house balsamic dressing.<br /><br />
                            Tuna, cucumbers, spinach, and balsamic dressing
                            </p>
                            <span className="price">$16</span>
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
                          <h3>Swordfish</h3>
                            <p>
                            Tender, melt in your mouth, swordfish freshly caught. topped with a sweet yet slightly spicy sauce served on a bed of steamed rice with asparagus  <br /><br />

                            Swordfish, pineapple, onion, rice, asparagus, red bell pepper, ghost pepper.
                            </p>
                            <span className="price">$30</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <div className="dish_box">
                        <div className="dish_info">
                          <div className="dish_img">
                            <img src="../../assets/images/desert3.png" alt="img" />
                          </div>
                          <div className="dish_text">
                            <h3>Grouper</h3>
                            <p>
                            A creamy crawfish sauce that soaks into the grouper and combines the dryness of the polenta to provide a perfectly rounded taste. <br /><br />
                            Grouper, crawfish cream sauce, Polenta
                            </p>
                            <span className="price">$35</span>
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
                            <h3>Mussels</h3>
                            <p>
                            Mussels presented sizzling in a garlic sauce that fits perfectly with the texture and taste of the mussels and vegetables. <br /><br />
                            mussels, white wine and garlic sauce, lemon, tomatoes
                            </p>
                            <span className="price">$22</span>
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
                            <h3>Savory Salmon</h3>
                            <p>
                            Freshly caught salmon that is seared in an oil, garlic and butter sauce. Served with freshly cut zucchini and green beans, and topped off with a rich butter garnish.<br /><br />
                            Salmon, green beans, zucchini, butter
                            </p>
                            <span className="price">$29</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <div className="dish_box">
                        <div className="dish_info">
                          <div className="dish_img">
                            <img src="assets/images/abtgallery_02.png" alt="img" />
                          </div>
                          <div className="dish_text">
                            <h3>Scallop Risotto</h3>
                            <p>
                            A delectable selection of scallops served with a creamy herb risotto and a pesto garnish.<br /><br />
                            scallops, herb risotto
                            </p>
                            <span className="price">$18</span>
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