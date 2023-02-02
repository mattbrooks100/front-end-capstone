import React, { useState } from "react";
import { FaSearchDollar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import JordanLogo from "./Logos/jordanlogo.png";
import ConverseLogo from "./Logos/converse-logo-vector.png";
import NikeLogo from "./Logos/NikeLogo.png";
import HeaderCarousel from "./headercarousel";

export const Header = () => {
  const [showNewMenu, setShowNewMenu] = useState(false);
  const [showNewDropdown, setShowNewDropdown] = useState(false);

  return (
    <div className="w-full">
      <div className="top-header-bg flex items-center justify-between h-9 w-screen bg-gray-100">
        <div className="top-header-logos flex">
          <img alt="Jordan Logo" src={JordanLogo} className="h-[25px] ml-12 mr-6" />
          <img alt="Converse Logo" src={ConverseLogo} className="h-[25px]" />
        </div>
        <div className="top-header-links flex text-xs gap-2 mr-12">
          <button className="pr-2 border-r border-black">Find Store</button>
          <button className="pr-2 border-r border-black">Help</button>
          <button className="pr-2 border-r border-black">Join Us</button>
          <button>Sign In</button>
        </div>
      </div>

      {/* NEW NAVBAR */}
      <div className="nav2-container">
        <div className="nav2 flex w-screen justify-around">
          <div>
            <img alt="NikeLogo" src={NikeLogo} className="w-20"></img>
          </div>
          <div className="nav-links flex justify-between w-[400px] text-lg">
            <button
              onMouseEnter={() => setShowNewMenu(true)}
              onMouseLeave={() => setShowNewMenu(false)}
            >
              New & Featured
            </button>
            <button>Men</button>
            <button>Women</button>
            <button>Kids</button>
            <button>Sales</button>
          </div>
          <div className="nav-right-section flex w-fit items-center">
            <div className="search-bar flex items-center relative">
              <FaSearchDollar className="fa-lg absolute left-2 hover:bg-gray-200" />
              <input
                className="input text-center bg-gray-100 rounded-full h-9"
                type="text"
                placeholder="Search"
              />
            </div>
            <div className="flex items-center">
              <FaHeart className="ml-8 text-2xl" />
              <FaShoppingBag className="ml-8 text-2xl" />
            </div>
          </div>
        </div>
        {(showNewMenu || showNewDropdown) && (
          <div
            className="dropdown-container"
            onMouseEnter={() => setShowNewDropdown(true)}
            onMouseLeave={() => setShowNewDropdown(false)}
          >
            <div className="dropdown z-11 w-screen bg-white">
              <div className="flex flex-col">
                <div className="font-semibold">New & Featured</div>
                <div>New Arrivals</div>
                <div>New in Running</div>
                <div>SNKRS Launch Calendar</div>
              </div>
            </div>
            <div className="dropdown-bg absolute z-10 h-screen w-screen bg-gray-200 opacity-75 "></div>
          </div>
        )}
      </div>

      {/* <div className="navBar">
        <div className="NikeLogo">
          <img alt="NikeLogo" src={NikeLogo}></img>
        </div>
        <div className="tabsContainer w-fit">
          {TABS.map((tab) => (
            <div className="dropdown">
              {tab}
              <div className="dropdown-menu">
                <div>
                  <div className="dropdown-heading">
                    {" "}
                    New & Featured
                    <div className="dropdown-links">
                      <a href="#" class="link">
                        New Arrivals
                      </a>{" "}
                      <br></br>
                      <a href="#" class="link">
                        Snkrs launch Calender
                      </a>{" "}
                      <br></br>
                      <a href="#" class="link">
                        New and upcoming drops
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="dropdown-heading">
                    Shoes
                    <div className="dropdown-links">
                      <a href="#" class="link">
                        All Shoes
                      </a>{" "}
                      <br></br>
                      <a href="#" class="link">
                        Lifestyle
                      </a>{" "}
                      <br></br>
                      <a href="#" class="link">
                        Running
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="dropdown-heading">
                    Clothing
                    <div className="dropdown-links">
                      <a href="#" class="link">
                        All Clothing
                      </a>{" "}
                      <br></br>
                      <a href="#" class="link">
                        Top T-shirts
                      </a>{" "}
                      <br></br>
                      <a href="#" class="link">
                        Shorts
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="dropdown-heading">
                    {" "}
                    Accesories & Equipment
                    <div className="dropdown-links">
                      <a href="#" class="link">
                        Bags & Backpacks
                      </a>{" "}
                      <br></br>
                      <a href="#" class="link">
                        Apple watch Nike
                      </a>{" "}
                      <br></br>
                      <a href="#" class="link">
                        Hats, Visors & Headbands{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          ))}

          <div className="searchbar">
            <i className="magnifier">
              <FaSearchDollar />
            </i>
            <input className="input" type="text" placeholder="  Search " />
          </div>
          <div className="heart">
            <FaHeart />
          </div>
          <div className="shoppingBag">
            <a href="/checkout">
              <FaShoppingBag />
            </a>
          </div>
        </div>
      </div> */}
      <HeaderCarousel />
    </div>
  );
};

export default Header;
