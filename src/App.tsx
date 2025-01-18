import "./App.css";
import React from "react";

function App() {
  const [items, setItems] = React.useState(["Item 1"]);

  const handleClick = () => {
    const newItems = [...items, "Ne item"];
    setItems(newItems);
  };

  return (
    <div>
      <h1>Simple todo list</h1>
      <div>{items}</div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default App;