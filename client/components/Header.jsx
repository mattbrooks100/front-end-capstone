import React, { useState } from 'react'

import { FaSearchDollar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa"
import JordanLogo from "/Logos/jordanlogo.png";
import ConverseLogo from "/Logos/converse-logo-vector.png";
import NikeLogo from "/Logos/NikeLogo.png"
import "/app.css"
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
                        <button className={`${activeTab === tab ? 'header-tab header-tab-active' : "header-tab"}`}

                            onMouseOver={() => setActiveTab(true)}
                            onMouseLeave={() => setActiveTab(false)} >
                            {tab}
                        </button>
                    ))}
                    <div className='searchbar'>
                        <i className='magnifier'>
                            < FaSearchDollar />
                        </i>
                        <input className="input" type="text" placeholder='      SEARCH' />

                    </div>
                    <div className='heart'>
                        < FaHeart />
                    </div>
                </div>
            </div>
            <HeaderCarousel/>

        </div>

    )
}

export default Header