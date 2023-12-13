import React, { useEffect } from 'react'
import Header from '../Header/Main'
import Footer from '../Footer/Main'
import Information from '../MenCheckout/Information'
import Aos from 'aos'

function Main() {

  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  return (
    <div className='page_wrapper'>
      <Header />
      <Information />
      <Footer />
    </div>
  )
}

export default Main