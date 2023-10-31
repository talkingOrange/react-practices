import React from "react";
import Header from "./Header";
import Contents from "./Contents";
import Clock01 from "./Clock01";
import Clock02 from "./Clock02";

function App() {
  return (
    <div id="App">
      <Header />
      <Contents />
      <Clock01 />
      <Clock02 />
    </div>
  );
}

export { App };
