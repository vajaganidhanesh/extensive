import React from "react";

function Description({ props }) {
  return (
    <>
      <div className=" pt-[11px] uppercase tracking-0.005 leading-[21px] font-normal text-custom-orange text-[17px] font-Source ">
        digital marketing
      </div>
      <div className=" text-custom-color-1 font-playfair text-[49px] leading-[65px] xl:pt-[11px]">
        {props}
      </div>
      <div className="pt-[14px] text-white text-[35px] leading-[44px] tracking-0.0025 font-Source font-normal">
        Our ad campaign brought 80% footfall to the company
      </div>
    </>
  );
}

export default Description;
