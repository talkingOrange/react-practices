import React, { useState } from "react";
import "./assets/scss/App.scss";
import RegisterForm from "./RegisterForm";
import SearchBar from "./SearchBar";
import Emaillist from "./Emaillist";
import data from "./assets/json/data";

function App() {
  const [emails, setEmails] = useState(data);
  const searchEamil = (keyword) => {
    const newEamils = data.filter(function (email) {
      return (
        email.firstName.indexOf(keyword) !== -1 ||
        email.lastName.indexOf(keyword) !== -1 ||
        email.email.indexOf(keyword) !== -1
      );
    });

    setEmails(newEamils);

    console.log(emails);
  };
  return (
    <div id={"App"}>
      <RegisterForm />
      <SearchBar searchEmail={searchEamil} />
      <Emaillist emails={emails} />
    </div>
  );
}

export { App };
