import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "./esm/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import BlobCircle from "../others/BlobCircle";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function HorizontalScroll() {
  const projects = [
    {
      name: "Mandelbrot Set With C",
      url: "https://github.com/cristinaAlarcon98/fractol",
      src: "/images/fractol.png",
    },
    {
      name: "Minimalist Twitter",
      url: "https://github.com/cristinaAlarcon98/MinimalistTwitter",
      src: "/images/storyspark.png",
    },
    {
      name: "KamyLikamile",
      url: "https://kamylikamile-test.netlify.app",
      src: "/images/kamilikamile.png",
    },
    {
      name: "Bubble Shooter Game with Assembly",
      url: "https://github.com/cristinaAlarcon98/Bubble-Shooter-Assembly-x86/blob/main/BUBLE8.X68",
      src: "/images/bubbleshooter.png",
    },
    {
      name: "A C library with basic functions made from scratch",
      url: "https://github.com/cristinaAlarcon98/libft",
      src: "/images/libft.png",
    },
    {
      name: "printf function made with C",
      url: "https://github.com/cristinaAlarcon98/ft_printf",
      src: "/images/printf.png",
    },
    {
      name: "get_next_line function made with C",
      url: "https://github.com/cristinaAlarcon98/get_next_line_v2",
      src: "/images/42london.png",
    },
  ];

  useGSAP(() => {
    gsap.to(".slides", {
      x: window.innerWidth < 768 ? "-70vw" : "-60vw",
      scrollTrigger: {
        trigger: ".slides-container",
        start: "center center",
        end: "bottom top",
        scrub: 1,
        pin: true,
        pinReparent: true,
        markers: true,
      },
    });
  });

  return (
    <div className="flex md:flex-row flex-wrap">
      <div className="square flex-col md:w-12/12 ">
        <div className="slides-container w-[2000px]">
          {" "}
          <div className="slides flex space-x-12 ml-40">
            {" "}
            {projects.map((project, index) => (
              <div
                key={index}
                className="relative w-[900px] h-[350px] cursor-pointer transform transition-transform duration-300 hover:scale-105" // Reduced size
                onClick={() => window.open(project.url, "_blank")}
              >
                <img
                  src={project.src}
                  alt={`${project.name} Image`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-xl font-semibold">
                    {project.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HorizontalScroll;
