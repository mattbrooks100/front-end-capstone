import { atom } from "recoil";

const shoeState = atom({
  key: "shoeState",
  default: {
    id: 1,
    name: "Nike Air Force 1 '07",
    category: "Men's Shoes",
    price: "110",
    color: ["White", "Black", "Design Your Own"],
    sizes: [
      "6",
      "6.5",
      "7.0",
      "7.5",
      "8.0",
      "8.5",
      "9.0",
      "9.5",
      "10.0",
      "10.5",
      "11.0",
      "11.5",
      "12.0",
      "12.5",
      "13.0",
      "13.5",
      "14.0",
      "14.5",
      "15.0",
      "15.5",
      "16.0",
      "16.5",
      "17.0",
      "17.5",
      "18.0",
    ],
  },
});

export default shoeState;
