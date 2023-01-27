import React, { useEffect, useState } from "react";
import Carousel from "./Carousel";
<<<<<<< HEAD
=======
import Info from "./info";
import Explore from "./Explore";
>>>>>>> fd536c0db6b78d334a8c4bb93b97e6cd1e0f1a22


const App = () => {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/shoes", {
      mode: "cors",
    })
      .then((res) => res.json())
      .then((shoes) => {
        setShoes(shoes);
      });
  }, []);

  return (
    
    <main>
      {shoes.map((shoe) => (
        <span className="task" key={shoe.id}>
          {shoe.name}
        </span>
      ))}
      <Carousel />
      <Info/>
      <Explore />
    </main>
  );
};

export default App;
