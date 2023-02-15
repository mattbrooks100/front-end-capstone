import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import Header from "./Header";
import ProductPhotos from "./ProductPhotos";
import Carousel from "./Carousel";
import ProductOptions from "./ProductOptions/ProductOptions.jsx";
import Footer from "./Footer/Footer";
import Info from "./info";
import Explore from "./Explore";
import "/app.css";
import shoeState from "./ProductOptions/shoeState";
import { Route, Routes } from "react-router-dom";
import CheckOut from "./checkoutpage";
import Summary from "./summary";
import reviewState from "./reviewState";

const App = () => {
  const [shoe, setShoe] = useRecoilState(shoeState);
  const [reviews, setReview] = useRecoilState(reviewState);

  useEffect(() => {
    fetch("/api/shoes/medium_curry", {
      mode: "cors",
    })
      .then((res) => res.json())
      .then((shoe) => {
        setShoe(shoe[0]);
      });
    fetch("/api/reviews", {})
      .then((res) => res.json())
      .then((reviews) => {
        setReview(reviews);
      });
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <Header />
            <div className="flex gap-16 mt-8 px-8 justify-center">
              <ProductPhotos />
              <div className="w-[420px]">
                <ProductOptions />
                <Info reviews={reviews}/>
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
        }
      />
      <Route
        path="/checkout"
        element={
          <div>
            <div>
              <Header />
            </div>
            <div className="flex gap-16 mt-8 px-8 justify-center min-h-[calc(100vh-676px)]">
              <CheckOut />
              <div>
                <Summary />
              </div>
            </div>
            <div>
              <Footer />
            </div>
          </div>
        }
      />
    </Routes>
  );
};

export default App;
