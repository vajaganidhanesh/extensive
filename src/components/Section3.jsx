import React from "react";
import Description from "./Description";

function Section3() {
  return (
    <>
      <div className=" mt-[126.46px] bg-custom-color pr-[72px] pl-[72px] pb-6">
        <div className=" pt-6">
          <div className="leading-[132px] -tracking-0.015 font-689 uppercase text-[99px] text-white font-playfair">
            our <br /> work.
          </div>
          <button className=" mt-3 bg-custom-orange uppercase px-6 py-5 rounded-xl font-Source text-white font-semibold tracking-0.0125">
            view all
          </button>

          <div className=" pt-[40px] ">
            <div className=" flex flex-row ">
              <div className="">
                <img
                  src="assets/Rectangle-1.png"
                  className="w-[636px]"
                  alt=""
                />
                <Description props={"STARBUCKS"} />
              </div>

              <div className=" ml-4">
                <img
                  src="assets/Rectangle.png"
                  className="w-[636px] h-[478px]"
                  alt=""
                />
                <Description props={"Nike"} />
              </div>
            </div>
          </div>

          <div className=" pt-[40px]">
            <div className=" flex flex-row ">
              <div className="">
                <img src="assets/Rectangle.png" className="w-[636px]" alt="" />
                <Description props={"Nike"} />
              </div>

              <div className=" ml-6">
                <img
                  src="assets/Rectangle-1.png"
                  className="w-[636px] "
                  alt=""
                />
                <Description props={"STARBUCKS"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section3;
