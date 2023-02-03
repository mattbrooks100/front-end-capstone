import React from "react";
import SummaryIcon from "../photos/SummaryIcon.jpg";
import { useRecoilState } from "recoil"
import shoeState from "./ProductOptions/shoeState";
import sizeState from "./sizeState.jsx";
import quantityState from "./quantityState.jsx";

const CheckOut = () => {
    const [ shoe, setShoe] = useRecoilState(shoeState)
    const [sizeSelected, setSizeSelected] = useRecoilState(sizeState);
    const [quantity, setQuantity] = useRecoilState(quantityState);



    return (
        <div>
            <div>
                <h1> Bag </h1>
                <div class="grid grid-cols-3 gap-4 h-fit">
                    <div>
                        <img src={SummaryIcon}></img>
                    </div>
                    <div>
                       <h3> {shoe.length && shoe[0].name} </h3>
                       <h3> Men's Shoes</h3>
                       <h3> {shoe.length && shoe[0].color}</h3>
                       <h3> Size: {sizeSelected} </h3>
                       <h3> Quantity: {quantity}</h3>
                    </div>
                    <div>
                        <h4>
                        ${shoe.length && shoe[0].price}
                        </h4>
                    </div>
                 </div>
                 <div>
                    <h2>
                        Shipping
                    </h2>
                    <h2>
                        Arrives by Wed
                    </h2>
                    <h2>
                        Free Pickup
                    </h2>
                    <h2>
                        Find A Store
                    </h2>
                 </div>
            </div>
        </div>
    );
  };
  



  export default CheckOut;
  