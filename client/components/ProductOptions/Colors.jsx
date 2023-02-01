import React from "react";
import nike_white from "../../photos/nike_white.png";
import nike_black from "../../photos/nike_black.png";
import nike_design_your_own from "../../photos/nike_design_your_own.png";

const Colors = () => {
  return (
    <div className="flex flex-row gap-x-1 my-8">
      <button className="rounded-md focus:outline focus:outline-1 active:outline active:outline-1">
        <img
          className="max-h-[70px] rounded-md  cursor-pointer hover:border hover:border-black"
          src={nike_white}
        ></img>
      </button>
      <button className="rounded-md focus:outline focus:outline-1">
        <img
          className="max-h-[70px] rounded-md  cursor-pointer hover:border hover:border-black"
          src={nike_black}
        ></img>
      </button>
      <button className="rounded-md focus:outline focus:outline-1">
        <img
          className="max-h-[70px] rounded-md  cursor-pointer hover:border hover:border-black"
          src={nike_design_your_own}
        ></img>
      </button>
    </div>
  );
};

export default Colors;
