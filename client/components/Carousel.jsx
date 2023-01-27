import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import photo1 from '/photos/photo1.png'
import photo2 from '/photos/photo2.png'
import photo3 from '/photos/photo3.jpg'
import photo4 from '/photos/photo4.jpg'
import photo5 from '/photos/photo5.jpg'
import photo6 from '/photos/photo6.jpg'


const carousel = () => {

  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    SlidesToScroll: 1,
    adaptiveHeight: true
  };
  return (
    <div>
      <h2>Complete the look</h2>
        <Slider {...settings}>
            <div>
                <img style={{width: 500, border: '2px solid black'}} src={photo1}></img>
            </div>
            <div>
            <img style={{width: 500, border: '2px solid black'}} src={photo2}></img>
            </div>
            <div>
            <img style={{width: 500, border: '2px solid black'}} src={photo3}></img>
            </div>
            <div>
            <img style={{width: 500, border: '2px solid black'}} src={photo4}></img>
            </div>
            <div>
            <img style={{width: 500, border: '2px solid black'}} src={photo5}></img>
            </div>
            <div>
            <img style={{width: 500, border: '2px solid black'}} src={photo6}></img>
            </div>
        </Slider>
    </div>
  )
}

export default carousel;
