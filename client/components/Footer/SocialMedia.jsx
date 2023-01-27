import React from "react";
import { FaTwitter, FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="flex flex-row my-10 gap-x-4">
      <button className="grid place-content-center bg-gray-500 h-[30px] w-[30px] rounded-full">
        <FaTwitter className="invert" />
      </button>
      <button className="grid place-content-center bg-gray-500 h-[30px] w-[30px] rounded-full">
        <FaFacebookF className="invert" />
      </button>
      <button className="grid place-content-center bg-gray-500 h-[30px] w-[30px] rounded-full">
        <FaYoutube className="invert" />
      </button>
      <button className="grid place-content-center bg-gray-500 h-[30px] w-[30px] rounded-full">
        <FaInstagram className="invert" />
      </button>
    </div>
  );
};

export default SocialMedia;
