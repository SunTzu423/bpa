import React, { useEffect } from 'react'
import Header from '../Header/Main'
import Footer from '../Footer/Main'
import ReservOne from '../MainReserv/ReservOne'
import Aos from 'aos'


function Main() {

    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);

    return (
        <div className='page_wrapper'>
            <Header />
            <ReservOne />
            <Footer />
        </div>
    )
}

export default Main