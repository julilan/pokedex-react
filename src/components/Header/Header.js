import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <Link to="/">
        <h1>Pokedex 2.0</h1>
      </Link>
      <Nav />
    </header>
  );
};

export default Header;
