import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Video() {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".videoContainer",
        start: "top -10%",
        end: "bottom bottom",
        scrub: 2,
      },
    });

    tl.to(
      ".clipRectangle",
      {
        "--clipReact": "28%",
        "--clipReactRound": "22px",
        ease: "power2",
      },
      "b"
    )
      .to(
        ".text-left",
        {
          xPercent: -200,
        },
        "b"
      )
      .to(
        ".text-right",
        {
          xPercent: 200,
        },
        "b"
      );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <video
      id="page3-video"
      autoPlay
      loop
      muted
      className="clipRectangle h-full w-full object-cover"
      src="/Architectural_animation_for_the_office_building_in_Australia_3D_Visualization_for_Fenders_Katsalidis(2160p).webm"
    />
  );
}

export default Video;
