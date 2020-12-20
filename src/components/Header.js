import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <div className="header">
    <Link className="title">Todo List</Link>
    <Link to="/">Home</Link>
    <Link to="/taches">Taches</Link>
  </div>
);

export default Header;
