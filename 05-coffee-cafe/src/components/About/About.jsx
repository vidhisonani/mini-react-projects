import React from "react";
import BannerImage from "../../assets/bannerImage.png";
import BannerBgImg from "../../assets/banner-img.png";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

function About() {
  const BgImage = {
    backgroundImage: `url(${BannerBgImg})`,
    backgroundColor: "#270c03",
    backgroundPostion: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };
  return (
    <>
      <div id="about" className="scroll-mt-28"></div>
      <div style={BgImage} className="dark:bg-brandDark">
        <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div data-aos="zoom-in">
              <img
                src={BannerImage}
                alt="Banner Img"
                className="max-w-[430] w-full mx-auto spin drop-shadow-xl"
              />
            </div>
            <div className="flex flex-col justify-center gap-6 sm:pt-0 max-w-[90%] mx-auto">
              <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold font-cursive text-coffeeDark ">
                Premium Blen Coffee
              </h1>
              <p data-aos="fade-up" data-aos-delay="300" className="text-sm text-gray-500 tracking-wide leading-5 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                exercitationem minus totam, non alias ipsum vel officiis
                repellendus voluptate molestiae.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-5 text-coffeeDark ">
                  <div data-aos="fade-up" data-aos-delay="300" className="flex items-center gap-3">
                    <GrSecure className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100" />
                    <span>Premium Coffee</span>
                  </div>
                  <div data-aos="fade-up" data-aos-delay="300" className="flex items-center gap-3">
                    <IoFastFood className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100" />
                    <span>Hot Coffee</span>
                  </div>
                  <div data-aos="fade-up" data-aos-delay="300" data-aos-offset="300" className="flex items-center gap-3">
                    <GiFoodTruck className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100" />
                    <span>Cold Coffee</span>
                  </div>
                </div>
                <div data-aos="slide-left" className="border-l-3 border-primary/50 pl-6 space-y-3">
                  <h1 className="text-2xl font-semibold font-cursive text-coffeeDark ">
                    Tea Lover
                  </h1>
                  <p className="text-gray-500 text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                    alias quidem, consectetur corrupti ducimus sit?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
