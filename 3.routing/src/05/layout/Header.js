import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/scss/layout/Header.scss";

export default function Header() {
  return (
    <header>
      <NavLink to={"/"}>
        <h1>Header</h1>
      </NavLink>
    </header>
  );
}
