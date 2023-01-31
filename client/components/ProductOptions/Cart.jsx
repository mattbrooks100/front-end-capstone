import React from 'react'


//get data from backend(name, price, size, color)
const getInfo = () => {
  fetch("http://localhost:3000/api/shoes", {
  }).then((res) => res.json())
  .then((data) => {
      console.log(data[0]);
      <div>${data[0].name} ${data[0].price} ${data[0].color}</div>
  })
}
getInfo()

//post data under items in cart


const Cart = () => {

  return (
    <div>
      <div>
        <h1>Items in Cart</h1>
        <h2></h2>
      </div>
    </div>
  )
}

export default Cart
