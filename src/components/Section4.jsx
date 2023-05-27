import React from "react";
import RepeatImg from "./RepeatImg";

function Section4() {
  return (
    <>
      <div className=" pl-[72px] pr-[72px] pt-[80px] mb-[41px]">
        <div className=" leading-[132px] font-playfair text-[99px] font-689 text-custom-color tracking-0.015">
          Our <br /> Partners.
        </div>
        <div className=" tracking-0.0025 leading-[44px] font-normal text-custom-orange text-[35px] font-Source ">
          Your success is our success.
        </div>
        <div className="pt-[64px]">
          <div className="flex flex-row justify-between gap-x-[119px]">
            <RepeatImg props={"assets/Pinterest.svg"} />
            <RepeatImg props={"assets/Fpinterest.svg"} />
            <RepeatImg props={"assets/PWA.svg"} />
            <RepeatImg props={"assets/Saas.svg"} />
            <RepeatImg props={"assets/Vpinterest.svg"} />
          </div>
        </div>
        <div className="pt-[24px]">
          <div className="flex flex-row justify-between gap-x-[119px]">
            <RepeatImg props={"assets/Pinterest.svg"} />
            <RepeatImg props={"assets/Fpinterest.svg"} />
            <RepeatImg props={"assets/PWA.svg"} />
            <RepeatImg props={"assets/Saas.svg"} />
            <RepeatImg props={"assets/Vpinterest.svg"} />
          </div>
        </div>
        <div className=" mt-[223px] mb-[41px]">
          <div className="font-playfair text-custom-color text-[99px] font-689 leading-[132px] tracking-0.015">
            Testimonials
          </div>

          <div className=" mt-[80px] mr-[76px] shadow-custom rounded-[18px] mb-6 bg-white ">
            <div className=" p-12 pb-0 flex justify-between">
              <div className="">
                <img
                  src="assets/Profile.svg"
                  className=" xl:w-[168px] xl:h-[168px]"
                  alt=""
                />
              </div>
              <div className="text-[62px] leading-[83px] -tracking-0.005 text-custom-color font-playfair">
                “Working with Extensive is great”{" "}
              </div>
            </div>
            <div className=" px-11 flex w-full justify-end items-center gap-[36px]">
              <div className=" border border-solid border-custom-color border-t-2  xl:w-[161px] lg:w-[189px]"></div>
              <div className="">
                <div className=" leading-[65px] font-normal text-custom-color text-[49px] font-playfair">
                  Hershel
                </div>
                <div className=" leading-[33px] font-normal text-custom-orange text-[25px] font-playfair">
                  Head of director <br /> GGPL PVT LTD.
                </div>
              </div>
            </div>
            <div className="relative  mt-11 flex justify-center items-center px-12 w-full">
              <div className=" mb-12">
                <div className=" absolute self-start  rounded-l-lg w-[62px] h-[18px] bg-custom-color "></div>
                <div className=" w-[155px] rounded-lg h-[18px] bg-custom-color-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section4;
