import React,{useEffect} from 'react'
import Header from '../Header/Main'
import Footer from '../Footer/Main'
import Gallery2 from '../MenMenuList/Gallery2'
import OfferMenu2 from '../MenMenuList/OfferMenu2'
import Aos from 'aos'

function Main() {

  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  return (

    <div className='page_wrapper'>
      <Header />
      <Gallery2 />
      <OfferMenu2/>
      <Footer />
    </div>
  )
}

export default Main