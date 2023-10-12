import React,{useEffect} from 'react'
import Header from '../Header/Main'
import Footer from '../Footer/Main'
import BlogDetail from '../MenBlogDetail/BlogDetail'
import Comment from '../MenBlogDetail/Comment'
import BlogDetailBred from '../BredCrumb/BlogDetailBred'
import Aos from 'aos'

function Main() {
    useEffect(() => {
        Aos.init();
        Aos.refresh();
      }, []);

    return (
        <div className='page_wrapper'>
            <Header />
            <BlogDetailBred/>
            <BlogDetail/>
            <Comment/>
            <Footer />
        </div>
    )
}

export default Main