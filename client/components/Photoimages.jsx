import React from "react";
import Dunks1 from "/photoImages/Dunks1.webp";
import JersenDunks from "/photoImages/jersendunks.gif"
import Dunks2 from "/photoImages/Dunks2.webp";
import Dunks3 from "/photoImages/Dunks3.webp";
import Dunks4 from "/photoImages/Dunks4.webp";
import Dunks5 from "/photoImages/Dunks5.webp";
import Dunks6 from "/photoImages/Dunks6.webp";




const PhotoImages = () => {
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
                <div>
                <img src={Dunks6}></img>
                </div>
            </div>
    
    )
}

export default PhotoImages;

