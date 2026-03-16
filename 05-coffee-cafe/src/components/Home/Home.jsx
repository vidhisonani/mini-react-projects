import React from "react";
import HeroImg from "../../assets/hero-img.png";

function Home() {
  return (
    <div className="min-h-[650px] sm:min-h-[720px] pt-24 pb-40 bg-linear-to-br from-coffeeLight to-primary dark:from-brandDark dark:to-coffeeDark flex justify-center items-center text-white">
      <div className="container py-8 sm:py-0 mx-auto ">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* TEXT */}
          <div className="order-2 sm:order-1 flex flex-col justify-center gap-6 max-w-[90%] mx-auto">
            <h1
              data-aos="fade-up"
              data-aos-once="true"
              className="text-5xl sm:text-6xl lg:text-7xl font-bold "
            >
              We serve the richest{" "}
              <span
                data-aos="zoom-out"
                data-aos-delay="300"
                className="dark:text-primary font-cursive text-coffeeDark"
              >
                Coffee
              </span>{" "}
              in the city
            </h1>

            <div data-aos="fade-up" data-aos-delay="400">
              <button className="bg-linear-to-r from-primary to-secondaryborder-2 border-primary rounded-full px-6 py-2 hover:scale-105 duration-200">
                Coffee And Code
              </button>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="400" className="flex justify-center items-center">
            <img  
              src={HeroImg}
              alt="coffee"
              className="w-75 sm:w-112.5 spin drop-shadow-2xl dark:brightness-110 dark:drop-shadow-[0_0_35px_rgba(200,159,148,0.3)] transition-all duration-500
    "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
