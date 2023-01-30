import React from "react";
import { RecoilRoot } from "recoil";
import ProductPhotos from "./ProductPhotos";
import Carousel from "./Carousel";
import ProductOptions from "./ProductOptions/ProductOptions.jsx";
import Footer from "./Footer/Footer";
import Info from "./Info";
import Explore from "./Explore";

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
      <header className="flex h-[100px] bg-gray-300 font-bold justify-center">
        HEADER GOES HERE
      </header>
      <div className="grid grid-cols-2 gap-16 mt-8 px-8 w-full justify-center">
        <ProductPhotos />
        <div>
          <ProductOptions />
          <Info />
        </div>
      </div>
      <div className="mt-16 mx-8">
        <Carousel />
      </div>
      <Explore />
      <Footer />
    </RecoilRoot>
  );
};

export default App;
