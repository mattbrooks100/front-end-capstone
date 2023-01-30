import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";

const FreeShipping = () => {
  const [shipShow, setShipShow] = useState(false);

  return (
    <div className="py-8 border-b border-gray-200">
      <button className="flex w-full justify-between" onClick={() => setShipShow(!shipShow)}>
        <div className="text-xl">Free Shipping & Returns</div>
        {shipShow ? (
          <MdOutlineKeyboardArrowUp size={25} />
        ) : (
          <MdOutlineKeyboardArrowDown size={25} />
        )}
      </button>
      {shipShow && (
        <div className="mt-8">
          Free standard shipping and free 60-day returns for Nike Members.
          <button className="font-semibold underline ml-1">Learn More.</button>
          <button className="font-semibold underline ml-1">Return policy exclusions apply.</button>
          <div className="mt-8">
            <button className="font-semibold underline">
              Pick-up available at select Nike Stores.
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FreeShipping;
