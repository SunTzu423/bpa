import React from 'react'
import Slider from 'react-slick';

const Slidersetting = {
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
};

function TextFlow() {
    return (
        <>
            <div className="textFlow_list white_cover">
                <Slider className="Slick-Menu" id="text_list_flow" {...Slidersetting} arrows={false} rtl={true} slidesToShow={10} autoplay={true} autoplaySpeed={2000} style={{ "width": 5697 }} >
                    <div className="item">
                        <div className="text_block">
                            <span>Door Delivery</span>
                            <span className="mark_star">*</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="text_block">
                            <span>Fine Dining</span>
                            <span className="mark_star">*</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="text_block">
                            <span>Outdoor Catering</span>
                            <span className="mark_star">*</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="text_block">
                            <span> Banquets Hall </span>
                            <span className="mark_star">*</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="text_block">
                            <span>Fine Dining</span>
                            <span className="mark_star">*</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="text_block">
                            <span>Door Delivery</span>
                            <span className="mark_star">*</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="text_block">
                            <span>Fine Dining</span>
                            <span className="mark_star">*</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="text_block">
                            <span>Outdoor Catering</span>
                            <span className="mark_star">*</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="text_block">
                            <span> Banquets Hall </span>
                            <span className="mark_star">*</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="text_block">
                            <span>Fine Dining</span>
                            <span className="mark_star">*</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="text_block">
                            <span>Outdoor Catering</span>
                            <span className="mark_star">*</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="text_block">
                            <span> Banquets Hall </span>
                            <span className="mark_star">*</span>
                        </div>
                    </div>
                </Slider>
            </div>
            <div className="menu_list_section rotet_down">
                <Slider className="Slick-Menu" id="menu_list_flow"  {...Slidersetting} arrows={false} slidesToShow={10} autoplay={true} infinite={true} autoplaySpeed={2000} style={{ "width": 5697 }}>
                    <div className="item">
                        <div className="text_block">
                            <span>Door Delivery</span>
                            <span className="mark_star">*</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="text_block">
                            <span>Fine Dining</span>
                            <span className="mark_star">*</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="text_block">
                            <span>Outdoor Catering</span>
                            <span className="mark_star">*</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="text_block">
                            <span> Banquets Hall </span>
                            <span className="mark_star">*</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="text_block">
                            <span>Fine Dining</span>
                            <span className="mark_star">*</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="text_block">
                            <span>Door Delivery</span>
                            <span className="mark_star">*</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="text_block">
                            <span>Fine Dining</span>
                            <span className="mark_star">*</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="text_block">
                            <span>Outdoor Catering</span>
                            <span className="mark_star">*</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="text_block">
                            <span> Banquets Hall </span>
                            <span className="mark_star">*</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="text_block">
                            <span>Fine Dining</span>
                            <span className="mark_star">*</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="text_block">
                            <span> Banquets Hall </span>
                            <span className="mark_star">*</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="text_block">
                            <span>Fine Dining</span>
                            <span className="mark_star">*</span>
                        </div>
                    </div>
                </Slider>
            </div>
        </>
    )
}

export default TextFlow