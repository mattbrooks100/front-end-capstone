import React from "react";
import { RecoilRoot } from "recoil";
import Carousel from "./Carousel";
import ProductOptions from "./ProductOptions.jsx";

const App = () => {
  // useEffect(() => {
  //   fetch("http://localhost:3000/api/shoes", {
  //     mode: "cors",
  //   })
  //     .then((res) => res.json())
  //     .then((shoes) => {
  //       setShoes(shoes);
  //     });
  // }, []);

  return (
    <RecoilRoot>
      <ProductOptions />
      <Carousel />
    </RecoilRoot>
  );
};

export default App;
