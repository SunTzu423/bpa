import React,{useEffect} from 'react'
import Header from '../Header/Main'
import Footer from '../Footer/Main'
import ContactUS from '../MenContact/ContactUs'
import Aos from 'aos'

function Main() {

    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);

    return (
        <div className="page_wrapper">
            <Header />
            <ContactUS/>
            <Footer />
        </div>
    )
}

export default Main