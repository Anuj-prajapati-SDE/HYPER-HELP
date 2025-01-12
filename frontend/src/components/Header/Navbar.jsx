import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import "./Navbar.css";
import { useState } from "react";
import NavbarAnimation from "../../utils/Navbar";
import NavbarShadowAnimation from '../../utils/Animation/NavbarShadow'
function Navbar() {
  let [toggle, setToggle] = useState(false);
  NavbarAnimation(toggle);
  NavbarShadowAnimation(); 
  return ( 
    <>
        {/* click navbar */}
      <div className= "hamburger-click">
        <nav className="hamburger-nav-container"> 
          <div 
            className=
              "hamburger-navLink-left-side" 
          >
            <div
              className= "hamburger-navLinks-container"> 
              <div
                className= "clicked-hamburger-navLinks">
                <li>
                  <Link to="Home-section" smooth= {true} duration={500}>Home</Link>
                  <i
                    className= "ri-arrow-right-up-line" 
                  ></i>
                </li>
              </div>
              <div
                className="clicked-hamburger-navLinks"
              >
                <li>
                  <Link to= "About-section" smooth={true} duration={500}>About</Link>
                  <i
                    className="ri-arrow-right-up-line" 
                  ></i>
                </li>
              </div>
              <div
                className="clicked-hamburger-navLinks"
              >
                <li>
                  <Link to= "Services-section" smooth = {true} duration={500}>Services</Link>
                  <i
                    className="ri-arrow-right-up-line"
                  ></i>
                </li>
          
              </div>
              <div
                className="clicked-hamburger-navLinks" 
              >
                <li>
                  <Link to="Contact-section" smooth= {true} duration={500}>Contact</Link>
                  <i
                    className="ri-arrow-right-up-line"
                  ></i>
                </li>
              </div>
              <div
                className= "clicked-hamburger-navLinks" 
              >
                <li>
                  <Link to="Footer-section" smooth={true} duration={500}>Footer</Link>
                  <i
                    className= "ri-arrow-right-up-line"
                  ></i>
                </li>         
              </div>
            </div>
          </div>
          <div
            className="hamburger-image-right-side" 
          >
            <div
              className= "hamburger-image-area" 
            >
            </div>
            <div
              className= "clicked-navbar-hamburger" 
            >
              <i
                className="ri-arrow-right-circle-fill" 
                onClick={() => setToggle(!toggle)}
              ></i>
            </div>
          </div>
        </nav>
      </div>
      {/* real navbar */}
      <div className="navbar-main">
        <nav className="nav">
          <div className="navbar-left">
            <div className="navbar-navigation">
              <div className="navLinks">
                <li>
                  <i className="ri-sun-line"></i>
                </li>
              </div> 
              <div className="navLinks">
                <li>
                  <i className="ri-dashboard-line"></i>
                </li>
              </div>
              <div className="navLinks">
                <li>
                  <i className=" ri-user-line"></i>
                </li>
              </div>
            </div>
          </div>
          <div className="navbar-right">
            <div className="navbar-searbar">
              <i className="ri-search-eye-line"></i>
              <input type="text" placeholder="Seacrh.." />
            </div>
            <div className="navbar-hamburger">
              <i
                className="ri-menu-4-line"
                onClick={() => setToggle(!toggle)}
              ></i>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
