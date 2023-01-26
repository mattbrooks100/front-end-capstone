import React from "react";
import { useRecoilState } from "recoil";
import shoeState from "./shoeState";

const ProductOptions = () => {
  const [shoe, setShoe] = useRecoilState(shoeState);

  return (
    <div>
      <h1 className="">{shoe.name}</h1>
      <h2 className="product-option subheading">{shoe.category}</h2>
    </div>
  );
};

export default ProductOptions;
