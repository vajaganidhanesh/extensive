import React from "react";
import "../App.css";

function MainContent() {
  return (
    <>
      <div className=" bg-cover relative">
        <img src="assets/banner.svg" alt="banner" className=" w-full h-full" />
        <div className="absolute z-20 customWidth bg-custom-color-2 bg-opacity-10 py-8 pl-[72px] top-[211px]">
          <div className="font-playfair">
            <div className=" text-8xl text-custom-color leading-[132px]">
              We are <br />
              <span className=" text-custom-color-3">Extensive</span>
            </div>
            {/* <div className="text-8xl text-custom-color-3"> Extensive</div> */}
            <div className="text-4xl text-custom-color leading-[65px] pt-8 pr-[20px] text-[49px] ">
              Helping you stand out in a crowded market
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainContent;
