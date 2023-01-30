import React from "react";
import { Dropdown } from "./dropdown";


const Reviews = (props) => {

    // create button
    // no borders and bg-color same as page

    return (
        <div className="group inline-block">
            <div
                className="outline-none focus:outline-none bg-white rounded-sm flex items-center min-w-32"
            >
                <span className="pr-1 font-bold flex-1">
                    Reviews
                </span>
                <span>
                <svg
                width={15}
                className=" h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
                xmlns="http://www.w3.org/z2000/svg"
                viewBox="20 20 20 20"
                >
                    <path
                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                    />
                </svg>
                </span>
            </div>
            <Dropdown />
            <hr />
            <summary className="relative">
                <h3><span>Reviews</span></h3>
            </summary>
            <div class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg">
                <div class="rounded-md bg-white shadow-xs">
                    
             </div>

            </div>
            </div>
        
        
        
    )
}

export default Reviews;