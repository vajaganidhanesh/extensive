/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

function Section2() {
  return (
    <>
      <div className=" w-full h-full px-16" style={{ marginTop: "298px" }}>
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

      <div className="  flex justify-between" style={{ marginTop: "235px" }}>
        <div class="relative">
          <img
            src="assets/Ellipse.svg"
            class="absolute w-762.91 h-675.54 "
            alt="Your Image"
          />
        </div>
        <div className=" font-playfair text-custom-color-5 px-16">
          <p className=" pl-3 py-8 text-6xl">Digital Marketing </p>
          <p className=" pl-3 py-8 text-6xl">Digital Marketing </p>
          <p className=" pl-3 py-8 text-6xl">Digital Marketing </p>
          <p className=" pl-3 py-8 text-6xl">Digital Marketing </p>
        </div>
      </div>
    </>
  );
}

export default Section2;
