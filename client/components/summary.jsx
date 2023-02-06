import React, { useState, useEffect } from "react";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { useRecoilState } from "recoil";
import cartState from "./cartState";

const Summary = () => {
  const [showPromo, setShowPromo] = useState(false);
  const [cart, setCart] = useRecoilState(cartState);

  let subtotal = 0;
  const getSubtotal = cart.map((shoe) => {
    subtotal = Number(subtotal) + Number(shoe.price);
    return subtotal;
  });

  const totalPrice = () => {
    let total = `$${subtotal + 7}.00`;
    return total;
  };

  return (
    <div>
      <div>
        <h1 className="text-2xl mb-8">Summary</h1>
      </div>
      <div className="mb-4">
        <button className="flex w-full justify-between" onClick={() => setShowPromo(!showPromo)}>
          <div className="text-xl">Do you have a promo code? </div>
          {showPromo ? (
            <MdOutlineKeyboardArrowUp size={25} />
          ) : (
            <MdOutlineKeyboardArrowDown size={25} />
          )}
        </button>
        {showPromo && (
          <div className="mt-2 pb-4 mb-4 border-b border-gray-300">
            {/* <label for="promo">Promo Code:</label> */}
            <input type="text" id="promo" name="promo" className="border-solid border-2 border-gray-300 mx-2 px-2 rounded-lg"></input>
            <button className="px-4 py-2 border-solid border border-gray-500 rounded-xl">Apply</button>
          </div>
        )}
      </div>
      <div class="grid grid-cols-2 gap-4 h-fit pb-4 mb-4 border-b border-gray-300">
        <h2>Subtotal</h2>
        <h4>${subtotal}.00</h4>
        <h2>Estimated Shipping & Handling</h2>
        <h4>$7.00</h4>
        <h2>Estimated Tax</h2>
        <h4>--</h4>
        <h2>Total</h2>
        <h4>{totalPrice()}</h4>
      </div>
      <button className="bg-black text-white w-full mt-4 py-4 rounded-full hover:bg-gray-500">
        Checkout
      </button>
      <button className="bg-black text-white w-full mt-4 py-4 rounded-full hover:bg-gray-500">
        PayPal
      </button>
      <button className="bg-black text-white w-full mt-4 py-4 rounded-full hover:bg-gray-500">
        $DannyAndrewsBitcoin$
      </button>
    </div>
  );
};

export default Summary;
