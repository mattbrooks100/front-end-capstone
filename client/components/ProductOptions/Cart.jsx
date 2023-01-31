import React from 'react'
import shoeState from './shoeState'
import { useRecoilState } from 'recoil'
import Dunks1 from "/photos/Dunks1.jpg";

const Cart = () => {
  const [shoe, setShoe] = useRecoilState(shoeState)
  
  return (
    <div>
      <div className="Cart" style={{border:'2px solid black', padding:'18px'}}>
        <h1 style={{fontSize:'25px', font:'bold'}}>Items in Cart</h1>
        <h2 style={{fontSize:'20px', font:'bold'}}>Name: {shoe.length && shoe[0].name}</h2>
        <h3 style={{fontSize:'20px', font:'bold'}}>Price: ${shoe.length && shoe[0].price}</h3>
        <h4 style={{fontSize:'20px', font:'bold'}}>Color: {shoe.length && shoe[0].color}</h4>
        <h5 style={{fontSize:'20px', font:'bold'}}>Size: </h5>
        <h6 style={{fontSize:'20px', font:'bold'}}>Quantity: </h6>
        <img style={{width:'80px', height:'80px'}} src={Dunks1}></img>
      </div>
    </div>
  )
}

export default Cart
