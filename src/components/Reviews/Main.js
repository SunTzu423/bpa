import React,{useEffect} from 'react'
import Header from '../Header/Main'
import Footer from '../Footer/Main'
import ReviewBred from '../BredCrumb/ReviewBred'
import CustomerReview from '../MenReview/CustomerReview'
import Aos from 'aos'

function Main() {

    useEffect(() => {
        Aos.init();
        Aos.refresh();
      }, []);

    return (
        <div className='page_wrapper'>
            <Header />
            <ReviewBred />
            <CustomerReview />
            <Footer />
        </div>
    )
}

export default Main