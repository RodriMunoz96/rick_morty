import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import estilos from "./Nav.module.css";
import { Link, useLocation } from "react-router-dom";

export default function Nav(props) {
  const { onSearch, logout } = props;

  const { pathname } = useLocation();

  return (
    <nav>
      {pathname !== "/" && (
        <div className={estilos.searchBar}>
          <SearchBar onSearch={onSearch} />
          <Link to="/about">
            <button>About</button>
          </Link>
          <Link to="/home">
            <button>Home</button>
          </Link>
          <Link to="/">
            <button onClick={logout}>Logout</button>
          </Link>
          <Link to="/favorites">
            <button>Favorites</button>
          </Link>
        </div>
      )}
    </nav>
  );
}
