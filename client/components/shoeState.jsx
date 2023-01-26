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
      "7",
      "7.5",
      "8",
      "8.5",
      "9",
      "9.5",
      "10",
      "10.5",
      "11",
      "11.5",
      "12",
      "12.5",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
    ],
  },
});

export default shoeState;
