import React from "react";
import FoodList from "./FoodList";

function App() {
  const foods = [
    { name: "Bread", count: "10" },
    { name: "Egg", count: "20" },
    { name: "Milk", count: "5" },
  ];
  return (
    <div id={"App"}>
      <FoodList foods={foods} />
    </div>
  );
}

export { App };
