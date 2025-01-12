
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);
import { ScrollTrigger } from "gsap/ScrollTrigger";
const NavbarShadowAnimation = () => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
        scrollTrigger: {
            scroller: "body",
            // markers: true,
            start: "1% top",
            end: "2% bottom",
            scrub: 2,
        }
    })
    useGSAP(() => {
        tl.to(".navbar-main", {
            boxShadow: '0px 2px 2px 2px rgba(0, 0, 0 ,0.4)',
            /* From https://css.glass */
            background: "rgba(255, 255, 255, 0.09)",
            backdropFilter: 'blur(6.1px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.65)',
        })
    })
}

export default NavbarShadowAnimation;