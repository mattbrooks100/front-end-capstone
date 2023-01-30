import React, {Fragment, useState} from 'react'
import {Dialog, Transition } from '@headlessui/react'

export const ViewDetails = () => {
    let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <div>
        <div className="relative inset-0 flex items-center ">
        <a
          onClick={openModal}
          className="rounded-md bg-white bg-opacity-20 text-sm font-medium text-black cursor-pointer"
        >
          <u>View Product Details</u>
        </a>
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
                  
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    LEGENDARY STYLE DEFINED.
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                    The radiance lives on in the Nike Air Force 1 ’07, the b-ball OG that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.
                    
                    <h4 className="text-lg font-medium leading-6 text-black-900">Benefits</h4>
                    <div className="mt-2 text-sm text-black-700">
                      <ul className='leading-8 list-disc ml-6'>
                        <li>The stitched overlays on the upper add heritage style, durability and support.</li>
                        <li>Originally designed for performance hoops, the Nike Air cushioning adds lightweight, all-day comfort.</li>
                        <li>The low-cut silhouette adds a clean, streamlined look.</li>
                        <li>The padded collar feels soft and comfortable.</li>
                      </ul>
                    </div>

                    <h4 className="text-lg font-medium leading-6 text-black-900">Product Details</h4>
                    <div className="mt-2 text-sm text-black-700">
                      <ul className='leading-8 list-disc ml-6'>
                        <li>Foam midsole</li>
                        <li>Perforations on the toe</li>
                        <li>Rubber sole</li>
                        <li>Shown: White/White</li>
                        <li>Style: CW2288-111</li>
                      </ul>
                    </div>
                    <h4 className="text-lg font-medium leading-6 text-black-900">Air Force 1 Origins</h4>
                    <p>
                    Debuting in 1982, the AF1 was the first basketball shoe to house Nike Air, revolutionizing the game while rapidly gaining traction around the world. Today, the Air Force 1 stays true to its roots with the same soft and springy cushioning that changed sneaker history.
                    </p>
                    </p>
                  </div>
                  
                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-black-900 hover:text-black-500 cursor-pointer"
                      onClick={closeModal}
                    >
                      X
                    </button>
                  </div>
                </Dialog.Panel>
                
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
    
  )
}
