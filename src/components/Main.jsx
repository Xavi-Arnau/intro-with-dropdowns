import React from "react";
import heroDesktop from "../assets/image-hero-desktop.png";
import heroMobile from "../assets/image-hero-mobile.png";
import databiz from "../assets/client-databiz.svg";
import audiophile from "../assets/client-audiophile.svg";
import meet from "../assets/client-meet.svg";
import maker from "../assets/client-maker.svg";

const Main = () => {
  return (
    <div className="w-full">
      <div className="md:mx-auto md:w-10/12 h-full flex flex-col md:flex-row md:gap-36">
        <div className="md:w-1/2 flex-flex-col p-8">
          <h1 className="hidden md:block text-8xl font-bold mt-44">
            Make
            <br /> remote work
          </h1>
          <h1 className="text-center md:hidden text-3xl font-bold mt-4 md:mt-44">
            Make remote work
          </h1>
          <p className="text-base text-center md:text-left md:text-xl mt-8 md:mt-16 text-mediumGray">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <div className="flex flex-row justify-center md:justify-start">
            <button className="py-4 px-10 bg-almostBlack text-almostWhite mt-8 md:mt-16 rounded-xl">
              Learn more
            </button>
          </div>

          <div className=" flex flex-row gap-6 justify-around items-center mt-10 md:mt-16">
            <div className="w-1/4">
              <img src={databiz} alt="" />
            </div>
            <div className="w-1/4">
              <img src={audiophile} alt="" />
            </div>
            <div className="w-1/4">
              <img src={meet} alt="" />
            </div>
            <div className="w-1/4">
              <img src={maker} alt="" />
            </div>
          </div>
        </div>
        <div className=" md:w-1/2 md:flex justify-end order-first md:order-last">
          <img
            src={heroDesktop}
            alt=""
            className="hidden md:block max-h-[750px] object-cover"
          />
          <img src={heroMobile} alt="" className=" md:hidden w-full" />
        </div>
      </div>
    </div>
  );
};

export default Main;
