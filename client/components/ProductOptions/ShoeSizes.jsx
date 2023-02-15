import React from "react";
import { useRecoilState } from "recoil";
import shoeState from "./shoeState";
import Size from "./Size";

const ShoeSizes = () => {
  const [shoe, setShoe] = useRecoilState(shoeState);

  return (
    <div className="grid grid-cols-2 gap-1 justify-between">
      <h2 className="font-[500] tracking-[0.02em]">Select Size</h2>
      <a href="#" className="flex justify-end font-[500] tracking-[0.02em] text-gray-500">
        Size Guide
      </a>
      {shoe.sizes && shoe.sizes.map((size) => <Size key={size} size={size} />)}
    </div>
  );
};

export default ShoeSizes;
