import React from 'react'
import Review01 from '../../assets/images/review_01.png'
import Review03 from '../../assets/images/review_03.png'
import Review04 from '../../assets/images/review_04.png'
import Review05 from '../../assets/images/review_05.png'
import Review06 from '../../assets/images/review_06.png'
import Review07 from '../../assets/images/review_07.png'

const reviewData = [
  {
    image: Review03,
    starCount: 5,
    text: "Howdy, y'all! Game Day Grill's website is a solid 5-star winner. It's as slick as grease on a pig, easy to navigate, and the menu's a heavenly feast. The food's a flavor explosion – burgers that'll make your taste buds dance. Online ordering is smoother than a buttered biscuit. It's a fine website, 5 stars ain't enough. Mosey on over pronto for some mighty fine eats! Yeehaw!",
    name: "Levi Stover",
  },
  {
    image: Review04,
    starCount: 5,
    text: "First visit to Game Day Grill, ordered Bolognese for the kids – best meal ever. Incredibly delicious, like dining on another planet. Kids and I couldn't get enough. Amazing service – attentive, friendly staff, went above and beyond to make our visit enjoyable. Left with full bellies, smiles, and a newfound appreciation for Game Day Grill. Well-deserved 5-star review for an exceptional dining experience.",
    name: "Miles Janow",
  },
  {
    image: Review01,
    starCount: 5,
    text: "It made me stop my One Piece addiction. I picked it back up afterwards, but it was a good distraction. ",
    name: "Kameron Carter",
  },
  {
    image: Review05,
    starCount: 5,
    text: "It was very easy to place a reservation on the website. Their chicken alfredo was the greatest I've ever had in my life. Absolutely will stop by here again with others.",
    name: "Nolan Gregson",
  },
  {
    image: Review06,
    starCount: 5,
    text: "This website is amazing! It is very easy to navigate in, and the design within the website adds a lot to to the feeling of the restaurant.",
    name: "Kenneth Adams",
  },
  {
    image: Review07,
    starCount: 5,
    text: "When I was at Game Day Grill I partook in an enchanting experience, indulged in delectable cuisine, and experience exceptional service. An outstanding steak destination—unequivocally the best!",
    name: "Leon Milliner",
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