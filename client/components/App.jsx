import React, { useEffect, useState } from "react";
import Carousel from "./Carousel";


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
    </main>
  );
};

export default App;
