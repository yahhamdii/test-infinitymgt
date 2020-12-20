import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const logout = async () => {
    await localStorage.removeItem("user");
    await window.location.reload(true);
  };
  return (
    <div className="header">
      <Link className="title">Todo List</Link>

      {localStorage.getItem("user") ? (
        <div>
          <Link to="/taches">Taches</Link>
          <Link to="/" onClick={() => logout()}>
            Déconnexion
          </Link>
        </div>
      ) : (
        <Link to="/">Home</Link>
      )}
    </div>
  );
};

export default Header;
