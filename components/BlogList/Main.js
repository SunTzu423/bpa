import React, {useEffect} from 'react'
import Header from '../Header/Main'
import Footer from '../Footer/Main'
import BlogList from '../MenBlogList/BlogList'
import BlogListBred from '../BredCrumb/BlogListBred'
import Aos from 'aos'

function Main() {

    useEffect(() => {
        Aos.init();
        Aos.refresh();
      }, []);

    return (
        <div className='page_wrapper'>
            <Header />
            <BlogListBred/>
            <BlogList/>
            <Footer />
        </div>
    )
}

export default Main