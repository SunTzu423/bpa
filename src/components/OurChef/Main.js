import React,{useEffect} from 'react'
import Header from '../Header/Main'
import Footer from '../Footer/Main'
import Abtbanner from '../Menourchef/Abtbanner'
import Ourchefsection from '../Menourchef/Ourchefsection'
import Ourchefteam from '../Menourchef/Ourchefteam'
import Aos from 'aos'

function Main() {

    useEffect(() => {
        Aos.init();
        Aos.refresh();
      }, []);

    return (
        <div className='page_wrapper'>
            <Header />
            <Abtbanner />
            <Ourchefsection/>
            <Ourchefteam/>
            <Footer />
        </div>
    )
}

export default Main