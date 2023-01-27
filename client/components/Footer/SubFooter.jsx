import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import SubNavLink from "./SubNavLink";

const SubFooter = () => {
  const subNavLinks = [
    "Guides",
    "Terms of Sale",
    "Terms of Use",
    "Nike Privacy Policy",
    "CA Supply Chains Act",
  ];

  return (
    <div className="flex flex-row w-full justify-between">
      <div className="flex flex-row">
        <FaMapMarkerAlt className="pb-1" />
        <a href="#" className="text-xs ml-2 mr-6">
          United States
        </a>
        <div className="text-gray-500 text-xs">&copy; 2023 Nike, Inc. All Rights Reserved</div>
      </div>
      <div className="text-gray-500 text-xs">
        {subNavLinks.map((link) => (
          <SubNavLink key={link} link={link} />
        ))}
      </div>
    </div>
  );
};

export default SubFooter;
