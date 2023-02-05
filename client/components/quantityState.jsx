import { atom } from "recoil";

const quantityState = atom({
  key: "quantityState",
  default: 0
});

export default quantityState;