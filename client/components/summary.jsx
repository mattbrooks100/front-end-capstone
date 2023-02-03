import React, { useState, useEffect } from "react";
import { Dropdown } from "./dropdown";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { useRecoilState } from "recoil";
import shoeState from "./ProductOptions/shoeState";

const Summary = (props) => {
  const [showPromo, setShowPromo] = useState(false);
  const [shoe, setShoe] = useRecoilState(shoeState);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart"));
    if (cartData) {
      setCartData(cartData);
    }
  }, []);

  let subtotal = 0;
  const getSubtotal = cartData.map((shoe) => {
    subtotal = Number(subtotal) + Number(shoe.price);
    return subtotal;
  });

  const totalPrice = (props) => {
    // let total = shoe.length && shoe[0].price * shoe.length && shoe[0].quantity + 7
    // console.log(shoe.length && shoe[0].price);
    let total = `$ ${subtotal + 7}.00`;
    return total;
  };

  return (
    <div>
      <div>
        <h1 className="text-2xl mb-8">Summary</h1>
      </div>
      <div className="border-b border-gray-200">
        <button className="flex w-full justify-between" onClick={() => setShowPromo(!showPromo)}>
          <div className="text-xl">Do you have a promo code? </div>
          {showPromo ? (
            <MdOutlineKeyboardArrowUp size={25} />
          ) : (
            <MdOutlineKeyboardArrowDown size={25} />
          )}
        </button>
        {showPromo && (
          <div className="mt-8">
            <label for="promo">Promo Code:</label>
            <input type="text" id="promo" name="promo"></input>
            <button type="button">Apply</button>
          </div>
        )}
      </div>
      <div class="grid grid-cols-2 gap-4 h-fit">
        <h2>Subtotal</h2>
        <h4> ${subtotal}</h4>
        <h2>Estimated Shipping & Handling</h2>
        <h4> $7.00</h4>
        <h2>Estimated Tax</h2>
        <h4> --</h4>
        <h2>Total</h2>
        <h4> {totalPrice()} </h4>
      </div>
      <button className="bg-black text-white w-full mt-4 py-4 rounded-full hover:bg-gray-500">
        Checkout
      </button>
      <button className="bg-black text-white w-full mt-4 py-4 rounded-full hover:bg-gray-500">
        Paypal
      </button>
      <button className="bg-black text-white w-full mt-4 py-4 rounded-full hover:bg-gray-500">
        $DannyAndrewsBitcoin$
      </button>
    </div>
  );
};

export default Summary;
