import React from "react";

const Explore = (props) => {
  return (
    <div style={{maxWidth: '100%'}}className="explore-container flex flex-col items-center">
      <header className="text-2xl my-14">
        Explore the Nike Dunk Low 'Medium Curry' Men's Shoes
      </header>
        <img style={{width: '2000px', height: '800px', objectFit: 'contain'}}
          src="https://fastsole.co.uk/wp-content/uploads/2020/10/On-Foot-Images-Of-Nike-Dunk-Low-PRM-Medium-Curry-f.jpg"
          alt=""
        />
        <div className="mt-12 mb-24 text-xl">Chair too big my feet can't touch the ground.</div>
        <img style={{width: '1250px', height: '800px', objectFit: 'cover', aspectRatio: '1:1'}} src="https://footpatrolblog.s3.amazonaws.com/wp-content/uploads/2021/02/NIKE-DUNK-CURRY-Blog07.jpg" />
        <div className="mt-12 mb-24 text-xl">Not enough people look at my shoes, so I carry them to show people.</div>
        <img style={{width: '2000px', height: '800px', objectFit: 'contain'}}
          src="https://sneakernews.com/wp-content/uploads/2021/02/Nike-Dunk-Low-Medium-Curry-DD1390-100-04.jpg"
          alt=""
        />
        <div className="mt-12 mb-24 text-xl">Help I've fallen and I can't get up!</div>
    </div>
  );
};

export default Explore;
