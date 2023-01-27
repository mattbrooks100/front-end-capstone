import React from "react";
import { RecoilRoot } from "recoil";
import Carousel from "./Carousel";
import ProductOptions from "./ProductOptions/ProductOptions.jsx";
import Footer from "./Footer/Footer";

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
      <Footer />
    </RecoilRoot>
  );
};

export default App;
