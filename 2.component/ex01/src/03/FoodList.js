//rcc : 클래스 컴포넌트
import React, { Component } from "react";
import FoodListItem from "./FoodListItem";

export default class FoodList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ul>
        {this.props.foods.map(function (food) {
          return (
            <FoodListItem key={food.no} name={food.name} count={food.count} />
          );
        })}
      </ul>
    );
  }
}
