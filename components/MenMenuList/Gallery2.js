import React from 'react'
import Slider from 'react-slick'

const Galleryslider = {
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

function Gallery2() {
    return (
        <>
            <div className="gallery_direction_right gallery_slider offer_menu">
                <Slider className="Slider-Who" id="gallery_flow_right" data-aos="fade-in" data-aos-duration={1500} {...Galleryslider} arrows={false} slidesToShow={11.5} autoplay={true} autoplaySpeed={1000}>
                    {Array.from({ length: 12 }).map((_, index) => (
                        <div className="item" key={index}>
                            <div className="img">
                                <img src={`assets/images/gallery_0${index % 4 + 1}.png`} alt="img" />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    )
}

export default Gallery2