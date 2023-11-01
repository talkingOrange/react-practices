import React from "react";
import FoodListItem from "./FoodListItem";

function FoodList({ foods }) {
  return (
    <ul>
      {foods.map(function (food) {
        return (
          <FoodListItem key={food.no} name={food.name} count={food.count} />
        );
      })}

      {/**
 *   <FoodListItem name={"Bread"} count={10} />
      <FoodListItem name={"Egg"} count={20} />
      <FoodListItem name={"Milk"} count={5} />
 */}
    </ul>
  );
}

export default FoodList;
