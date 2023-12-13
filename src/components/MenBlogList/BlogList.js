import React from 'react'
import { Link } from 'react-router-dom'
import Blog01 from '../../assets/images/blog-list-1.png'
import Blog02 from '../../assets/images/author1.png'
import Blog03 from '../../assets/images/blog-list-2.png'
import Blog04 from '../../assets/images/author2.png'
import Blog05 from '../../assets/images/blog-list-3.png'
import Blog06 from '../../assets/images/author1.png'
import Blog07 from '../../assets/images/blog-list-4.png'
import Blog08 from '../../assets/images/author2.png'
import Blog09 from '../../assets/images/blog-recent-1.png'
import Blog10 from '../../assets/images/blog-recent-2.png'
import Blog11 from '../../assets/images/blog-recent-3.png'
import Blog12 from '../../assets/images/blog-recent-4.png'

function BlogList() {
  return (
    <>
      <section className="blog_list_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog_left_side">
                <div className="blog_panel" data-aos="fade-up" data-aos-duration={1500} >
                  <div className="main_img">
                    <Link to="Cl">
                      <img src={Blog01} alt="image" />
                    </Link>
                  </div>
                  <div className="blog_info">
                    <span className="date">12 Dec, 2022</span>
                    <h2>
                      <Link to="/blogdetail">
                        A rare taste you can’t find anywhere in Newyork
                      </Link>
                    </h2>
                    <p>
                      Dummy text of the printing and types etting industry lorem Ipsum
                      has been the indu has been the industrys standard dummy text
                      ever since the when an unknown printer took a galley of type and
                      scrambled it to make a type specimen book. It has survived not
                      only five centuries, but also the leap into electronic
                      typesetting.
                    </p>
                    <div className="authore_block">
                      <div className="authore">
                        <div className="img">
                          <img src={Blog02} alt="image" />
                        </div>
                        <div className="text">
                          <h4>Willium Joe</h4>
                          <span>Master Chef</span>
                        </div>
                      </div>
                      <div className="blog_tag">
                        <span>tasty food</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog_panel" data-aos="fade-up" data-aos-duration={1500} >
                  <div className="main_img">
                    <Link to="/blogdetail">
                      <img src={Blog03} alt="image" />
                    </Link>
                  </div>
                  <div className="blog_info">
                    <span className="date">March 18, 2023</span>
                    <h2>
                      <Link to="/blogdetail">
                        enjoyable dining experience at rich location of Paris!
                      </Link>
                    </h2>
                    <p>
                      Dummy text of the printing and types etting industry lorem Ipsum
                      has been the indu has been the industrys standard dummy text
                      ever since the when an unknown printer took a galley of type and
                      scrambled it to make a type specimen book. It has survived not
                      only five centuries, but also the leap into electronic
                      typesetting.
                    </p>
                    <div className="authore_block">
                      <div className="authore">
                        <div className="img">
                          <img src={Blog04} alt="image" />
                        </div>
                        <div className="text">
                          <h4>Nishi Zoya</h4>
                          <span>Author</span>
                        </div>
                      </div>
                      <div className="blog_tag">
                        <span>dining</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog_panel" data-aos="fade-up" data-aos-duration={1500}>
                  <div className="main_img">
                    <Link to="/blogdetail">
                      <img src={Blog05} alt="image" />
                    </Link>
                  </div>
                  <div className="blog_info">
                    <span className="date">05 Dec, 2022</span>
                    <h2>
                      <Link to="/blogdetail">
                        Planning your online business goals with a specialist at
                        codley.
                      </Link>
                    </h2>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and types
                      etting industry lorem Ipsum has been the indu has been the
                      industrys standard dummy text ever since the when an unknown
                      printer took a galley of type and.
                    </p>
                    <div className="authore_block">
                      <div className="authore">
                        <div className="img">
                          <img src={Blog06} alt="image" />
                        </div>
                        <div className="text">
                          <h4>Stephan Joe</h4>
                          <span>Author</span>
                        </div>
                      </div>
                      <div className="blog_tag">
                        <span>tasty menu</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog_panel" data-aos="fade-up" data-aos-duration={1500} >
                  <div className="main_img">
                    <Link to="/blogdetail">
                      <img src={Blog07} alt="image" />
                    </Link>
                  </div>
                  <div className="blog_info">
                    <span className="date">02 Dec, 2022</span>
                    <h2>
                      <Link to="/blogdetail">
                        Tech conference with global activities
                      </Link>
                    </h2>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and types
                      etting industry lorem Ipsum has been the indu has been the
                      industrys standard dummy text ever since the when an unknown
                      printer took a galley of type and.
                    </p>
                    <div className="authore_block">
                      <div className="authore">
                        <div className="img">
                          <img src={Blog08} alt="image" />
                        </div>
                        <div className="text">
                          <h4>Cyrus Melabo</h4>
                          <span>Author</span>
                        </div>
                      </div>
                      <div className="blog_tag">
                        <span>Healthy</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog_right_side">
                <div className="blog_search_block bg_box" data-aos="fade-up" data-aos-duration={1500} >
                  <form action="submit">
                    <div className="form-group">
                      <h3>Search post</h3>
                      <div className="form_inner">
                        <input type="text" className="form-control" />
                        <button>
                          <i className="icofont-search-1" />
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="recent_post_block bg_box" data-aos="fade-up" data-aos-duration={1500} >
                  <h3>Recent Post</h3>
                  <ul className="recent_blog_list">
                    <li>
                      <Link to="/blogdetail">
                        <div className="img">
                          <img src={Blog09} alt="image" />
                        </div>
                        <div className="text">
                          <h4>Famous Dishes, Delicious Cakes and Fresh Drinks</h4>
                          <span>Feb 25, 2023</span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/blogdetail">
                        <div className="img">
                          <img src={Blog10} alt="image" />
                        </div>
                        <div className="text">
                          <h4>Unforgettable Memories From Europe Journey</h4>
                          <span>Feb 20, 2023</span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/blogdetail">
                        <div className="img">
                          <img src={Blog11} alt="image" />
                        </div>
                        <div className="text">
                          <h4>A restaurant with Traditional delicious menu.</h4>
                          <span>Feb 14, 2023</span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/blogdetail">
                        <div className="img">
                          <img src={Blog12} alt="image" />
                        </div>
                        <div className="text">
                          <h4>A rare taste you can’t find anywhere in Newyork</h4>
                          <span>Feb 09, 2023</span>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="categories_block bg_box" data-aos="fade-up" data-aos-duration={1500} >
                  <h3>Categories</h3>
                  <ul>
                    <li>
                      <Link to="#" className="cat">
                        <i className="icofont-folder-open" /> Best Steaks
                      </Link>
                      <span>(30)</span>
                    </li>
                    <li>
                      <Link to="#" className="cat">
                        <i className="icofont-folder-open" /> Real Steaks{" "}
                      </Link>
                      <span>(22)</span>
                    </li>
                    <li>
                      <Link to="#" className="cat">
                        <i className="icofont-folder-open" /> Tasty Food
                      </Link>
                      <span>(12)</span>
                    </li>
                    <li>
                      <Link to="#" className="cat">
                        <i className="icofont-folder-open" /> Foodstagram
                      </Link>
                      <span>(48)</span>
                    </li>
                    <li>
                      <Link to="#" className="cat">
                        <i className="icofont-folder-open" /> Yummy
                      </Link>
                      <span>(58)</span>
                    </li>
                    <li>
                      <Link to="#" className="cat">
                        <i className="icofont-folder-open" /> Foodie
                      </Link>
                      <span>(17)</span>
                    </li>
                    <li>
                      <Link to="#" className="cat">
                        <i className="icofont-folder-open" /> Delicious
                      </Link>
                      <span>(42)</span>
                    </li>
                  </ul>
                </div>
                <div className="tags_block bg_box" data-aos="fade-up" data-aos-duration={1500} >
                  <h3>Tags</h3>
                  <ul>
                    <li>
                      <Link to="#">Steak</Link>
                    </li>
                    <li>
                      <Link to="#">Breakfast</Link>
                    </li>
                    <li>
                      <Link to="#">Food</Link>
                    </li>
                    <li>
                      <Link to="#">Delicious</Link>
                    </li>
                    <li>
                      <Link to="#">Real Steaks</Link>
                    </li>
                    <li>
                      <Link to="#">Dinner</Link>
                    </li>
                    <li>
                      <Link to="#">Yummy</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="pagination_block" data-aos="fade-up" data-aos-duration={1500} >
            <div className="row">
              <div className="col-lg-8">
                <ul>
                  <li>
                    <Link to="#" className="prev">
                      <i className="icofont-double-left" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">1</Link>
                  </li>
                  <li>
                    <Link to="#" className="active">
                      2
                    </Link>
                  </li>
                  <li>
                    <Link to="#">3</Link>
                  </li>
                  <li>
                    <Link to="#">4</Link>
                  </li>
                  <li>
                    <Link to="#" className="next">
                      <i className="icofont-double-right" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogList