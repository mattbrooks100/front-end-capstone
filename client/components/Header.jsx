import React, { useEffect, useState } from "react";
import { FaSearchDollar } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { BsBag } from "react-icons/bs";
import NikeLogo from "./Logos/NikeLogo.png";
import HeaderCarousel from "./headercarousel";
import combinedLogo from "./Logos/combined-converse-jordan.png";
import Counter from "./Counter";

export const Header = () => {
  const [showNewMenu, setShowNewMenu] = useState(false);
  const [showNewDropdown, setShowNewDropdown] = useState(false);

  return (
    <div className="w-full">
      <div className="top-header-bg flex items-center justify-between h-9 w-screen bg-gray-100">
        <div className="top-header-logos flex">
          <img src={combinedLogo} className="ml-12" />
        </div>
        <div className="top-header-links flex text-xs gap-2 mr-12">
          <button className="pr-2 border-r border-black hover:text-gray-500">Find Store</button>
          <button className="pr-2 border-r border-black hover:text-gray-500">Help</button>
          <button className="pr-2 border-r border-black hover:text-gray-500">Join Us</button>
          <button className="hover:text-gray-500">Sign In</button>
        </div>
      </div>

      {/* NEW NAVBAR */}
      <div className="nav2-container">
        <div className="nav2 h-[60px] flex items-center w-screen justify-between">
          <div>
            <img alt="NikeLogo" src={NikeLogo} className="w-20 ml-12 mr-48"></img>
          </div>
          <div className="nav-links flex w-[400px] text-lg">
            <button
              className="grow py-3 hover:border-black hover:border-b-2"
              onMouseEnter={() => setShowNewMenu(true)}
              onMouseLeave={() => setShowNewMenu(false)}
            >
              New & Featured
            </button>
            <button
              className="grow py-3 hover:border-black hover:border-b-2"
              onMouseEnter={() => setShowNewMenu(true)}
              onMouseLeave={() => setShowNewMenu(false)}
            >
              Men
            </button>
            <button
              className="grow py-3 hover:border-black hover:border-b-2"
              onMouseEnter={() => setShowNewMenu(true)}
              onMouseLeave={() => setShowNewMenu(false)}
            >
              Women
            </button>
            <button
              className="grow py-3 hover:border-black hover:border-b-2"
              onMouseEnter={() => setShowNewMenu(true)}
              onMouseLeave={() => setShowNewMenu(false)}
            >
              Kids
            </button>
            <button
              className="grow py-3 hover:border-black hover:border-b-2"
              onMouseEnter={() => setShowNewMenu(true)}
              onMouseLeave={() => setShowNewMenu(false)}
            >
              Sales
            </button>
          </div>
          {/* SEARCH BAR, FAVORITES, BAG */}
          <div className="nav-right-section flex w-fit items-center mr-12">
            <div className="search-bar flex items-center relative">
              <FaSearchDollar className="fa-lg absolute left-2  rounded-full hover:bg-gray-200" />
              <input
                className="input text-center bg-gray-100 rounded-full h-9"
                type="text"
                placeholder="Search"
              />
            </div>
            <div> </div>
            <div className="flex items-center">
              <button>
                <FiHeart className="ml-8 text-2xl" />
              </button>
              <a href="/checkout">
                <div className="flex relative ml-8">
                  <BsBag className="text-2xl" />
                  <div className="absolute inset-x-2 inset-y-1">
                    <Counter />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        {/* HIDDEN DROPDOWN MENU */}
        {(showNewMenu || showNewDropdown) && (
          <div className="dropdown-container absolute z-10">
            <div
              className="dropdown flex z-11 w-screen justify-center py-10 bg-white"
              onMouseEnter={() => setShowNewDropdown(true)}
              onMouseLeave={() => setShowNewDropdown(false)}
            >
              <div className="flex flex-col items-start mx-6">
                <button className="font-semibold">New & Featured</button>
                <button className="text-gray-500 hover:text-black">New Arrivals</button>
                <button className="text-gray-500 hover:text-black">New in Running</button>
                <button className="text-gray-500 hover:text-black">SNKRS Launch Calendar</button>
                <button className="text-gray-500 hover:text-black">New & Upcoming Drops</button>
                <button className="text-gray-500 hover:text-black">Valentine's Day Shop</button>
              </div>
              <div className="flex flex-col items-start mx-6">
                <button className="font-semibold">New for Men</button>
                <button className="text-gray-500 hover:text-black">Shoes</button>
                <button className="text-gray-500 hover:text-black">Clothing</button>
                <button className="text-gray-500 hover:text-black">Equipment</button>
                <button className="text-gray-500 hover:text-black">Shop All New</button>
              </div>
              <div className="flex flex-col items-start mx-6">
                <button className="font-semibold">New For Women</button>
                <button className="text-gray-500 hover:text-black">Shoes</button>
                <button className="text-gray-500 hover:text-black">Clothing</button>
                <button className="text-gray-500 hover:text-black">Equipment</button>
                <button className="text-gray-500 hover:text-black">Shop All New</button>
              </div>
              <div className="flex flex-col items-start mx-6">
                <button className="font-semibold">New For Kids</button>
                <button className="text-gray-500 hover:text-black">Boys Shoes</button>
                <button className="text-gray-500 hover:text-black">Boys Clothing</button>
                <button className="text-gray-500 hover:text-black">Girls Shoes</button>
                <button className="text-gray-500 hover:text-black">Girls Clothing</button>
                <button className="text-gray-500 hover:text-black">Shop All New</button>
              </div>
              <div className="flex flex-col items-start mx-6">
                <button className="font-semibold">Drops</button>
                <button className="text-gray-500 hover:text-black">New Arrivals</button>
              </div>
            </div>
            <div className="dropdown-bg absolute z-10 h-screen w-screen bg-gray-200 opacity-75 "></div>
          </div>
        )}
      </div>
      <HeaderCarousel />
    </div>
  );
};

export default Header;
