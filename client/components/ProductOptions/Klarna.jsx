import React from "react";

const Klarna = ({ price }) => {
  return (
    <div className="flex flex-col mt-8">
      <div className="flex justify-center">4 interest-free payments of ${(price / 4).toFixed(2)} with</div>
      <div className="flex justify-center">
        <span className="text-[16px] font-bold">Klarna.</span>
        <a href="#" className="ml-1 underline">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Klarna;
