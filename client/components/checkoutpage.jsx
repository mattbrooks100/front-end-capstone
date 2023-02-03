import React, { useEffect, useState } from "react";
import SummaryIcon from "../photos/SummaryIcon.jpg";
import { useRecoilState } from "recoil";
import shoeState from "./ProductOptions/shoeState";

const CheckOut = () => {
  const [shoe, setShoe] = useRecoilState(shoeState);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart"));
    if (cartData) {
      setCartData(cartData);
    }
  }, []);

  return (
    <div>
      <div className="flex flex-col w-[450px]">
        <h1 className="text-2xl mb-8"> Bag </h1>
        {cartData.map((shoe) => (
          <div key={cartData.indexOf(shoe)} className="grid grid-cols-3 gap-4 h-fit">
            <div className="flex">
              <img src={SummaryIcon}></img>
            </div>
            <div className="flex flex-col">
              <h3 className="font-semibold text-lg mb-2">{shoe.name}</h3>
              <h3 className="mb-2 text-gray-500">Men's Shoes</h3>
              <h3 className="mb-2 text-gray-500">{shoe.color}</h3>
              <h3 className="mb-2 text-gray-500">Size: M {shoe.size} / W {Number(shoe.size) + 1.5}</h3>
              <h3 className="text-gray-500">Quantity: 1</h3>
            </div>
            <div className="flex justify-end">
              <h4 className="font-semibold">${shoe.price}</h4>
            </div>
            <div className="flex flex-col">
              <h2 className="text-lg">Shipping</h2>
              <h2>Arrives by Wed</h2>
              <h2 className="text-lg mt-4">Free Pickup</h2>
              <h2 className="text-lg underline underline-offset-8 mb-8">Find A Store</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckOut;
