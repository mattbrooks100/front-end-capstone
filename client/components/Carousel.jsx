import React from 'react'
<<<<<<< HEAD
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
=======
// installed and imported slick react dependenices
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// imported photos of jersen from the photos file in componens
>>>>>>> fd536c0db6b78d334a8c4bb93b97e6cd1e0f1a22
import photo1 from '/photos/photo1.png'
import photo2 from '/photos/photo2.png'
import photo3 from '/photos/photo3.jpg'
import photo4 from '/photos/photo4.jpg'
import photo5 from '/photos/photo5.jpg'
import photo6 from '/photos/photo6.jpg'


const carousel = () => {
<<<<<<< HEAD

  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    SlidesToScroll: 1,
    adaptiveHeight: true
  };
=======
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
>>>>>>> fd536c0db6b78d334a8c4bb93b97e6cd1e0f1a22
  return (
    <div>
      <h2>Complete the look</h2>
        <Slider {...settings}>
            <div>
<<<<<<< HEAD
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
=======
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
>>>>>>> fd536c0db6b78d334a8c4bb93b97e6cd1e0f1a22
            </div>
        </Slider>
    </div>
  )
}

export default carousel;
