import React from "react";
import { useRecoilState } from "recoil";
import cartState from "./cartState";

const Counter = () => {
  const [cart, setCart] = useRecoilState(cartState);

  return <div>{cart.length}</div>;
};

export default Counter;
