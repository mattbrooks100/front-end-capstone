import React, { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import shoeState from "./shoeState";
import { useRecoilState } from "recoil";
import Dunks1 from "/photos/Dunks1.jpg";
import sizeState from "../sizeState.jsx";
import quantityState from "../quantityState.jsx";
import cartState from "../cartState";

const sizeArray = [];

const AddToBag = () => {
  const [shoe, setShoe] = useRecoilState(shoeState);
  const [sizeSelected, setSizeSelected] = useRecoilState(sizeState);
  const [quantity, setQuantity] = useRecoilState(quantityState);
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useRecoilState(cartState);

  function closeModal() {
    setIsOpen(false);
  }

  const handleClick = () => {
    if (sizeSelected.length === 0) {
      alert("Please select a size.");
      return;
    }
    setIsOpen(true);
    setQuantity(quantity + 1);
    sizeArray.push(sizeSelected);

    const shoeSelected = {
      name: shoe[0].name,
      price: shoe[0].price,
      size: sizeSelected,
    };

    setCart([...cart, shoeSelected]);
  };

  return (
    <div>
      <div className="relative inset-0 flex items-center">
        <button
          onClick={handleClick}
          className="bg-black text-white w-full mt-4 py-4 rounded-full hover:bg-gray-500"
        >
          <div>Add To Bag</div>
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex justify-between">
                    <Dialog.Title as="h3" className="text-xl font-medium leading-6 text-gray-900">
                      Added to Cart
                    </Dialog.Title>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md bg-white text-sm font-medium text-black-900 hover:text-black-500 cursor-pointer"
                      onClick={closeModal}
                    >
                      X
                    </button>
                  </div>
                  <div className="mt-2">
                    {/* <div className="text-sm text-gray-500"> */}
                      <div className="Cart flex flex-col-2 gap-4 text-gray-500">
                        <div>
                          <img style={{ width: "80px", height: "80px" }} src={Dunks1}></img>
                        </div>
                        <div>
                          <h2 className="text-lg text-black">Name: {shoe.length && shoe[0].name}</h2>
                          <h3>Price: ${shoe.length && shoe[0].price}</h3>
                          <h4>Color: {shoe.length && shoe[0].color}</h4>
                          <h5>Size: {sizeArray.join(", ")}</h5>
                          <h6>Quantity: 1</h6>
                        </div>
                      {/* </div> */}
                    </div>
                  </div>
                  <div className="flex">
                    <a
                      href="/checkout"
                      className="flex justify-center bg-black text-white w-full mt-4 py-4 rounded-full hover:bg-gray-500"
                    >
                      Proceed To Checkout
                    </a>
                  </div>

                  
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default AddToBag;
