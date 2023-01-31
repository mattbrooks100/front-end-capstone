import React, { useEffect } from "react";
import { RecoilRoot, useRecoilState } from "recoil";
import Header from "./Header"
import ProductPhotos from "./ProductPhotos";
import Carousel from "./Carousel";
import ProductOptions from "./ProductOptions/ProductOptions.jsx";
import Footer from "./Footer/Footer";
import Info from "./Info";
import Explore from "./Explore";
import "/app.css"
import shoeState from "./ProductOptions/shoeState";

const App = () => {
  const [shoe, setShoe] = useRecoilState(shoeState);

  useEffect(() => {
    fetch("http://localhost:3000/", {
      mode: "cors",
    })
      .then((res) => res.json())
      .then((shoe) => {
        setShoe(shoe);
      });
  }, []);

  return (
    <div>
      <Header />
      <div className="flex gap-16 mt-8 px-8 justify-center">
        <ProductPhotos />
        <div className="w-[420px]">
          <ProductOptions />
          <Info />
        </div>
      </div>
      <div className="my-16 mx-8">
        <Carousel />
      </div>
      <div className="flex flex-col items-center w-full">
        <Explore />
        <Footer />
      </div>
    </div>
  );
};

export default App;
