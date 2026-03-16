import React, { useEffect, useState } from "react";
import Slider from "react-slick";

function Testimonial() {
  const TestimonialData = [
    {
      id: 1,
      name: "Aarav Mehta",
      text: "The coffee here is absolutely amazing. Rich flavor and perfect aroma!",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      name: "Priya Sharma",
      text: "A peaceful place with the best cold coffee I've ever had.",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 3,
      name: "Rohan Patel",
      text: "Premium taste and excellent service. Highly recommended!",
      img: "https://randomuser.me/api/portraits/men/76.jpg",
    },
    {
      id: 4,
      name: "Sneha Verma",
      text: "Loved the ambience and the hot coffee. Perfect for work and chill.",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      id: 5,
      name: "Kunal Singh",
      text: "A must-visit place for every coffee lover. Truly premium quality.",
      img: "https://randomuser.me/api/portraits/men/81.jpg",
    },
  ];

  const [slides, setSlides] = useState(3);
  const [sliderKey, setSliderKey] = useState(0);

  useEffect(() => {
    const updateSlides = () => {
      const width = window.innerWidth;
      if (width < 640) setSlides(1);
      else if (width < 1024) setSlides(2);
      else setSlides(3);
    };

    updateSlides(); // on load
    window.addEventListener("resize", updateSlides);

    // force slick rebuild AFTER width is correct
    setTimeout(() => setSliderKey(prev => prev + 1), 200);

    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: slides,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="py-14 dark:bg-coffeeLight overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div data-aos="fade-up" className="text-center mb-20">
          <h1 className="text-4xl font-bold font-cursive text-gray-800">
            Testimonials
          </h1>
        </div>

        <Slider key={sliderKey} {...settings}>
          {TestimonialData.map((data) => (
            <div key={data.id} className="px-2">
              <div className="min-h-[260px] flex flex-col gap-4 shadow-lg py-8 px-6 rounded-xl bg-primary/10 dark:bg-coffeeDark relative">
                <img
                  src={data.img}
                  alt={data.name}
                  className="w-20 h-20 rounded-full mx-auto"
                />
                <p className="text-xs text-center text-gray-600 dark:text-gray-300">
                  {data.text}
                </p>
                <h2 className="text-lg font-bold text-center font-cursive dark:text-coffeeLight">
                  {data.name}
                </h2>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Testimonial;
