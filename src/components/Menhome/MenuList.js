import React from 'react'
import Slider from 'react-slick';

const MenuOptions = {
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

function MenuList() {

  return (
    <>
      <div className="menu_list_section">
        <div className="Slider-option" id="menu_list_flow" >
          <Slider className='Slider-List' {...MenuOptions} slidesToShow={10} autoplay={true} arrows={false} autoplaySpeed={2000}>
            <div className="item" style={{ width: "auto" }}>
              <div className="item">
                <div className="text_block">
                  <span>Louisiana Steak</span>
                  <span className="mark_star">*</span>
                </div>
              </div>
            </div>
            <div className="item" style={{ width: "auto" }}>
              <div className="item">
                <div className="text_block">
                  <span>Filet</span>
                  <span className="mark_star">*</span>
                </div>
              </div>
            </div>
            <div className="item" style={{ width: "auto" }}>
              <div className="item">
                <div className="text_block">
                  <span> Ribeye </span>
                  <span className="mark_star">*</span>
                </div>
              </div>
            </div>
            <div className="item" style={{ width: "auto" }}>
              <div className="item">
                <div className="text_block">
                  <span> Rump Steak </span>
                  <span className="mark_star">*</span>
                </div>
              </div>
            </div>
            <div className="item" style={{ width: "auto" }}>
              <div className="item">
                <div className="text_block">
                  <span>Philly Steak </span>
                  <span className="mark_star">*</span>
                </div>
              </div>
            </div>
            <div className="item" style={{ width: "auto" }}>
              <div className="item">
                <div className="text_block">
                  <span>Louisiana Steak</span>
                  <span className="mark_star">*</span>
                </div>
              </div>
            </div>
            <div className="item" style={{ width: "auto" }}>
              <div className="item">
                <div className="text_block">
                  <span>Filet</span>
                  <span className="mark_star">*</span>
                </div>
              </div>
            </div>
            <div className="item" style={{ width: "auto" }}>
              <div className="item">
                <div className="text_block">
                  <span> Ribeye </span>
                  <span className="mark_star">*</span>
                </div>
              </div>
            </div>
            <div className="item" style={{ width: "auto" }}>
              <div className="item">
                <div className="text_block">
                  <span> Rump Steak </span>
                  <span className="mark_star">*</span>
                </div>
              </div>
            </div>
            <div className="item" style={{ width: "auto" }}>
              <div className="item">
                <div className="text_block">
                  <span>Philly Steak </span>
                  <span className="mark_star">*</span>
                </div>
              </div>
            </div>
            <div className="item" style={{ width: "auto" }}>
              <div className="item">
                <div className="text_block">
                  <span>Louisiana Steak</span>
                  <span className="mark_star">*</span>
                </div>
              </div>
            </div>
            <div className="item" style={{ width: "auto" }}>
              <div className="item">
                <div className="text_block">
                  <span>Filet</span>
                  <span className="mark_star">*</span>
                </div>
              </div>
            </div>
            <div className="item" style={{ width: "auto" }}>
              <div className="item">
                <div className="text_block">
                  <span> Ribeye </span>
                  <span className="mark_star">*</span>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  )
}

export default MenuList