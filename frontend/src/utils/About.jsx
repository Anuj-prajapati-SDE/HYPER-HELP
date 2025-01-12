import { useGSAP } from "@gsap/react";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const AboutScrollAnimation = ()=> {
    useGSAP(() => { 
      gsap.registerPlugin(ScrollTrigger);
      const tl1 = gsap.timeline();
      tl1.add("scroll-same-time");
      tl1
        .to( 
          ".about-1-right .about-1-aboutUs h1",
          {
            y: -150,
            x: -290,
            fontSize: "4.5vw",
            scrollTrigger: {
              scrub: 2,
              trigger: ".about-1-right .about-1-aboutUs h1",
              scroller: "body",
              start: "-100%",
              end: "-60% ",
              //  markers:true
            },
          },
          "scroll-same-time"
        )
        .to(
          ".about-1 .about-1-left h2",
          {
            width: "100%",
            scrollTrigger: {
              scrub: 2,
              trigger: ".about-1 .about-1-left h2",
              start: "-130%",
              end: "-80%",
              //  markers:true
            },
          },
          "scroll-same-time"
        )
        .to(
          ".about-1 .about-1-right .About-ImgBox",
          {
           opacity:1,
           width:"70%",
           height:"90%",
            scrollTrigger: {
              scrub: 2,
              trigger: ".about-1 .about-1-right",
              start: "-40% top",
              end: "10% bottom",
              //  markers:true,
               scroller:"body"
            },
          }
        );
    }, []);
    useEffect(() => {
      let pinArea = gsap.context(() => {
        const tl = gsap.timeline();
        tl.add("same-time-pin");
        tl.to(
          ".about-slider", 
          {
            transform: "translateX(-200%)",
            duration: 2,
            scrollTrigger: {
              trigger: ".about-2",
              start: "2% 10%",
              end: "90% 11%",
              scrub: 3,
              scroller: "body",
              // markers: true,
              pin: ".about-2",
            },
          },
          "same-time-pin"
        );
        tl.to(
          ".about-arrows i",
          {
            color: "#FF5530",
            stagger: 0.2,
            scrollTrigger: {
              trigger: ".about-2",
              start: "2% 10%",
              end: "90% 11%",
              scrub: 1,
              scroller: "body",
              // markers: true,
            },
          },
          "same-time-pin"
        );
      });
      return () => pinArea.revert();
    }, []);
  };
export default AboutScrollAnimation;