import React from "react";
import SummaryIcon from "../photos/SummaryIcon.jpg";
import { useRecoilState } from "recoil";
import cartState from "./cartState";
import { FiTrash2 } from "react-icons/fi";

const CheckOut = () => {
  const [cart, setCart] = useRecoilState(cartState);

  const handleDelete = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  return (
    <div>
      <div className="flex flex-col w-[450px]">
        <h1 className="text-2xl mb-8">Bag</h1>
        {cart.map((shoe) => (
          <div
            key={cart.indexOf(shoe)}
            className="grid grid-cols-3 gap-4 h-fit mb-8 border-b border-gray-300"
          >
            <div className="flex">
              <img src={SummaryIcon}></img>
            </div>
            <div className="flex flex-col">
              <h3 className="font-semibold text-lg mb-2">{shoe.name}</h3>
              <h3 className="mb-2 text-gray-500">Men's Shoes</h3>
              <h3 className="mb-2 text-gray-500">
                Size: M {shoe.size} / W {Number(shoe.size) + 1.5}
              </h3>
              <h3 className="mb-2 text-gray-500">Quantity: 1</h3>
              <button className="" onClick={() => handleDelete(cart.indexOf(shoe))}>
                <FiTrash2 size={20} />
              </button>
            </div>
            <div className="flex justify-end">
              <h4 className="font-semibold">${shoe.price}</h4>
            </div>
            <div className="flex flex-col">
              <h2 className="text-lg">Shipping</h2>
              <h2>Arrives by Wed</h2>
              <h2 className="text-lg mt-4">Free Pickup</h2>
              <a href="" className="text-lg underline underline-offset-8 mb-8 hover:font-semibold">
                Find A Store
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckOut;
