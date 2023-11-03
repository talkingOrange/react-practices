import React from "react";
import data from "./assets/json/data";
import CardList from "./CardList";
import styles from "./assets/scss/KanbanBoard.scss";

function Kanbanboard(props) {
  const cardsToDo = data.filter((card) => card.status === "ToDo");
  console.log(cardsToDo);

  return (
    <div className={styles.Kanbanboard}>
      <CardList title="To Do" />
      <CardList title="Doing" />
      <CardList title="Done" />
    </div>
  );
}

export default Kanbanboard;
