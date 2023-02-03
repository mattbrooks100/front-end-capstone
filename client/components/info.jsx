import React from "react";
import { ViewDetails } from "./viewDetails.jsx";
import Reviews from "./reviews.jsx";
import FreeShipping from "./freeShipping.jsx";


// changed info to be the same as medium curry info. lines 24-26. Changed color and style in line 30-31

const Info = () => {

  return (
    <div className="container mt-14 font-sans">
      <h4 className="font-semibold mb-2">Shipping*</h4>
      <button className="">
        To get accurate shiping information
        <span className="font-semibold underline underline-offset-8 py-1 ml-1 hover:font-bold">Edit Location</span>
      </button>
      {/**Edit location should have a pop up box to search shipping info for your location */}
      <p className="mt-6 font-semibold">Free Pickup</p>
      <button className="mt-2 font-semibold underline underline-offset-8 w-fit hover:font-bold">Find a Store</button>
      {/**popup box that searches for stores in the area of the zipcode entered */}
      <p className="mt-6 text-sm text-gray-400">*Faster Shipping options may be available</p>
      <p className="mt-12 leading-7">
      Before cementing its status as a streetwear icon and skateboarding staple, 
      the Dunk began its journey on the hardwood as Nike's first-team basketball shoe before cementing its status as a sportswear legend.
       This low-top edition of the timeless silhouette features neutral hues of sail and fossil with spicy hits of medium curry.
      </p>
      <ul className="mt-8 leading-8 list-disc ml-6">
        <li>Shown: Tan/White</li>
        <li>Style: Dunk Low</li>
      </ul>
      <div className="mt-6 pb-10 border-b border-gray-200">
        <ViewDetails />
      </div>
      <FreeShipping />
      <Reviews />
    </div>
  );
};

export default Info;
