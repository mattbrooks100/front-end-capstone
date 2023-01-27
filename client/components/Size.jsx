import React from "react";

const Size = ({ size }) => {
  return (
    <div className="flex py-2 justify-center border-solid border border-gray-200 rounded-[5px] hover:border-black">
      <span>
        M {size} / W {Number(size) + 1.5}
      </span>
    </div>
  );
};

export default Size;
