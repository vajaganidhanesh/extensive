import React from "react";
import "../App.css";

function MainContent() {
  return (
    <div className=" bg-cover relative">
      <img
        src="assets/banner.svg"
        alt="banner"
        className=" w-full h-full object-cover absolute"
        style={{
          width: "100%",
          minHeight: "800px",
        }}
      />
      <div className="absolute z-20 customWidth bg-custom-color-2 bg-opacity-10 top-96">
        <div className=" ps-12 py-8 font-playfair">
          <div className=" text-8xl text-custom-color">We are</div>
          <div className="text-8xl text-custom-color-3"> Extensive</div>
          <div className="text-4xl text-custom-color p-3">
            Helping you stand out in a crowded market
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
