import React from "react";

function App() {
  return (
    <div id={"App"}>
      <h1 onclick={function () {console.log('click!')}}>inline styling</h1>
    </div>
  );
}

export { App };
