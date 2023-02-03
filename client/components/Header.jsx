import React, { useState } from 'react'
import { FaSearchDollar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import JordanLogo from "./Logos/jordanlogo.png";
import ConverseLogo from "./Logos/converse-logo-vector.png";
import NikeLogo from "./Logos/NikeLogo.png"
import "./app.css"
import { HeaderRight } from './HeaderRight';
import HeaderCarousel from './headercarousel';


const TABS = ["New & Featured", "Men", "Women", "Kids", "Sales"]
const headerContent = ["Find store", "|", "Help", "|", "Join Us", "|", "Sign In"]

export const Header = () => {
    const [activeTab, setActiveTab] = useState(false)


    return (
        <div>
            {/* creating the jordan logo and converse logo */}

            <div className="HeaderBackground">
                <div className="HeaderLogos">

                    <div className='jordan'>
                        <img alt="Jordan Logo" src={JordanLogo} />
                    </div>

                    <div className='converse'>
                        <img alt="Converse Logo" src={ConverseLogo} />
                    </div>
                </div>

                {/* mapping throught variable headercount to display contents */}

                <div className='HeaderRight'>
                    {headerContent.map((content) => (
                        <HeaderRight content={content} />
                    ))}
                </div>

            </div>
            <div className='navBar'>
                <div className="NikeLogo">
                    <img alt='NikeLogo' src={NikeLogo}></img>
                </div>
                <div className="tabsContainer">
                    {TABS.map((tab) => (
                        <div className='dropdown'>
                            {tab}
                            <div className='dropdown-menu'>
                                <div>
                                    <div className='dropdown-heading'> New & Featured
                                    <div className='dropdown-links'>
                                        <a href='#' class="link">New Arrivals</a> <br></br>
                                        <a href='#' class="link">Snkrs launch Calender</a> <br></br>
                                        <a href='#' class="link">New and upcoming drops</a>
                                    </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='dropdown-heading'>Shoes
                                    <div className='dropdown-links'>
                                        <a href='#' class="link">All Shoes</a> <br></br>
                                        <a href='#' class="link">Lifestyle</a> <br></br>
                                        <a href='#' class="link">Running</a>
                                    </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='dropdown-heading'>Clothing
                                    <div className='dropdown-links'>
                                        <a href='#' class="link">All Clothing</a> <br></br>
                                        <a href='#' class="link">Top T-shirts</a> <br></br>
                                        <a href='#' class="link">Shorts</a>
                                    </div>
                                    </div>
                                </div>
                                <div>
                                <div className='dropdown-heading'> Accesories & Equipment
                                <div className='dropdown-links'>
                                    <a href='#' class="link">Bags & Backpacks</a> <br></br>
                                    <a href='#' class="link">Apple watch Nike</a> <br></br>
                                    <a href='#' class="link">Hats, Visors & Headbands </a>
                                </div>
                                </div>
                                </div>
                            </div> 
                            <div>
                            </div>
                        </div>
                    ))}

                    <div className='searchbar'>
                        <i className='magnifier'>
                            < FaSearchDollar />
                        </i>
                        <input className="input" type="text" placeholder='  Search ' />
                    </div>
                    <div className='heart'>
                        < FaHeart />
                    </div>
                    <div className='shoppingBag'>
                        <a href="/checkout">
                        < FaShoppingBag />
                        </a>
                    </div>
                </div>
            </div>
            <HeaderCarousel />

        </div>

    )
}

export default Header