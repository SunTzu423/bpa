import React from 'react'
import { Link } from 'react-router-dom'
import DishImg from '../../assets/images/discount_dish.png'
import DishImg01 from '../../assets/images/discount_dish2.png'
import DishImg02 from '../../assets/images/discount_dish3.png'


function DiscountSection() {
    return (
        <>
            <section className="discount_section bg_white_textcher row_inner_am">
                <div className="container">
                    <div className="section_title text-center" data-30-top="position: sticky;"
                        data-aos="fade-up" data-aos-duration={1500} style={{ position: "sticky" }}>
                        <span className="sub_text">Offer of the day</span>
                        <h2>our discounted dishes</h2>
                    </div>
                    <div className="dish_slides">
                        <div className="dishMain" data-30-top="position: sticky;" style={{ top: 230, position: "sticky" }}>
                            <div className="dish_block">
                                <div className="dish_text">
                                    <div className="text">
                                        <span className="off">50% off</span>
                                        <h3>Beef steak grill pan</h3>
                                        <p>
                                            Beef, Eggs, poached, fried, with <br /> bacon, chorizo, roasted
                                            roma toma <br />
                                            toes. mushrooms &amp; spinach.
                                        </p>
                                        <p className="price">
                                            <span className="new_price">$25.00</span>
                                            <span className="old_price">$50.00</span>
                                        </p>
                                        <Link to="/MenuList1" className="btn btn_primary">
                                            explore more
                                        </Link>
                                    </div>
                                </div>
                                <div className="dish_img">
                                    <img src={DishImg} alt="img" />
                                </div>
                            </div>
                        </div>
                        <div className="dishMain" data-30-top="position: sticky;" style={{ top: 260, position: "sticky" }}>
                            <div className="dish_block">
                                <div className="dish_text">
                                    <div className="text">
                                        <span className="off">25% off</span>
                                        <h3>Fresh Oysters Dozen</h3>
                                        <p>
                                            Fried, Beef, Eggs, poached with <br /> roasted roma toma bacon,
                                            chorizo,
                                            <br />
                                            mushrooms &amp; spinach toes.
                                        </p>
                                        <p className="price">
                                            <span className="new_price">$25.00</span>
                                            <span className="old_price">$50.00</span>
                                        </p>
                                        <Link to="/MenuList2" className="btn btn_primary">
                                            explore more
                                        </Link>
                                    </div>
                                </div>
                                <div className="dish_img">
                                    <img src={DishImg01} alt="img" />
                                </div>
                            </div>
                        </div>
                        <div className="dishMain" data-30-top="position: sticky;" style={{ top: 290, position: "sticky" }}>
                            <div className="dish_block">
                                <div className="dish_text">
                                    <div className="text">
                                        <span className="off">35% off</span>
                                        <h3>Chicha Morada</h3>
                                        <p>
                                            bacon, chorizo, roasted roma toma with <br /> toes. mushrooms
                                            &amp; spinach.
                                            <br />
                                            Beef, Eggs, poached, fried.
                                        </p>
                                        <p className="price">
                                            <span className="new_price">$25.00</span>
                                            <span className="old_price">$50.00</span>
                                        </p>
                                        <Link to="/MenuList3" className="btn btn_primary">
                                            explore more
                                        </Link>
                                    </div>
                                </div>
                                <div className="dish_img">
                                    <img src={DishImg02} alt="img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DiscountSection