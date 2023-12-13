import React,{useEffect} from 'react'
import Header from '../Header/Main'
import Footer from '../Footer/Main'
import MenuList3Bred from '../BredCrumb/MenuList3Bred'
import MenuSection3 from '../MenMenuList/MenuSection3'
import Aos from 'aos'

function Main() {

  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  return (

    <div className='page_wrapper'>
      <Header />
      <MenuList3Bred />
      <MenuSection3/>
      <Footer />
    </div>
  )
}

export default Main