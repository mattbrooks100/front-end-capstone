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
      <div>
        <h1 className="text-2xl mb-8"> Bag </h1>
        {cartData.map((shoe) => (
          <div key={cartData.indexOf(shoe)} className="grid grid-cols-3 gap-4 h-fit">
            <div>
              <img src={SummaryIcon}></img>
            </div>
            <div className="flex flex-col">
              <h3 className="font-semibold">{shoe.name}</h3>
              <h3>Men's Shoes</h3>
              <h3>{shoe.color}</h3>
              <h3>Size: {shoe.size}</h3>
              <h3>Quantity: 1</h3>
            </div>
            <div className="flex justify-end">
              <h4 className="font-semibold">${shoe.price}</h4>
            </div>
            <div>
              <h2>Shipping</h2>
              <h2>Arrives by Wed</h2>
              <h2>Free Pickup</h2>
              <h2>Find A Store</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckOut;
