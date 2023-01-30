import React from "react";
import Reviews from "./reviews.jsx";

const Info = (props) => {
  let count = 3;

  return (
    <div className="container mt-14 font-sans">
      <h4 className="font-semibold mb-2">Shipping*</h4>
      <p className="">
        To get accurate shiping information
        <span className="border-b-2 border-black font-semibold py-1 ml-1">Edit Location</span>
      </p>
      {/**Edit location should have a pop up box to search shipping info for your location */}
      <p className="mt-6 font-semibold">Free Pickup</p>
      <p className="mt-2 font-semibold border-b-2 border-black w-fit">Find a Store</p>
      {/**popup box that searches for stores in the area of the zipcode entered */}
      <p className="mt-6 text-sm text-gray-400">*Faster Shipping options may be available</p>
      <p className="mt-12 leading-7">
        The radiance lives on in the Nike Air Force 1 ’07, the b-ball OG that puts a fresh spin on
        what you know best: durably stitched overlays, clean finishes and the perfect amount of
        flash to make you shine.
      </p>
      <ul className="mt-8 leading-8 list-disc ml-6">
        <li>Shown: Tan/White</li>
        <li>Style: Drippy</li>
      </ul>
      <div className="pb-10 border-b border-gray-200">
        <p className="mt-6 font-semibold border-b-2 border-black w-fit">View Product Details</p>
      </div>

      <Reviews />
    </div>
  );
};

export default Info;
