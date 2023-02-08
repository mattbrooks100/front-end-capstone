import React from 'react'
// installed and imported slick react dependenices
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// imported photos of jersen from the photos file in componens
import photo1 from '/photos/photo1.webp'
import photo2 from '/photos/photo2.webp'
import photo3 from '/photos/photo3.webp'
import photo4 from '/photos/photo4.webp'
import photo5 from '/photos/photo5.webp'
import photo6 from '/photos/photo6.webp'


const carousel = () => {
  // used react-slick built in settings to have settings persist throughout all images
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    SlidesToScroll: 1,
    adaptiveHeight: true,
    centerMode: true,
    centerPadding: "50px",
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 2000
  };

  // used built in react-slick Slider tag to create carousel effect
  return (
    <div>
      <h2 className='text-3xl mb-8'>Complete the Look</h2>
        <Slider {...settings}>
            <div>
                <img style={{width: 500, height:'500px', objectFit: 'contain'}} src={photo1}></img>
            </div>
            <div>
            <img style={{width: 500, height:'500px', objectFit: 'contain'}} src={photo2}></img>
            </div>
            <div>
            <img style={{width: 500, height:'500px', objectFit: 'contain'}} src={photo3}></img>
            </div>
            <div>
            <img style={{width: 500, height:'500px', objectFit: 'contain'}} src={photo4}></img>
            </div>
            <div>
            <img style={{width: 500, height:'500px', objectFit: 'contain'}} src={photo5}></img>
            </div>
            <div>
            <img style={{width: 500, height:'500px', objectFit: 'contain'}} src={photo6}></img>
            </div>
        </Slider>
    </div>
  )
}

export default carousel;
