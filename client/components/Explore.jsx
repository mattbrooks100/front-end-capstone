import React from "react";
import Explore1 from '/photos/Explore1.webp'
import Explore2 from '/photos/Explore2.webp'
import Explore3 from '/photos/Explore3.webp'

const Explore = (props) => {
  return (
    <div style={{maxWidth: '100%'}}className="explore-container flex flex-col items-center">
      <header className="text-2xl my-14">
        Explore the Nike Dunk Low 'Medium Curry' Men's Shoes
      </header>
        <img style={{width: '2000px', height: '800px', objectFit: 'contain'}}
          src={Explore1}
          alt=""
        />
        <div className="mt-12 mb-24 text-xl">Chair too big my feet can't touch the ground.</div>
        <img style={{width: '1250px', height: '800px', objectFit: 'cover', aspectRatio: '1:1'}} src={Explore2} />
        <div className="mt-12 mb-24 text-xl">Not enough people look at my shoes, so I carry them to show people.</div>
        <img style={{width: '2000px', height: '800px', objectFit: 'contain'}}
          src={Explore3}
          alt=""
        />
        <div className="mt-12 mb-24 text-xl">Help I've fallen and I can't get up!</div>
    </div>
  );
};

export default Explore;
