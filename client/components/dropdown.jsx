import React from 'react'

export const Dropdown = (props) => {
  return (
    <div>
        <div className='relative '>
          <ul>
            {props.reviews.map(review => {
              return(
                
                <li>
                  <h5>{review.title}</h5>
                  <div className='justify-between'>
                    <div className="">
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                      <span className='relative float-right text-gray-500'>{review.username} - {review.date}</span>
                    </div>
                    <div>
                      <p>
                        {review.body}
                      </p>
                    </div>
                  </div>

                </li>
              )
                
              })}
          </ul>
        </div>
    </div>
  )
}
