import React from 'react'
import Slider from 'react-slick'

const Menulist = {
    responsive: [
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 4,
            },
        },
    ],
}

function TextList() {
    return (
        <>
            <div className="menu_list_section menuList_page">
                <Slider className="" id="menu_list_flow" {...Menulist} arrows={false} slidesToShow={11} autoplay={true} autoplaySpeed={2000} style={{ transition: "all 4s linear 0s", width: "8955px", transform: "translate3d(-4169px, 0px, 0px)" }} >
                    <div className="item">
                        <div className="text_block">
                            <span>main dish</span>
                            <span className="mark_star">
                                <i className="icofont-restaurant-menu" />
                            </span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="text_block">
                            <span>main dish</span>
                            <span className="mark_star">
                                <i className="icofont-restaurant-menu" />
                            </span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="text_block">
                            <span>main dish</span>
                            <span className="mark_star">
                                <i className="icofont-restaurant-menu" />
                            </span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="text_block">
                            <span>main dish</span>
                            <span className="mark_star">
                                <i className="icofont-restaurant-menu" />
                            </span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="text_block">
                            <span>main dish</span>
                            <span className="mark_star">
                                <i className="icofont-restaurant-menu" />
                            </span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="text_block">
                            <span>main dish</span>
                            <span className="mark_star">
                                <i className="icofont-restaurant-menu" />
                            </span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="text_block">
                            <span>main dish</span>
                            <span className="mark_star">
                                <i className="icofont-restaurant-menu" />
                            </span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="text_block">
                            <span>main dish</span>
                            <span className="mark_star">
                                <i className="icofont-restaurant-menu" />
                            </span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="text_block">
                            <span>main dish</span>
                            <span className="mark_star">
                                <i className="icofont-restaurant-menu" />
                            </span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="text_block">
                            <span>main dish</span>
                            <span className="mark_star">
                                <i className="icofont-restaurant-menu" />
                            </span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="text_block">
                            <span>main dish</span>
                            <span className="mark_star">
                                <i className="icofont-restaurant-menu" />
                            </span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="text_block">
                            <span>main dish</span>
                            <span className="mark_star">
                                <i className="icofont-restaurant-menu" />
                            </span>
                        </div>
                    </div>
                </Slider>
            </div>
        </>
    )
}

export default TextList