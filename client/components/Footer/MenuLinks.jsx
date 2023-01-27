import React from "react";

const MenuLinks = () => {
  return (
    <div className="grid grid-cols-3">
      <div className="flex flex-col my-10 gap-y-4 text-xs font-semibold">
        <a>GIFT CARDS</a>
        <a>PROMOTIONS</a>
        <a>FIND A STORE</a>
        <a>SIGN UP FOR EMAIL</a>
        <a>BECOME A MEMBER</a>
        <a>NIKE JOURNAL</a>
        <a>SEND US FEEDBACK</a>
      </div>
      <div className="flex flex-col my-10 gap-y-4 text-xs text-gray-500">
        <a className="text-white">GET HELP</a>
        <a>Order Status</a>
        <a>Shipping and Delivery</a>
        <a>Returns</a>
        <a>Payment Options</a>
        <a>Gift Card Balance</a>
        <a>Contact Us</a>
      </div>
      <div className="flex flex-col my-10 gap-y-4 text-xs text-gray-500">
        <a className="text-white">ABOUT NIKE</a>
        <a>News</a>
        <a>Careers</a>
        <a>Investors</a>
        <a>Purpose</a>
        <a>Sustainability</a>
      </div>
    </div>
  );
};

export default MenuLinks;
