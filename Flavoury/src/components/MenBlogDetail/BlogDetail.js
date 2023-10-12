import React from "react";
import { Link } from "react-router-dom";
import Blog1 from '../../assets/images/author1.png'
import Blog2 from '../../assets/images/blog-single.png'

function BlogDetail() {
  return (
    <>
      <section className="blog_detail_section" data-aos="fade-up" data-aos-duration={2000} data-aos-delay={200} >
        <div className="container">
          <div className="blog_inner_pannel">
            <div className="blog_info" data-aos="fade-up" data-aos-duration={2000} >
              <span className="date">March 23, 2023</span>
              <h1>A rare taste you can’t find anywhere in Newyork</h1>
              <div className="authore_block" data-aos="fade-up" data-aos-duration={1000} >
                <div className="authore">
                  <div className="img">
                    <img src={Blog1} alt="image" />
                  </div>
                  <div className="text">
                    <h4>Willium Joe</h4>
                    <span>Master Chef</span>
                  </div>
                </div>
                <div className="blog_tag">
                  <span>Real steak</span>
                </div>
              </div>
              <p>
                Dummy text of the printing and types etting industry lorem Ipsum
                has been the indu has been the industrys standard dummy text
                ever since the when an unknown printer took a galley of type and
                scrambled it to make a type specimen booksince the when an
                unknown printer took a galley of type and scrambled it to make a
                type specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting.
              </p>
            </div>
            <div className="main_img">
              <img src={Blog2} alt="image" />
            </div>
            <div className="info" data-aos="fade-up" data-aos-duration={1500}>
              <h2>benifits of healthy steaks</h2>
              <p>
                Dummy text of the printing and types etting industry lorem Ipsum
                has been the indu has been the industrys standard dummy text
                ever since the when an unknown printer took a galley of type and
                scrambled it to make a type specimen booksince the when an
                unknown printer took a galley of type and scrambled it to make a
                type specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting. Dummy text of the
                printing and types etting industry lorem Ipsum has been the indu
                has been the industrys standard dummy text ever since the when
                an unknown printer took a galley of type and scrambled it to
                make a type specimen booksince the when an unknown printer took
                a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into
                electronic typesetting.
              </p>
            </div>
            <div className="quote_block" data-aos="fade-up" data-aos-duration={1500} >
              <span className="q_icon">“</span>
              <h3>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry lorem Ipsum has been the industrys standard dummy text
                ever since the when an unknown printer.
              </h3>
              <span className="q_icon">”</span>
            </div>
            <div className="info" data-aos="fade-up" data-aos-duration={1500}>
              <h2>Dummy text of the printing and typesetting industry</h2>
              <p>
                Dummy text of the printing and types etting industry lorem Ipsum
                has been the indu has been the industrys standard dummy text
                ever since the when an unknown printer took a galley of type and
                scrambled it to make a type specimen booksince the when an
                unknown printer took a galley of type and scrambled it to make a
                type specimen book. <br /> <br />
                Dummy text of the printing and types etting industry lorem Ipsum
                has been the indu has been the industrys standard dummy text
                ever since the when an unknown printer took a galley of type and
                scrambled it to make a type specimen booksince the when an
                unknown printer took a galley of type and scrambled it to make a
                type specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting. Dummy text of the
                printing and types etting industry lorem Ipsum has been the indu
                has been the industrys standard dummy text ever since the when
                an unknown printer took a galley of a type specimen booksince
                the when an unknown printer.
              </p>
            </div>
            <div className="main_img" data-aos="fade-up" data-aos-duration={1500} >
              <iframe style={{ width: "100%", height: 500 }}
                src="https://www.youtube.com/embed/tgbNymZ7vqY"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen="" />
            </div>
            <div className="info" data-aos="fade-up" data-aos-duration={1500}>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                in dustry lorem Ipsum has been the industrys standard dummy text
                ev er since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic industry.
              </p>
            </div>
            <div className="info" data-aos="fade-up" data-aos-duration={1500}>
              <h2>why we are best in food</h2>
              <ul>
                <li data-aos="fade-up" data-aos-duration={1500}>
                  <p>
                    {" "}
                    <span className="icon">
                      <i className="icofont-check-circled" />
                    </span>{" "}
                    When an unknown printer took a galley of type{" "}
                  </p>
                </li>
                <li data-aos="fade-up" data-aos-duration={1500}>
                  <p>
                    {" "}
                    <span className="icon">
                      <i className="icofont-check-circled" />
                    </span>{" "}
                    Scrambled it to make a type specimen
                  </p>
                </li>
                <li data-aos="fade-up" data-aos-duration={1500}>
                  <p>
                    {" "}
                    <span className="icon">
                      <i className="icofont-check-circled" />
                    </span>{" "}
                    Been the indu has been the
                  </p>
                </li>
                <li data-aos="fade-up" data-aos-duration={1500}>
                  <p>
                    {" "}
                    <span className="icon">
                      <i className="icofont-check-circled" />
                    </span>{" "}
                    Make a type specimen book it has survived.{" "}
                  </p>
                </li>
              </ul>
            </div>
            <div className="blog_authore" data-aos="fade-up" data-aos-duration={1500} >
              <div className="social_media">
                <h3>Share this</h3>
                <ul>
                  <li>
                    <Link to="#">
                      <i className="icofont-facebook" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="icofont-twitter" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="icofont-instagram" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="icofont-pinterest" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogDetail;
