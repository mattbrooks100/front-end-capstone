import React from "react";
import { RecoilRoot } from "recoil";
import Carousel from "./Carousel";
import ProductOptions from "./ProductOptions/ProductOptions.jsx";
import Footer from "./Footer/Footer";
import Info from "./info";
import Explore from "./Explore";
import PhotoImages from "./photoImages";


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
      <PhotoImages />
      <ProductOptions />
      <Carousel />
      <Info/>
      <Explore />
      <Footer />
    </RecoilRoot>
  );
};

export default App;
