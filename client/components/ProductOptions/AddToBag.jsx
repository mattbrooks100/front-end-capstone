import React, { useState } from "react";
const AddToBag = () => {

  const [counter, setCounter] = useState(0)

const handleClick = (FaShoppingBag) => {
  setCounter(counter + 1)
  console.log(counter)
}
  return (
    <button className="bg-black text-white w-full mt-4 py-4 rounded-full hover:bg-gray-500" onClick={handleClick}>
      Add to Bag
    </button>
  );
};

export default AddToBag;
