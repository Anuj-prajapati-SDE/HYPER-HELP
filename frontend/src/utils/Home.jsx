import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);
import { ScrollTrigger } from "gsap/ScrollTrigger";
const HomeScrollAnimation =() =>{ 
    gsap.registerPlugin(ScrollTrigger)
      useGSAP(()=>{ 
        const tl1 = gsap.timeline(); 
        tl1.add("scroll-same-time"); 
        // tl1.to(".Background-Blur", { 
        //   top:0,
        //    width:"100%", 
        //    height:"100%",
        //    duration:2, 
        //      left:0,
        //      backgroundColor:"rgba(255, 255, 255, 0.8)",
        //   scrollTrigger:{
        //     scrub:2, 
        //     trigger:".navbar-main",
        //     start:"50%",
        //     end:"150%",
        //     // markers:true
        //    }
        // }, "scroll-same-time")
        // start hiding navbar text and scrollDown button   
        tl1.to(".navbar-main", {
         visibility:"hidden",
          duration:0.3,
          scrollTrigger:{
            trigger:".navbar-main",
            start:"10%", 
            end:"100%",
            scrub:2, 
           }
        }, "scroll-same-time")   
        tl1.to(".home-title", {
          duration:0.3,
          stagger:0.3,
          visibility:"hidden",
          scrollTrigger:{
            scrub:2,
            trigger:".home-title",
            start:"15",
            end:"30", 
           }
        }, "scroll-same-time")   
        tl1.to(".scrollDownArrow", {
          duration:1,
          stagger:0.3,
          visibility:"hidden",
          scrollTrigger:{
            scrub:2,
            trigger:".scrollDownArrow",
            start:"15",
            end:"30",
         
           } 
        }, "scroll-same-time")   
        tl1.to(".home-main .Background-Blur .scrollDownBtn", {
          opacity:1,
          visibility:"visible",
          ease:"bounce.in",
          scrollTrigger:{
            scrub:0.3,
            trigger:".home-main .Background-Blur .scrollDownBtn",
            start:"15",
            end:"30" 
           }
        }, "scroll-same-time")   
        tl1.to(".home-image-1", {
          duration:2,
          x:'-75%',
          y:'35%',
          duration:2,
          zIndex:97,
          scrollTrigger:{
            trigger:".navbar-main",
            start:"80%",
            end:"150%",
            scrub:4
           }
        }, "scroll-same-time")   
        tl1.to(".home-image-2", {
          y:"-100%",
          zIndex:97,
          duration:2,
          scrollTrigger:{ 
            trigger:".navbar-main",
            start:"80%",
            end:"150%",
            scrub:4
           }
        }, "scroll-same-time")   
         
      },[])
    } 
export default HomeScrollAnimation;