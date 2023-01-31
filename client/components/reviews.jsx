import React, { useState } from "react";
import { Dropdown } from "./dropdown";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";


const Reviews = (props) => {
    const [ showReview, setShowReview] = useState(false)
    return (
        <div className="py-8 border-b border-gray-200">
      <button className="flex w-full justify-between" onClick={() => setShowReview(!showReview)}>
        <div className="text-xl">Reviews</div>
        {showReview ? (
          <MdOutlineKeyboardArrowUp size={25} />
        ) : (
          <MdOutlineKeyboardArrowDown size={25} />
        )}
      </button>
      {showReview && (
        <div className="mt-8">
          <button className="font-semibold underline ml-1">Write a review</button>
          <Dropdown />
          <button className="font-semibold underline ml-1">More Reviews</button>
          
        </div>
      )}
    </div>        
    )
}

export default Reviews;