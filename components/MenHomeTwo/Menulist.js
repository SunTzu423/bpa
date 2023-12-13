import React from 'react'
import Slider from 'react-slick';

const Menuflow = {
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

function Menulist() {
    return (
        <>
            <div className="menu_list_section">
                <Slider className="Slick-Menu" id="menu_list_flow" {...Menuflow} infinite={true} arrows={false} slidesToShow={10} autoplay={true} autoplaySpeed={1000}  >
                    <div className="item">
                        <div className="text_block">
                            <span>Philly Steak </span>
                            <span className="mark_star">*</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="text_block">
                            <span>Louisiana Steak</span>
                            <span className="mark_star">*</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="text_block">
                            <span>Filet</span>
                            <span className="mark_star">*</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="text_block">
                            <span> Ribeye </span>
                            <span className="mark_star">*</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="text_block">
                            <span> Rump Steak </span>
                            <span className="mark_star">*</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="text_block">
                            <span>Philly Steak </span>
                            <span className="mark_star">*</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="text_block">
                            <span>Louisiana Steak</span>
                            <span className="mark_star">*</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="text_block">
                            <span>Filet</span>
                            <span className="mark_star">*</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="text_block">
                            <span> Ribeye </span>
                            <span className="mark_star">*</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="text_block">
                            <span> Rump Steak </span>
                            <span className="mark_star">*</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="text_block">
                            <span> Ribeye </span>
                            <span className="mark_star">*</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="text_block">
                            <span> Rump Steak </span>
                            <span className="mark_star">*</span>
                        </div>
                    </div>
                </Slider>
            </div>
        </>
    )
}

export default Menulist