import React from "react";
import "./Contact.css";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default function Contact() {
  const ContactScrollAnimation = function scroll() {
    gsap.registerPlugin(ScrollTrigger);
    useGSAP(() => {
      const tl1 = gsap.timeline();  
      tl1.to(".contact_main_container", {
        transform: "rotateX(0deg) perspective(200px)",
        opacity: 1,  
        scrollTrigger: {
          scrub: 2,
          trigger: ".Contact_section",
          start: "50%",
          end: "100",
          // markers: true,
        },
      })
    //   .to("",
    //   {
    //       opacity:1,
    //   })
    }, []); 
  };
  ContactScrollAnimation();
  return (
    <section id="Contact-section" className="Contact_section">
      <div className="contact_main_container"> 
        <div className="main_container_left">
          <h1 className="h1First">Contact us</h1>
          <h1 className="h1Second">Tell us about your projects</h1>
        </div>
        <div className="main_container_right">
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Your Email" /> 
          <textarea
            name=""
            id=""
            cols={20}
            rows={10}
            placeholder="Your Message..."
            defaultValue={""}
          />
          <button>SEND</button>
        </div>
      </div>
    </section>
  );
}
