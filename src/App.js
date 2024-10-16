import React from "react";
import { useSelector } from "react-redux";
import Container from "./components/Container";

const App = () => {
  const items = useSelector((state) => state.items);

  return (
    <div className="app">
      <h1>Drag and Drop with Redux</h1>
      <div className="containers">
        <Container
          id="A"
          items={items.filter((item) => item.container === "A")}
        />
        <Container
          id="B"
          items={items.filter((item) => item.container === "B")}
        />
      </div>
    </div>
  );
};

export default App;
