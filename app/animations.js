'use client';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function scrollImgAni(ref, direction) {
    useGSAP(() => {
        gsap.from(ref.current, {
            scale: 0.5,
            x: direction.toLowerCase() === "left" ? -100 : 100,
            duration: 1,
            scrollTrigger: {
                trigger: ref.current,
                start: "top 90%",
                end: "bottom 80%",
                toggleActions: "play none none reverse",
                scrub: true,
            },
            ease: "power1.out",
        });
    })
}