import React from 'react'
import Icon01 from '../../assets/images/title_icon.png'
import abt01 from '../../assets/images/abtban_01.png'
import abt02 from '../../assets/images/abtban_02.png'
import abt03 from '../../assets/images/abtban_03.png'
import abt04 from '../../assets/images/abtban_04.png'
import abt05 from '../../assets/images/abtban_05.png'

function AbtBanner() {
  return (
    <>
      <section className="abt_banner">

        <div className="section_title text-center">
          <span className="icon" data-aos="fade-down" data-aos-duration={1500}>
            <img src={Icon01} alt="img" />
          </span>
          <span className="sub_text mb-1" data-aos="fade-down" data-aos-duration={1500} >
            Our Story{" "}<br />
          </span>
          <h2 data-aos="zoom-in" data-aos-duration={1500}>
            A luxury restaurant with A rare taste you <br /> can’t find anywhere in
            Ohio.
          </h2>
          <p className="lead" data-aos="fade-up" data-aos-duration={1500}>
            Game Day Grill has the best food in town.
          </p>
        </div>
        <div className="abt_img">
          <div className="img" data-aos="fade-right" data-aos-duration={1500} data-aos-delay={200} >
            <img src={abt01} alt="img" />
          </div>
          <div className="img" data-aos="fade-right" data-aos-duration={1500} data-aos-delay={100} >
            <img src={abt02} alt="img" />
          </div>
          <div className="img" data-aos="fade-up" data-aos-duration={1500}>
            <img src={abt03} alt="img" />
          </div>
          <div className="img" data-aos="fade-left" data-aos-duration={1500} data-aos-delay={100} >
            <img src={abt04} alt="img" />
          </div>
          <div className="img" data-aos="fade-left" data-aos-duration={1500} data-aos-delay={200} >
            <img src={abt05} alt="img" />
          </div>
        </div>
      </section>
    </>
  )
}

export default AbtBanner