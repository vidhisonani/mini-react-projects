import React from "react";
import Img2 from "../../assets/hero-img.png";

function Serives() {
  const ServiceData = [
    {
      id: 1,
      img: Img2,
      name: "Espresso",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, quos!",
      aosDelay: "100",
    },
    {
      id: 2,
      img: Img2,
      name: "Americano",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, quos!",
      aosDelay: "100",
    },
    {
      id: 3,
      img: Img2,
      name: "Americano",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, quos!",
      aosDelay: "100",
    },
  ];
  return (
    <>
      <div id="services" className="scroll-mt-28"></div>
      <div className="py-16 bg-linear-to-br from-coffeeLight to-white dark:from-brandDark dark:to-coffeeDark">
        <div className="mx-auto">
          <div className="text-center mb-14">
            <h1 className="text-3xl sm:text-4xl font-bold font-cursive text-gray-800 dark:text-coffeeLight">
              Best Coffee For You
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 sm:gap-8 justify-items-center">
            {ServiceData.map((data, index) => {
              return (
                <div
                  data-aos="fade-up"
                  data-aos-delay={data.aosDelay}
                  key={index}
                  className="relative group rounded-2xl w-full max-w-[280px] pt-16 sm:pt-20 pb-6 mx-auto bg-white dark:bg-coffeeDark hover:bg-primary hover:text-white shadow-xl dark:shadow-black/40 duration-300"
                >
                  <div className="h-[120px] sm:h-[140px]">
                    <img
                      src={data.img}
                      alt={data.name}
                      className="w-[160px] sm:w-[180px] block mx-auto -translate-y-14 group-hover:scale-110 group-hover:rotate-6 duration-300"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h1 className="text-lg sm:text-xl font-bold">
                      {data.name}
                    </h1>
                    <p className="text-gray-500 dark:text-gray-300 group-hover:text-white duration-300 text-sm line-clamp-2">
                      {data.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Serives;
