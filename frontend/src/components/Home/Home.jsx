import React from 'react'
import './Home.css'
// import HomeScrollAnimation from '../../utils/Home.jsx'
import Image1 from '../../assets/Bg-img-1.png'
import Image2 from '../../assets/Bg-img-2.png'
import favicon from '../../assets/Website Favicon.png'
// import { Link} from 'react-router-dom' 
import { Link} from 'react-scroll';
import {About, Services, Contact, Footer, Navbar} from '../index.js'

import SmoothScrollProvider from '../../utils/lenis/SmoothScroll.jsx'
function Home() { 
// HomeScrollAnimation() 
  return (   
    <> 
    <SmoothScrollProvider>
      <Navbar></Navbar>
      <section id='Home-section' className="home-main">  
        <div className="home-image"> 
          <div className="home-image-1">
            <img src={Image1} alt="" />
          </div>
          <div className="home-image-2">
            <img src={Image2} alt="" />
          </div>
        </div>
        <div className="Background-Blur">
        <button className='ExploreBtn'>Explore Now</button>
        <Link to="About-section" smooth = {true} duration = {500}><h5 className='scrollDownArrow'>Scroll Down <i className="ri-arrow-down-line "></i></h5></Link>
        </div>
        <div className="home-title">
          <img src={favicon} alt="" />
          <h1>Your One Stop</h1> 
          <h2><span>Solution </span> For All</h2>
          <h3>Problems.</h3>
        </div>
      </section>
      <About></About>
      <Services></Services> 
      <Contact></Contact>
      <Footer></Footer>
    </SmoothScrollProvider>
    </>
  )
}

export default Home;