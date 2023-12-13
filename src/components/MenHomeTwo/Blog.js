import React from 'react'
import { Link } from 'react-router-dom'
import blog01 from '../../assets/images/blog01.png'
import blog02 from '../../assets/images/blog02.png'
import blog03 from '../../assets/images/blog03.png'

function Blog() {
    return (
        <>
            <section className="row_inner_am blog_card_section bg_white_textcher">
                <div className="container">
                    <div className="section_title text-center" data-aos="fade-up" data-aos-duration={1500} >
                        <span className="sub_text">Tasty stories</span>
                        <h2>our latest blogs</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="blog_card" data-aos="fade-up" data-aos-duration={1500}>
                                <Link to="#" className="img">
                                    <img src={blog01} alt="img" className="img-fluid" />
                                </Link>
                                <div className="info">
                                    <span className="date">19.04.2023</span>
                                    <h3>
                                        <Link to="/BlogList">
                                            A rare taste you can’t find anywhere in Newyork
                                        </Link>
                                    </h3>
                                    <Link to="/BlogList" className="btn btn_text">
                                        READ MORE <i className="icofont-long-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="blog_card" data-aos="fade-up" data-aos-duration={1500}>
                                <Link to="#" className="img">
                                    <img src={blog02} alt="img" className="img-fluid" />
                                </Link>
                                <div className="info">
                                    <span className="date">15.04.2023</span>
                                    <h3>
                                        <Link to="/BlogList">
                                            Marbling so good it melts in your mouth.
                                        </Link>
                                    </h3>
                                    <Link to="/BlogList" className="btn btn_text">
                                        READ MORE <i className="icofont-long-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="blog_card" data-aos="fade-up" data-aos-duration={1500}>
                                <Link to="#" className="img">
                                    <img src={blog03} alt="img" className="img-fluid" />
                                </Link>
                                <div className="info">
                                    <span className="date">08.04.2023</span>
                                    <h3>
                                        <Link to="/BlogList">
                                            Satisfying your steak needs one bite at a time.
                                        </Link>
                                    </h3>
                                    <Link to="/BlogList" className="btn btn_text">
                                        READ MORE <i className="icofont-long-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center" data-aos="fade-in" data-aos-duration={1500}>
                        <Link to="/BlogList" className="btn btn_primary">
                            more blogs
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog