import React, { useState } from "react";
import { Dropdown } from "./dropdown";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";


const Reviews = (props) => {
  const [ showReview, setShowReview] = useState(false)
  const [reviews, setReview] = useState([])
    fetch('/api/reviews', {
    })
    .then(res => res.json())
    .then(data => {
      setReview(data)
      return data
    })
    return (
        <div className="py-8 border-b border-gray-200">
      <button className="flex w-full justify-between" onClick={() => setShowReview(!showReview)}>
        <div className="text-xl">
          Reviews
        </div>
        <div></div>
          <div className="justify-self-end">
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
          </div>
        {showReview ? (
          <MdOutlineKeyboardArrowUp size={25} />
        ) : (
          <MdOutlineKeyboardArrowDown size={25} />
        )}
      </button>
      {showReview && (
        <div className="mt-8">
          <button className="font-semibold underline ml-1">Write a review</button>
          <Dropdown  reviews={reviews}/>
          <button className="font-semibold underline ml-1">More Reviews</button>
          
        </div>
      )}
    </div>        
    )
}

export default Reviews;