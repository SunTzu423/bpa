import React, { useEffect } from 'react'
import Header from '../Header/Main'
import Footer from '../Footer/Main'
import AbtBanner from '../MenAbout/AbtBanner'
import TextFlow from '../MenAbout/TextFlow'
import Chef from '../MenAbout/Chef'
import Videoabt from '../MenAbout/Videoabt'
import Journey from '../MenAbout/Journey'
import Aos from 'aos'

function Main() {

  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  return (
    <div className='page_wrapper'>
      <Header />
      <AbtBanner />
      <TextFlow />
      <Chef />
      <Videoabt />
      <Journey />
      <Footer />
    </div>
  )
}

export default Main