import AboutScrollAnimation from '../../utils/About';
import aboutSliderImg_1 from '../../assets/Mask-group-2.webp';
import aboutSliderImg_2 from '../../assets/Mask-group-1.webp';
import aboutSliderImg_3 from '../../assets/Mask-group.webp';
import "./About.css";
function About() {
 AboutScrollAnimation() 
  return (
    <section id="About-section" className="about-main">
      <div className="about-1">
        <div className="about-1-left">
          <h2>Get to Know Us</h2>
          <p>
            <span>"</span>Driven by passion and innovation, we craft meaningful
            solutions for tomorrow's challenges. Join us as we pioneer the
            future together.<span>"</span>
          </p>
        </div>
        <div className="about-1-right">
          <div className="about-1-aboutUs">
            <h1>About</h1>
            <div className="About-ImgBox">
              {/* <img src={img} alt="" /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="about-2">
        <div className="about-arrows">
          <i className="ri-arrow-right-double-line"></i>
          <i className="ri-arrow-right-double-line"></i>
          <i className="ri-arrow-right-double-line"></i>
        </div>
        <div className="about-loader-container"> 
          <div className="about-slider-container">
            <div className="about-slider">
              <div className="about-slide-about">
                  <span>01</span>
                   <div  className="about-slide-text-area">
                    <h1>feature name</h1>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae ipsum doloribus animi nobis eaque hic pariatur perspiciatis culpa aliquid totam accusantium dolorum optio, possimus libero inventore quod, beatae sunt natus.
                  </p>
                   </div>
              </div>
              <div className="about-slide-img"> 
             <img src={aboutSliderImg_1} alt=""/>
              </div>
            </div>
            <div className="about-slider">
              <div className="about-slide-about">
              <span>02</span> 
              <div className="about-slide-text-area">
                    <h1>feature name</h1>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae ipsum doloribus animi nobis eaque hic pariatur perspiciatis culpa aliquid totam accusantium dolorum optio, possimus libero inventore quod, beatae sunt natus.
                  </p>
                   </div>
              </div>
              <div className="about-slide-img">
             <img src={aboutSliderImg_2} alt="" />
              </div>
            </div>
            <div className="about-slider">
              <div className="about-slide-about">
              <span>03</span>
              <div className="about-slide-text-area">
                    <h1>feature name</h1>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae ipsum doloribus animi nobis eaque hic pariatur perspiciatis culpa aliquid totam accusantium dolorum optio, possimus libero inventore quod, beatae sunt natus.
                  </p>
                   </div>
              </div>
              <div className="about-slide-img">
                <img src={aboutSliderImg_3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
