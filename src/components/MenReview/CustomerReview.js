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
    image: Review03,
    starCount: 27,
    text: "Well, howdy there, y'all! I gotta tell y'all 'bout this here website for Game Day Grill. It's a-gonna get a big ol' 5-star hootin' and hollerin' from me, ya hear? I reckon this website's as slick as a fresh coat of grease on a pig at the county fair. It's so dang easy to navigate, even a possum with a broken leg could figure it out! I found everythin' I needed lickety-split. The menu, bless my heart, it's like a smorgasbord of heaven right on my screen. You can find all them tasty vittles without breakin' a sweat. Now, lemme tell ya 'bout the food. Dagnabbit, it's like a flavor explosion in your mouth! They got burgers that'll make your taste buds do a hoedown, and them chicken wings, oh mercy, they're hotter than a hornet's nest. You can see all them scrumptious dishes right on the website, and it's got me hankerin' for a feast every time I visit. And don't get me started on the online orderin'. It's smoother than a buttered biscuit slidin' down a hill. Quick as a jackrabbit on a hot griddle, you can place your order and be on your way to pick up some of the best grub in town. So, in sum, y'all, Game Day Grill's website is as fine as a fiddle at a barn dance. 5 stars ain't enough to do it justice. If you ain't visited their website yet, well, you better mosey on over there pronto, or you'll be missin' out on some mighty fine eats! Yeehaw!",
    name: "Levi Stover",
  },
  {
    image: Review01,
    starCount: 5,
    text: "It made me stop my One Piece addiction. I picked it back up afterwards, but it was a good distraction. ",
    name: "Kameron Carter",
  },
  {
    image: Review04,
    starCount: 5E+0,
    text: "When I first took my family to Game Day Grill, we ordered eggs and rice for the kids. Well, let me tell you, it was the best meal I ever had. The eggs and rice were incredibly delicious. It was like we were dining on a completely different planet. The eggs were perfectly cooked, fluffy, and bursting with flavor. The rice was moist and well-seasoned, which was a pleasant surprise. The kids and I couldn't get enough of it. The service was amazing as well. The staff was attentive, friendly, and made sure we had everything we needed. They greeted us nicely and truly went above and beyond to make our visit enjoyable. We left the restaurant with full bellies, smiles on our faces, and a newfound appreciation for Game Day Grill. I'm giving them a well-deserved 5-star review for making our dining experience exceptional.",
    name: "Miles Janow",
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