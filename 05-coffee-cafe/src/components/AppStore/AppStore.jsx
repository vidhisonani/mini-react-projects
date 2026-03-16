import React from "react";
import AppStoreImg from "../../assets/app-store.png";
import GooglePlayImg from "../../assets/google-play.png";
import bgImage from "../../assets/coffee-beans.png";

function AppStore() {
  const BgImage = {
    backgroundImage: `url(${bgImage})`,
    backgroundColor: "#270c03",
    backgroundPostion: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };
  return (
    <>
      <div style={BgImage} className="py-14">
        <div className="min-h-[350px] flex justify-center items-center py-12 sm:py-0 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
            <div data-aos="fade up" data-aos-duration="300" className="space-y-6 max-w-xl mx-auto">
              <h1 className="text-2xl text-center sm:text-left sm:text-4xl font-semibold text-white/90 pl-3">
                Coffee Cafe is available for Android and IOS.
              </h1>
              <div className="flex flex-wrap justify-center sm:justify-start items-center">
                <a href="#">
                  <img
                    src={AppStoreImg}
                    alt="apple-store-icon"
                    className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                  />
                </a>
                <a href="#">
                  <img
                    src={GooglePlayImg}
                    alt="apple-store-icon"
                    className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                  />
                </a>
              </div>
            </div>

            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AppStore;
