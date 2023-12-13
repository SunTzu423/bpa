import React from 'react'

function Comment() {
  return (
    <>
      <section className="row_am comment_section">
        <div className="container">
          <div className="blog_cooment_block">
            <div className="posted_cooment">
              <div className="section_title" data-aos="fade-up" data-aos-duration={1500} >
                <h2>3 Comments</h2>
              </div>
              <ul>
                <li data-aos="fade-up" data-aos-duration={1500}>
                  <div className="authore_info">
                    <div className="avtar">
                      <img src="assets/images/comment1.png" alt="image" />
                    </div>
                    <div className="text">
                      <span>1 day ago</span>
                      <h4>Willium Shark</h4>
                    </div>
                  </div>
                  <div className="comment">
                    <p>
                      Dummy text of the printing and types etting industry lorem Ipsum
                      has been the indu has been the industrys standardbeen the
                      industrys standard dummy text ever since the when an unknown
                      printer took a galley of type.
                    </p>
                  </div>
                </li>
                <li data-aos="fade-up" data-aos-duration={1500} className="replay_comment" >
                  <div className="authore_info">
                    <div className="avtar">
                      <img src="assets/images/comment2.png" alt="image" />
                    </div>
                    <div className="text">
                      <span>1 day ago</span>
                      <h4>John Due</h4>
                    </div>
                  </div>
                  <div className="comment">
                    <p>
                      Industry lorem Ipsum has been the indu has been the industrys
                      standard dummy.
                    </p>
                  </div>
                </li>
                <li data-aos="fade-up" data-aos-duration={1500}>
                  <div className="authore_info">
                    <div className="avtar">
                      <img src="assets/images/comment3.png" alt="image" />
                    </div>
                    <div className="text">
                      <span>3 days ago</span>
                      <h4>Stephan</h4>
                    </div>
                  </div>
                  <div className="comment">
                    <p>
                      Standard dummy text ever since the when an unknown printer took
                      a galley of type and scrambled it to make a type specimen
                      booksince the when an unknown printer took a galley of type and
                      scrambled it to make a type specimen book.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="comment_form_section">
              <div className="section_title" data-aos="fade-up" data-aos-duration={1500} >
                <h2>
                  Leave a <span>comment</span>
                </h2>
                <p>
                  Your email address will not be published. Required fields are marked
                  *
                </p>
              </div>
              <form action="submit" data-aos="fade-up" data-aos-duration={1500}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Name *" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="email" className="form-control" placeholder="Email *" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Phone" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Website  " />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea className="form-control" placeholder="Comments" defaultValue={""} />
                    </div>
                  </div>
                  <div className="col-md-12 text-left">
                    <button type="submit" className="btn btn_primary">
                      post your comments
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Comment