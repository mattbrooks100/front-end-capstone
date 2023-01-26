import React, { useEffect, useState } from "react";
import PhotoImages from "./Photoimages";


const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/tasks", {
      mode: "cors",
    })
      .then((res) => res.json())
      .then((tasks) => {
        setTasks(tasks);
      });
  }, []);

  return (
    <main>
      {tasks.map((task) => (
        <span className="task" key={task.id}>
          {task.description}
        </span>
      ))}
      <PhotoImages />

    </main>
  );
};

export default App;
