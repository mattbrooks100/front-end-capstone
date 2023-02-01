import React from 'react'

export const Dropdown = () => {
  return (
    <div>
      {/* {fetch('http://localhost:4000/api/shoes', {
        method: 'GET',
        headers: 'application/json'
      })
      .then(res => res.json())
      .then(data => {

      })} */}
      
        <div className='relative '>
          <ul>
            <li>
              <h5>I can walk!</h5>
              <div className='justify-between'>
                <div className="">
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className='relative float-right text-gray-500'>BigSteppa - Feb 01, 2023</span>
                </div>
                <div>
                  <p>
                    I could walk before but now I can walk in style.
                  </p>
                </div>
              </div>

            </li>
            <li>
              <h5>The tan not tanning</h5>
              <div className='justify-between'>
                <div className="">
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className='relative float-right text-gray-500'>BlackAirForceKi - Jan 12, 2023</span>
                </div>
                <div>
                  <p>
                    Didn't get my +5 enhanced ignorance boost. Going back to black airforces so I can terrorize basketball courts.
                  </p>
                </div>
              </div>

            </li>
            <li>
              <h5>The Old Chimney Sweep</h5>
              <div className='justify-between'>
                <div className="">
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className='relative float-right text-gray-500'>IOnlyJackNikes37- Dec 24, 2022</span>
                </div>
                <div>
                  <p>
                    Size a little small. Probably perfect for the kid these were for. 
                  </p>
                </div>
              </div>
            </li>
          </ul>

        </div>
        
            
    </div>
  )
}
