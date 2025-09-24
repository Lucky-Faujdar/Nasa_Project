import React, { useEffect, useRef } from "react";
import DNA from "../../components/Planets/DNA";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Home2 = () => {
  const h1 = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(
      h1.current,
      {
        y: -100,
        opacity: 0,
        duration: 2,
        ease: "power3.out",
      },
      {
        y: 0,
        opacity: 1,
        ease: "power1.in",
        scrollTrigger: {
          trigger: h1.current,
          start: "top 80%", // jab h1 viewport ke 80% pe aaye
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);
  return (
    <div className="w-full h-full text-white relative">
      {/* Background */}
      <div className="">
        <DNA />
      </div>

      {/* Foreground  */}
      <div data-aos="fade-left" className="absolute top-30 z-10 flex flex-col items-start justify-center h-screen px-10 ">
        <h1 ref={h1} className="text-5xl font-bold mb-10">Space Biology Engine</h1>
        <p className="max-w-[600px] mb-20">
          The Space Biology Knowledge Engine helps students, researchers, and
          scientists explore how life can survive beyond Earth. It uses NASA
          data on plants, microbes, animals, and humans tested in space and on
          Earth under conditions like microgravity, radiation, and lunar soil.
          You can search, filter, and visualize experiments, such as how lettuce
          grows on the Moon or how radiation affects mouse tissues.
        </p>
        <p className="max-w-[700px]">
          For students, it’s a learning tool to understand space biology. For
          researchers and scientists, it provides data to design experiments and
          find new insights. Its mission is to turn space biology data into
          knowledge for living on the Moon, Mars, and beyond.
        </p>
      </div>
    </div>
  );
};

export default Home2;
