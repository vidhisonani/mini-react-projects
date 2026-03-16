import React, { useState, useEffect } from "react";
import Logo from "../../assets/logo.png";
import { FaCoffee } from "react-icons/fa";

function Navbar() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.classList.toggle("dark", storedTheme === "dark");
  }, []);
  const Menus = [
    { id: 1, name: "Home", link: "/#" },
    { id: 2, name: "Services", link: "/#services" },
    { id: 3, name: "About", link: "/#about" },
  ];
  return (
    <div className="bg-linear-to-r from-secondary to-secondary/90 dark:from-brandDark dark:to-coffeeDark text-white">
      <div className="mx-auto py-2">
        <div className="flex justify-between items-center gap-4">
          {/* Logo */}
          <div data-aos="fade-down" data-aos-once="true">
            <a
              href="#"
              className="font-bold text-2xl sm:text-3xl flex justify-center items-center gap-2 tracking-wider font-cursive ml-5"
            >
              <img className="w-14" src={Logo} alt="logo" />
              Coffee Cafe
            </a>
          </div>
          {/* Links */}
          <div data-aos="fade-down" data-aos-once="true" data-aos-delay="300" className="flex justify-between items-center gap-4">
            <ul className="hidden sm:flex items-center gap-4">
              {Menus.map((data, index) => (
                <li key={index}>
                  <a
                    href={data.link}
                    className="inline-block text-xl py-4 px-4 text-white/70 hover:text-white dark:hover:text-color-coffeeLight duration-200"
                  >
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>
            <button className="bg-primary/70 dark:bg-coffeeDark px-4 py-2 rounded-full hover:scale-105 duration-200 flex items-center gap-3">
              Order <FaCoffee className="text-xl cursor-pointer " />
            </button>
            {/* dark mode toggle  */}
            <div className="flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className="rounded-full p-2 mr-2 bg-white/10 dark:bg-black/20 hover:scale-110 transition-all duration-300"
              >
                {theme === "light" ? (
                  /* Moon → espresso */
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-7 h-7 text-color-primary"
                    fill="currentColor"
                  >
                    {/* moon path */}
                    <path d="M10.516 2.043c.18.234.206.55.067.81A8.21 8.21 0 0 0 9.668 6.525c0 4.312 3.495 7.807 7.807 7.807 1.329 0 2.578-.331 3.672-.915.259-.139.576-.113.81.067.234.18.34.48.273.767-1.074 4.585-5.189 8-10.103 8C6.396 22.25 1.75 17.604 1.75 11.873c0-4.914 3.415-9.029 8-10.103.287-.067.587.039.766.273Z" />
                  </svg>
                ) : (
                  /* Sun → coffee cream */
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-7 h-7 text-coffeeLight"
                    fill="currentColor"
                  >
                    {/* sun path */}
                    <path d="M12 6.25c3.176 0 5.75 2.574 5.75 5.75S15.176 17.75 12 17.75 6.25 15.176 6.25 12 8.824 6.25 12 6.25Z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
