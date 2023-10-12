import React from 'react'
import { Route, Routes,  } from 'react-router-dom';
import Home from '../components/Home/Main'
import HomeTwo from '../components/HomeTwo/Main'
import HomeThree from '../components/HomeThree/Main'
import MenuList1 from '../components/MenuList1/Main'
import MenuList2 from '../components/MenuList2/Main'
import MenuList3 from '../components/MenuList3/Main'
import About from '../components/About/Main'
import Reserv1 from '../components/Reserv1/Main'
import Resrv2 from '../components/Resrv2/Main'
import Reviews from '../components/Reviews/Main'
import OurChef from '../components/OurChef/Main'
import Contact from '../components/Contact/Main'
import BlogList from '../components/BlogList/Main'
import BlogDetail from '../components/BlogDetail/Main'
import Gallery from '../components/Gallery/Main'

function Index() {
    
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home2" element={<HomeTwo />} />
          <Route path="/home3" element={<HomeThree />} />
          <Route path="/menulist1" element={<MenuList1 />} />
          <Route path="/menulist2" element={<MenuList2 />} />
          <Route path="/menulist3" element={<MenuList3 />} />
          <Route path="/about" element={<About />} />
          <Route path="/reservation1" element={<Reserv1 />} />
          <Route path="/reservation2" element={<Resrv2 />} />
          <Route path="/review" element={<Reviews />} />
          <Route path="/ourchef" element={<OurChef />} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/bloglist" element={<BlogList />} />
          <Route path="/blogdetail" element={<BlogDetail/>} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
    </>
  )
}

export default Index