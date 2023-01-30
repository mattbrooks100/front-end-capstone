import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeaderCarousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        autoplay:true,
        speed: 1000,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div>
        <Slider {...settings}>
          <div> <center>
            <h3>WHY WAIT? TRY STORE PICKUP Buy online and find a store near you for pick up in less than 2 hours. Shop now.</h3>
            </center>
          </div>
          <div> <center>
            <h3>SAVE UP TO 40%  Shop All Our New Markdowns</h3>
            </center>
          </div>
          <div> <center>
            <h3>FREE SHIPPING + RETURNS, FREE MEMBERSHIP, EXCLUSIVE PRODUCTS    Join Now</h3>
            </center>
          </div>
        </Slider>
      </div>
    )
  }
    
    export default HeaderCarousel;