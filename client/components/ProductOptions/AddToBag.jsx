import React from "react";

const AddToBag = ({onClick}) => {
  

  return (
    <button className="bg-black text-white w-full mt-4 py-4 rounded-full hover:bg-gray-500" onClick={onClick}>
      Add to Bag
    </button>
  );
};

export default AddToBag;
