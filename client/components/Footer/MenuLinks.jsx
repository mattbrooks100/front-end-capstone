import React from "react";
import Link from "./Link";

const MenuLinks = () => {
  const leftList = [
    "GIFT CARDS",
    "PROMOTIONS",
    "FIND A STORE",
    "SIGN UP FOR EMAIL",
    "BECOME A MEMBER",
    "NIKE JOURNAL",
    "SEND US FEEDBACK",
  ];

  const centerList = [
    "Order Status",
    "Shipping and Delivery",
    "Returns",
    "Payment Options",
    "Gift Card Balance",
    "Contact Us",
  ];

  const rightList = ["News", "Careers", "Investors", "Purpose", "Sustainability"];

  return (
    <div className="grid grid-cols-3 max-w-[700px] w-3/4">
      <div className="flex flex-col my-10 gap-y-4 text-xs font-semibold">
        {leftList.map((link) => (
          <Link key={link} link={link} />
        ))}
      </div>
      <div className="flex flex-col my-10 gap-y-4 text-xs text-gray-500">
        <a href="#" className="text-white font-semibold">
          GET HELP
        </a>
        {centerList.map((link) => (
          <Link key={link} link={link} />
        ))}
      </div>
      <div className="flex flex-col my-10 gap-y-4 text-xs text-gray-500">
        <a href="#" className="text-white font-semibold">
          ABOUT NIKE
        </a>
        {rightList.map((link) => (
          <Link key={link} link={link} />
        ))}
      </div>
    </div>
  );
};

export default MenuLinks;
