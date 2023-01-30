import React, { useEffect, useState } from "react";
import Header from "./Header";
import { FaFontAwesome } from "react-icons/fa";
import "/app.css"
const App = () => {
  const [tasks, setTasks] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:3000/api/tasks", {
  //     mode: "cors",
  //   })
  //     .then((res) => res.json())
  //     .then((tasks) => {
  //       setTasks(tasks);
  //     });
  // }, []);

  return (
    <main>
       <Header/>
      {/* {tasks.map((task) => (
        <span className="task" key={task.id}>
          {task.description} */}
        {/* </span> */}
  
    </main>
  );
};

export default App;
