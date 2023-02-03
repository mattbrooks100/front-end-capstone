import React from "react";
import { useRecoilState } from "recoil";
import reviewState from "./reviewState";

export const Dropdown = (props) => {
  const [reviews, setReview] = useRecoilState(reviewState);

  return (
    <div>
      <div className="relative ">
        <ul>
          {props.reviews.map((review) => {
            const newDate = new Date(review.date);
            newDate.setDate(newDate.getDate() + 1);
            const formattedDate = newDate.toLocaleDateString("en-us", {
              year: "numeric",
              month: "short",
              day: "numeric",
            });
            return (
              <li>
                <h5 className="text-lg">{review.title}</h5>
                <div className="justify-between">
                  <div className="mb-4">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <span className="relative float-right text-gray-500">
                      {review.username} - {formattedDate}
                    </span>
                  </div>
                  <div>
                    <p className="mb-8">{review.body}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
