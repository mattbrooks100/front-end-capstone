import React from "react";
import { useRecoilState } from "recoil";
import sizeState from "../sizeState.jsx";

const Size = ({ size }) => {
  const [sizeSelected, setSizeSelected] = useRecoilState(sizeState);
  
  const handleClick = () => {
    setSizeSelected(size);
  }

  return (
    <button className="flex py-2 justify-center border-solid border border-gray-200 rounded-[5px] hover:border-black focus:outline focus:outline-1" onClick={handleClick}>
      <span>
        M {size} / W {Number(size) + 1.5}
      </span>
    </button>
  );
};

export default Size;
