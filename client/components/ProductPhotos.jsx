import React from "react";
import Dunks1 from "../photos/Dunks1.jpg";
import JersenDunks from "../photos/jersendunks.gif";
import Dunks2 from "../photos/Dunks2.jpg";
import Dunks3 from "../photos/Dunks3.jpg";
import Dunks4 from "../photos/Dunks4.jpg";
import Dunks5 from "../photos/Dunks5.jpg";
import Dunks6 from "../photos/Dunks6.jpg";

const ProductPhotos = () => {
  return (
    <div class="grid grid-cols-2 gap-4">
      <div>
        <img src={Dunks1}></img>
      </div>
      <div>
        <img src={JersenDunks}></img>
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
