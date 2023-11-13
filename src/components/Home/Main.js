import React, { useEffect } from 'react'
import Header from '../Header/Main'
import Banner from '../MenHomeTwo/Banner'
import Menulist from '../MenHomeTwo/Menulist'
import VideoTwo from '../MenHomeTwo/VideoTwo'
import DiscountSection from '../MenHomeTwo/DiscountSection'
import WhoWe from '../MenHomeTwo/WhoWe'
import Testimonial from '../MenHomeTwo/Testimonial'
import Footer from '../Footer/Main'
import Aos from 'aos'


function Main() {

    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);

    return (
        <>
            <div className='index_wraper'>
                <Header />
                <Banner />
                <Menulist />
                <VideoTwo />
                <WhoWe />
                <DiscountSection />
                <Testimonial />
                <Footer />
            </div>
        </>
    )
}

export default Main