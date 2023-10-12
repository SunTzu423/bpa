import React from 'react'
import { Link } from 'react-router-dom'
import Blog01 from '../../assets/images/blog_01.png'
import Blog02 from '../../assets/images/blog_02.png'
import Blog03 from '../../assets/images/blog_03.png'

function Blog() {
  return (
    <>
      <section className="row_am blog_section position-relative">
        <div className="container">
          <div className="section_title text-center py_50" data-aos="fade-up" data-aos-duration={1500} >
            <span className="sub_text">News &amp; updates</span>
            <h2>latest blog post</h2>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="blog_post" data-aos="fade-up" data-aos-duration={1500}>
                <Link to="#" className="img">
                  <img src={Blog01} alt="img" className="img-fluid" />
                </Link>
                <div className="info">
                  <span className="date">17.04.2023</span>
                  <h3>
                    <Link to="/bloglist">
                      A rare taste you can’t find anywhere in Newyork
                    </Link>
                  </h3>
                  <Link to="/bloglist" className="btn btn_text">
                    READ MORE <i className="icofont-long-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="blog_post mx-auto" data-aos="fade-up" data-aos-duration={1500} >
                <Link to="#" className="img">
                  <img src={Blog02} alt="img" className="img-fluid" />
                </Link>
                <div className="info">
                  <span className="date">12.04.2023</span>
                  <h3>
                    <Link to="/bloglist">
                      Marbling so good it melts in your mouth.
                    </Link>
                  </h3>
                  <Link to="/bloglist" className="btn btn_text">
                    READ MORE <i className="icofont-long-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="blog_post ml-auto" data-aos="fade-up" data-aos-duration={1500} >
                <Link to="#" className="img">
                  <img src={Blog03} alt="img" className="img-fluid" />
                </Link>
                <div className="info">
                  <span className="date">08.04.2023</span>
                  <h3>
                    <Link to="/bloglist">
                      Satisfying your steak needs one bite at a time.
                    </Link>
                  </h3>
                  <Link to="/bloglist" className="btn btn_text">
                    READ MORE <i className="icofont-long-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog