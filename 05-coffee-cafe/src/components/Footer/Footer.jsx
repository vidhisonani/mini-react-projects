import React from "react";
import FooterImg from "../../assets/FooterImg.png";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  const BgImage = {
    backgroundImage: `url(${FooterImg})`,
    backgroundColor: "#270c03",
    backgroundPostion: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: "400px",
    width: "100%",
  };
  const FooterLinks = [
    { title: "Home", link: "/#" },
    { title: "About", link: "/#about" },
    { title: "Contact", link: "/#contact" },
    { title: "Blog", link: "/#blog  " },
  ];
  return (
    <div style={BgImage} className="text-white">
      <div className="min-h-[400px] dark:bg-black/40 ">
        <div className="max-w-[90vw] mx-auto grid md:grid-cols-3 pb-20 pt-5">
          <div className="py-8 px-4">
            <a
              href="#"
              className="font-semibold tracking-widest text-2xl sm:text-3xl font-cursive"
            >
              Coffee Cafe
            </a>
            <p className="pt-4 text-md">
              Crafted Coffee, Cozy Vibes, Unforgettable Moments – Your Perfect
              Espresso Escape
            </p>
          </div>
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md: pl-10">
            <div className="py-8 px-4">
              <h1 className="text-2xl font-semibold sm:text-left mb-3">Footer Links</h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index)=>{
                  return(<li key={index}><a href={data.link}>{data.title}</a></li>)
                })}
              </ul>
            </div>
            <div className="py-8 px-4">
              <h1 className="text-xl font-semibold sm:text-left mb-3">Quick Links</h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index)=>{
                  return(<li key={index}><a href={data.link}>{data.title}</a></li>)
                })}
              </ul>
            </div>
            <div className="py-8 px-4">
              <h1 className="text-xl font-semibold sm:text-left mb-3">Address</h1>
              <p className="space-y-3 mb-3">Ahmedabad, India</p>
              <p className="space-y-3 mb-3">+91 1234567890</p>
              <div className="space-x-3 mt-6">
                <a href="#"><FaFacebook className="text-3xl inline-block hover:scale-105 duration-200"/></a>
                <a href="#"><FaLinkedin className="text-3xl inline-block hover:scale-105 duration-200"/></a>
                <a href="#"><FaInstagram className="text-3xl inline-block hover:scale-105 duration-200"/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
