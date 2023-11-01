import React from "react";
import FoodListItem from "./FoodListItem";

function FoodList({ foods }) {
  return (
    <ul>
      {/**map함수에서 key값은 주는 것이 좋음.(성능) 반복되는 element를 구분한다. */}
      {foods.map((food) => (
        <FoodListItem key={food.no} name={food.name} count={food.count} />
      ))}
    </ul>
  );
}

export default FoodList;
