import React, { useState } from "react";
import "./styles.css";

export default function App() {
  let time = new Date().toLocaleTimeString();
  const [ctime, setCtime] = useState(time);

  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  };

  setInterval(UpdateTime, 1000);

  return (
    <div className="App">
      <h1>{time}</h1>
    </div>
  );
}
