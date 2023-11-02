import React from "react";
import Card from "./Card";

function CardList(props) {
  return (
    <div>
      {props.title}
      <Card />
    </div>
  );
}

export default CardList;
