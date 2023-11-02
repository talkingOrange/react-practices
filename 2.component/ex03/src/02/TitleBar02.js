import React from "react";

export default function TitelBar02() {
  const onClickHandler = function () {
    console.log("TitleBar02 clicked");
  };
  return (
    <div>
      <h1 onClick={onClickHandler}>Function Handler</h1>
    </div>
  );
}
