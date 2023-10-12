import React from 'react'
import Review01 from '../../assets/images/review_01.png'
import Review03 from '../../assets/images/review_03.png'
import Review04 from '../../assets/images/review_04.png'
import Review05 from '../../assets/images/review_05.png'
import Review06 from '../../assets/images/review_06.png'
import Review07 from '../../assets/images/review_07.png'
import Review08 from '../../assets/images/review_08.png'
import Review09 from '../../assets/images/review_09.png'

const reviewData = [
  {
    image: Review01,
    starCount: 5,
    text: "It’s a great experience. The ambiance is realy very welcoming and charming. Amazing food, wines and services.",
    name: "Marry Christina",
  },
  {
    image: Review03,
    starCount: 5,
    text: "Amazing ambience, great food, very courteous staff. Overall very good experience. Best place to have real steak food.",
    name: "Willium Joe",
  },
  {
    image: Review04,
    starCount: 5,
    text: "The ambiance is realy very welcoming and charming. Amazing food, wines and services. Went to kuro for Sunday lunch. Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took.",
    name: "Marry Christina",
  },
  {
    image: Review05,
    starCount: 5,
    text: "It’s a great experience. The ambiance is realy very welcoming and charming. Amazing food, wines and services.",
    name: "Marry Christina",
  },
  {
    image: Review06,
    starCount: 5,
    text: "It’s a great experience. The ambiance is realy very welcoming and charming. Amazing food, wines and services.",
    name: "Marry Christina",
  },
  {
    image: Review07,
    starCount: 5,
    text: "Amazing ambience, great food, very courteous staff. Overall very good experience. Best place to have real steak food.",
    name: "Willium Joe",
  },
  {
    image: Review08,
    starCount: 5,
    text: "It’s a great experience. The ambiance is realy very welcoming and charming. Amazing food, wines and services.",
    name: "Marry Christina",
  },
  {
    image: Review09,
    starCount: 5,
    text: "Amazing ambience, great food, very courteous staff. Overall very good experience. Best place to have real steak food.",
    name: "Willium Joe",
  },

];



function CustomerReview() {
  return (
    <>
      <section className="row_am coustomer_review_section">
        <div className="container">
          <div className="coustomer_inner">
            {reviewData.map((review, index) => (
              <div key={index} className="review_box with_text" data-aos="fade-up" data-aos-duration={1500} >
                <span className="quotes left_quote">
                  <i className="icofont-quote-left" />
                </span>
                <div className="user_img">
                  <img src={review.image} alt="img" />
                </div>
                <div className="review">
                  <div className="star">
                    {Array.from({ length: review.starCount }, (_, starIndex) => (
                      <span key={starIndex}>
                        <i className="icofont-star" />
                      </span>
                    ))}
                  </div>
                  <p>{review.text}</p>
                  <h3 className="name">- {review.name}</h3>
                </div>
                <span className="quotes right_quote">
                  <i className="icofont-quote-right" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default CustomerReview