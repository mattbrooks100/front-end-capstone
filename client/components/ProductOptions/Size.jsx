import React from "react";

const Size = ({ size }) => {
  return (
    <button className="flex py-2 justify-center border-solid border border-gray-200 rounded-[5px] hover:border-black focus:outline focus:outline-1">
      <span>
        M {size} / W {Number(size) + 1.5}
      </span>
    </button>
  );
};

export default Size;
