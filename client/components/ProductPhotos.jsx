import React, {useEffect, useRef} from "react";
import Dunks1 from "../photos/Dunks1.jpg";
import JersenDunks from "../photos/jersendunks_v2.webm";
import Dunks2 from "../photos/Dunks2.webp";
import Dunks3 from "../photos/Dunks3.webp";
import Dunks4 from "../photos/Dunks4.webp";
import Dunks5 from "../photos/Dunks5.webp";
import Dunks6 from "../photos/Dunks6.webp";

const ProductPhotos = () => {

  const videoEl = useRef(null);
  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4 h-fit">
      <div>
        <img src={Dunks1}></img>
      </div>
      <div>
        <video 
          playsInline
          loop
          muted
          src={JersenDunks}
          ref={videoEl}/>
        
      </div>
      <div>
        <img src={Dunks2}></img>
      </div>
      <div>
        <img src={Dunks3}></img>
      </div>
      <div>
        <img src={Dunks4}></img>
      </div>
      <div>
        <img src={Dunks5}></img>
      </div>
      <div>
        <img src={Dunks6}></img>
      </div>
    </div>
  );
};

export default ProductPhotos;
