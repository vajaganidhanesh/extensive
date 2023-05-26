import React from "react";

function Section3() {
  return (
    <>
      <div className=" mt-[126.46px] bg-custom-color pr-[72px] pl-[72px]">
        <div className=" pt-6">
          <div className="leading-[132px] -tracking-0.015 font-689 uppercase text-[99px] text-white font-playfair">
            our <br /> work.
          </div>
          <button className=" mt-3 bg-custom-orange uppercase px-6 py-5 rounded-xl font-Source text-white font-semibold tracking-0.0125">
            view all
          </button>

          <div className=" pt-[40px]">
            <div className=" flex flex-row ">
              <div className=" min-w-[50%]">
                <img src="assets/image-1.svg" className=" w-full" alt="" />
                <div className=" pt-[11px] uppercase tracking-0.005 leading-[21px] font-normal text-custom-orange text-[17px] font-Source ">
                  digital marketing
                </div>
                <div className=" text-custom-color-1 text-[49px]"></div>
              </div>
              <div className="w-[50%] ml-6">
                <img
                  src="assets/image-2.svg"
                  className="w-[646px] h-[auto] "
                  alt=""
                />
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section3;
