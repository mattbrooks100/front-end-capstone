import React from "react";
import MenuLinks from "./MenuLinks";
import SocialMedia from "./SocialMedia";
import SubFooter from "./SubFooter";

const Footer = () => {
  return (
    <div className="flex flex-col w-full items-center bg-black text-white mt-28 mb-14 pb-4">
      <div className="flex w-3/4 justify-between">
        <MenuLinks />
        <SocialMedia />
      </div>
      <div className="flex w-3/4">
        <SubFooter />
      </div>
    </div>
  );
};

export default Footer;
