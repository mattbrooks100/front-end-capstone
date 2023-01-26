import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import photo1 from '/photos/photo1.png'
import photo2 from '/photos/photo2.png'
import photo3 from '/photos/photo3.png'
import photo4 from '/photos/photo4.png'
import photo5 from '/photos/photo5.png'


const carousel = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    SlidesToScroll: 1,
    adaptiveHeight: true,
    adaptiveWidth: true,
    
  };
  return (
    <div>
        <Slider {...settings}>
            <div>
                <img style={{width: 500}} src={photo1}></img>
            </div>
            <div>
            <img style={{width: 500}} src={photo2}></img>
            </div>
            <div>
            <img style={{width: 500}} src={photo3}></img>
            </div>
            <div>
            <img style={{width: 500}} src={photo4}></img>
            </div>
            <div>
            <img style={{width: 500}} src={photo5}></img>
            </div>
        </Slider>
    </div>
  )
}

export default carousel;
