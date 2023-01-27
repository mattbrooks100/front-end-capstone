import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const SubFooter = () => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-row">
        <FaMapMarkerAlt className="pb-1"/>
        <a href="#" className="text-xs ml-2 mr-6">United States</a>
        <div className="text-gray-500 text-xs">&copy; 2023 Nike, Inc. All Rights Reserved</div>
      </div>
    </div>
  );
};

export default SubFooter;
