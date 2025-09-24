import React from "react";
import Mars from "../../components/Planets/Mars";

const Home1 = () => {
  return (
    <div className="h-screen text-white relative">
      {/* Background */}
      <div
        data-aos="fade-left"
        className="translate-x-180 translate-y-[-200px] scale-110"
      >
        <Mars />
      </div>

      {/* Foreground */}
      <div className="absolute top-50 left-10 flex flex-col items-start">
        <h1
          data-aos="zoom-out" data-aos-duration="1000"
          className="text-6xl mb-6 tracking-wide font-[font1]"
        >
          BIOLOGY ENGINE
        </h1>
        <p data-aos="fade-right" className="max-w-[400px] mb-12 font-[font2]">
          NASA’s Perseverance rover is exploring Mars, especially Jezero Crater.
          It recently drilled a rock called “Cheyava Falls” and found minerals
          that on Earth form with microbes, suggesting Mars may have had
          conditions for life long ago. The rover also saw interesting rock
          patterns showing ancient chemical activity.
        </p>
        <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" className="max-w-[700px] font-[font2]">
          <p>
            In 2024, Perseverance captured Mars’ first visible-light aurora—a
            green glow caused by solar particles in its atmosphere. These
            findings help us understand Mars’ history and prepare for future
            human exploration.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home1;
