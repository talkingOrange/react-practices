import React, { useState, useEffect } from "react";
import styles from "./assets/css/KanbanBoard.css";
import CardList from "./CardList";
//import cards from "./assets/json/data";

const KanbanBoard = () => {
  const [cards, setCards] = useState(null);

  const fetchCards = async () => {
    try {
      const response = await fetch("/api/card", {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: null,
      });

      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const json = await response.json();

      if (json.result !== "success") {
        throw new Error(`${json.result} ${json.message}`);
      }

      console.log(json.data);
      setCards(json.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <div className={styles.KanbanBoard}>
      {cards === null ? null : (
        <>
          <CardList
            key={"To Do"}
            title={"To Do"}
            cards={cards.filter((card) => card.status === "ToDo")}
          />
          <CardList
            key={"Doing"}
            title={"Doing"}
            cards={cards.filter((card) => card.status === "Doing")}
          />
          <CardList
            key={"Done"}
            title={"Done"}
            cards={cards.filter((card) => card.status === "Done")}
          />
        </>
      )}
    </div>
  );
};

export default KanbanBoard;
