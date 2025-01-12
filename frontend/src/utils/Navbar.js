import gsap from "gsap";
// gsap.registerPlugin(useGSAP);
import { useGSAP } from "@gsap/react";
function NavbarAnimation(toggle) {
  const navTl = gsap.timeline();
  useGSAP(() => {
    navTl.add("same-time-come-navbar");
    if (toggle == true) {
      navTl
        .to(".hamburger-click", {
          zIndex: 99,
          opacity: 1,
        }) 
        .to(
          ".hamburger-navLink-left-side",
          {
            x: 0,
            duration: 1,
            delay: 0.5,
            ease: "circ",
          },
          "same-time-come-navbar"
        )
        .to(
          ".hamburger-image-right-side",
          {
            x: 0,
            duration: 1,
            delay: 0.5,
            ease: "circ",
          },
          "same-time-come-navbar"
        )
        .to(".clicked-hamburger-navLinks li a", {
          opacity: 1,
          stagger: 0.2,
        })
        .to(".clicked-hamburger-navLinks li i", {
          opacity: 1,
        });
    }
  }, [toggle]);
  useGSAP(()=>{
    if (toggle == false) {
      navTl.add("same-time-go-back")
      navTl
        .to(
          ".hamburger-navLink-left-side",
          {
            x: -900,
            duration: 1,
          }, "same-time-go-back")
        .to(
          ".hamburger-image-right-side",
          {
            x: 1000,
            duration:1,
           
          }, "same-time-go-back")
          .to(".clicked-hamburger-navLinks li a", {
            opacity: 0,
            stagger: 0.2,
          })
          .to(".clicked-hamburger-navLinks li i", {
            opacity: 0,
          })
          .to(".hamburger-click", {
            zIndex: -1,
            opacity: 0,
          })
        }
  }, [toggle])
}

export default NavbarAnimation;
