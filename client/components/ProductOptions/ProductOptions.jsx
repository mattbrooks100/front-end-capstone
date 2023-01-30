import React from "react";
import { useRecoilState } from "recoil";
import shoeState from "./shoeState";
import ShoeSizes from "./ShoeSizes";
import Klarna from "./Klarna";
import AddToBag from "./AddToBag";
import Favorite from "./Favorite";
import Colors from "./Colors";

const ProductOptions = () => {
  const [shoe, setShoe] = useRecoilState(shoeState);

  return (
    <div className="m-2 font-sans w-96">
      <h1 className="pb-2 font-medium tracking-[0.007em] text-[28px] leading-[1.2rem]">{shoe.name}</h1>
      <h2 className="pb-4 font-medium text-base leading-6">{shoe.category}</h2>
      <h2 className="mt-2 font-medium">${shoe.price}</h2>
      <Colors />
      <ShoeSizes />
      <Klarna price={shoe.price}/>
      <AddToBag />
      <Favorite />
    </div>
  );
};

export default ProductOptions;
