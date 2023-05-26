import React from "react";

function RepeatImg({ props }) {
  return (
    <div className=" py-6">
      <img src={props} className="w-[164px] h-[211px]" alt="" />
    </div>
  );
}

export default RepeatImg;
