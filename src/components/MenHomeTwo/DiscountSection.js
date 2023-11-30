import React from 'react'
import { Link } from 'react-router-dom'
import DishImg from '../../assets/images/gallery_01.png'

function DiscountSection() {
    return (
        <>
            <section className="discount_section bg_black_textcher row_inner_am">
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
                                        <Link to="/MenuList3" className="btn btn_primary">
                                            explore more
                                        </Link>
                                    </div>
                                </div>
                                <div className="dish_img">
                                    <img src={DishImg} alt="img" />
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