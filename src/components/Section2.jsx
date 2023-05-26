/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

function Section2() {
  return (
    <>
      <div className=" w-full h-full px-16 mt-[298px]">
        <div className="  font-playfair font-normal pb-8 text-2xl leading-8">
          WHO WE ARE
        </div>
        <div className="tracking--0.015 font-playfair text-8xl font-bold leading-[132px] text-custom-color-5  text-99">
          We are Extensive.
        </div>
        <div className=" font-Source pb-5 font-normal text-3xl leading-[44px] pt-6 tracking-tight ">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </div>

        <div className=" pb-3 pt-3 pr-3 mt-5">
          <button className=" px-9 py-5 bg-custom-color text-white font-Source text-xl rounded-xl">
            BOOK A FREE MARKETING AUDIT
          </button>
        </div>
      </div>

      <div className="flex justify-between mt-[235px]">
        <div>
          <div className="relative w-[762.91px] h-[675.54px]">
            <img
              className="absolute left-[-126.91px] "
              src="assets/Ellipse.svg"
              alt=""
            />
            <div className="absolute top-[70px] w-[500px] left-[98px]">
              <div className=" uppercase tracking--0.015 font-playfair text-[99px] font-bold leading-[132px] text-custom-color">
                What <br />
                we do.
              </div>
              <div className=" mt-6 text-[35px] leading-[44px] tracking-[0.0025em] text-custom-color-6">
                We do lots of stuffs , basically adding value to your product.
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-[6px] font-playfair text-custom-color-5 pr-[72px]">
          <p className="tracking--0.015 pl-3 py-8 text-[62px] leading-[83px]">
            Digital Marketing
          </p>
          <p className="tracking--0.015 pl-3 py-8 text-[62px] leading-[83px]">
            Digital Marketing
          </p>
          <p className="tracking--0.015 pl-3 py-8 text-[62px] leading-[83px]">
            Digital Marketing
          </p>
          <p className="tracking--0.015 pl-3 py-8 text-[62px] leading-[83px]">
            Digital Marketing
          </p>
          <button className="px-9 py-5 self-start font-Source tracking--0.015  bg-custom-color-5 text-white rounded-xl font-semibold">
            VIEW ALL
          </button>
        </div>
      </div>
    </>
  );
}

export default Section2;
