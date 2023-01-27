import React from "react";
import { FaRegHeart } from "react-icons/fa";

const Favorite = () => {
  return (
    <button className="flex flex-row justify-center w-full mt-3 py-4 border border-gray-300 rounded-full hover:border-black">
      Favorite
      <FaRegHeart className="mt-1 ml-3" />
    </button>
  );
};

export default Favorite;
