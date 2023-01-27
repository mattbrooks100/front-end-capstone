import React from "react";
import { FaTwitter, FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="flex flex-row my-10">
      <button className="grid place-content-center bg-gray-400 h-[30px] w-[30px] rounded-full">
        <FaTwitter className="invert" />
      </button>
      <FaFacebookF />
      <FaYoutube />
      <FaInstagram />
    </div>
  );
};

export default SocialMedia;
