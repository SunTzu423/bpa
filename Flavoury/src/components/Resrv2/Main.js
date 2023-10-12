import React,{useEffect} from 'react'
import Header from '../Header/Main'
import Footer from '../Footer/Main'
import ReservTwo from '../MainReserv/ReservTwo'
import Aos from 'aos'


function Main() {

    useEffect(() => {
        Aos.init();
        Aos.refresh();
      }, []);

    return (
        <div className='page_wrapper'>
            <Header />
            <ReservTwo/>
            <Footer />
        </div>
    )
}

export default Main