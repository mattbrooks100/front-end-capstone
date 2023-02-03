import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

//changed description to actual description on lines 62-64. changed style and shown in lines 85-86

export const ViewDetails = () => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div>
      <div className="relative inset-0 flex items-center ">
        <button
          onClick={openModal}
          className="rounded-md bg-white bg-opacity-20 font-semibold text-black cursor-pointer underline underline-offset-8 hover:text-gray-500"
        >
          View Product Details
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
                    <Dialog.Title
                      as="h3"
                      className="flex text-lg font-medium leading-6 text-gray-900"
                    >
                      LEGENDARY STYLE DEFINED.
                    </Dialog.Title>
                    <div className="">
                      <button
                        className="text-gray-500 bg-white px-2 py-1 rounded-full hover:text-black hover:bg-gray-100"
                        onClick={closeModal}
                      >
                        X
                      </button>
                    </div>
                  </div>
                  <div className="flex mt-2 justify-start">
                    <p className="text-sm text-gray-500">
                      Before cementing its status as a streetwear icon and skateboarding staple, the
                      Dunk began its journey on the hardwood as Nike's first-team basketball shoe
                      before cementing its status as a sportswear legend. This low-top edition of
                      the timeless silhouette features neutral hues of sail and fossil with spicy
                      hits of medium curry.
                      <div className="mt-4 text-lg font-medium leading-6 text-black-900">
                        Benefits
                      </div>
                      <div className="mt-2 text-sm text-black-700">
                        <ul className="leading-8 list-disc ml-6">
                          <li>
                            The stitched overlays on the upper add heritage style, durability and
                            support.
                          </li>
                          <li>
                            Originally designed for performance hoops, the Nike Air cushioning adds
                            lightweight, all-day comfort.
                          </li>
                          <li>The low-cut silhouette adds a clean, streamlined look.</li>
                          <li>The padded collar feels soft and comfortable.</li>
                        </ul>
                      </div>
                      <div className="mt-4 text-lg font-medium leading-6 text-black-900">
                        Product Details
                      </div>
                      <div className="mt-2 text-sm text-black-700">
                        <ul className="leading-8 list-disc ml-6">
                          <li>Foam midsole</li>
                          <li>Perforations on the toe</li>
                          <li>Rubber sole</li>
                          <li>Shown: Tan/White</li>
                          <li>Style: DD1390-100</li>
                        </ul>
                      </div>
                      <div className="mt-4 text-lg font-medium leading-6 text-black-900">
                        Nike Dunk Low
                      </div>
                      <p>
                        One of the most iconic basketball sneakers created by Nike\, the Dunk
                        originally made its debut in 1985. They have become a staple and continue to
                        be re-released in numerous versions\, colorways and styles today.
                      </p>
                    </p>
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
