import React,{useEffect} from 'react'
import Header from '../Header/Main'
import Footer from '../Footer/Main'
import MenuList1Bred from '../BredCrumb/MenuList1Bred'
import TextList from '../MenMenuList/TextList'
import DishList from '../MenMenuList/Dishlist'
import TextList1 from '../MenMenuList/TextList1'
import Dishlist1 from '../MenMenuList/Dishlist1'
import Textlist2 from '../MenMenuList/Textlist2'
import Dishlist2 from '../MenMenuList/Dishlist2'
import Reservation from '../MenMenuList/Reservation'
import Aos from 'aos'



function Main() {

  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  return (
    <div className='page_wrapper'>
      <Header />
      <MenuList1Bred />
      <TextList />
      <DishList/>
      <TextList1 /> 
      <Dishlist1 />
      <Textlist2 />
      <Dishlist2 />
      <Reservation/>    
      <Footer />
    </div>
  )
}

export default Main