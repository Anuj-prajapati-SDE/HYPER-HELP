import gsap from "gsap";
gsap.registerPlugin(useGSAP);
import { useGSAP } from "@gsap/react";
function LoaderAnimation(isLoading) {
  useGSAP(() => {
    const tl1 = gsap.timeline();
    //before counter complete animation
    tl1
      .add("start") 
      .to(
        ".loader-container .main-loader .mid-counter",
        {
          scale: 1,
          duration: 1,
        },
        "start"
      )
      .from(
        ".loader-container .main-loader .upper-img-container",
        {
          x: -900,
          duration: 1,
          opacity: 0,
        },
        "start"
      )
      .from(
        ".loader-container .main-loader .lower-img-container",
        {
          x: 200,
          opacity: 0,
          duration: 1,
        },
        "start"
      );
  }, []);
  useGSAP(() => {
    const tl3 = gsap.timeline();
    if (isLoading >= 100) {
      tl3
        .to(".loader-container .main-loader .mid-counter", {
          scale: 0,
        })
        .to(".loader-container .upper-img-container>img", {
          transform: "translateX(590px)",
        });
      tl3.add("after");
      tl3
        .to(
          ".loader-container .upper-img-container>img",
          {
            transform: "translateX(590px)translateY(30px)",
          },
          "after"
        ) 
        .to(
          ".loader-container .lower-img-container>img",
          {
            transform: "translateY(-40px)",
          },
          "after"
        )
        .to(".loader-container .main-loader", {
          duration: 2,
          opacity: 0,
        })
        .to(".loader-container", {
          display:'none'
        })
    }
  }, [isLoading]);
  useGSAP(() => {
    const homeTl = gsap.timeline();
    if (isLoading > 100) {
      homeTl.add("visible");
      homeTl
        .to(
          ".Background-Blur ",
          {
            duration: 0.5,
            opacity: 1,
            delay: 2,
          },
          "visible"
        )
        .to(
          ".home-image .home-image-1",
          {
            duration: 1,
            delay: 1.5,
            opacity: 1,
          },
          "visible"
        )
        .to(
          ".home-image .home-image-2",
          {
            duration: 1,
            opacity: 1,
            delay: 1.5,
          },
          "visible"
        )
        .to(
          ".loader-container",
          {
            opacity: 0,
          },
          "blur"
        );
      homeTl
        .to(".navbar-main", {
          opacity: 1,
          duration: 0.9,
        })
        .to(".home-title", {
          opacity: 1,
          duration: 0.4,
        })
        .to(".home-title img", {
          opacity: 1,
          duration: 0.4,
          scale: 1,
          ease: "back.inOut",
        })
        .to(".home-title h1", {
          top: "0",
          opacity: 1,
        })
        .to(".home-title h2", {
          top: "0",
          opacity: 1,
        })
        .to(".home-title h3", {
          top: "0",
          opacity: 1,
        })
        .to(".home-main h5", {
          opacity: 1,
          y: "-40",
          duration: 1,
          ease: "bounce.out",
          duration: 0.4,
        });
    }
  }, [isLoading]);
  useGSAP(() => {
    const tl4 = gsap.timeline();
    if (isLoading >= 100) {
      tl4.add("blur");
      tl4
        .to(
          ".loader-container .upper-img-container>img",
          {
            delay: 1.5,
            opacity: 0,
            duration: 1.5,
          },
          "blur"
        )
        .to(
          ".loader-container .lower-img-container>img",
          {
            delay: 1.5,
            opacity: 0,
            duration: 1.5,
          },
          "blur"
        );
    }
  }, [isLoading]);
}
export default LoaderAnimation;
