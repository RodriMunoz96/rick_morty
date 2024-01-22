import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import axios from "axios";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";

function App() {
  const [characters, setCharacters] = useState([]);

  const [access, setAccess] = useState(false);

  const navigate = useNavigate();

  async function login(userData) {
    try {
      const { email, password } = userData;
      const URL = "http://localhost:3001/rickandmorty/login/";

      const { data } = await axios(
        URL + `?email=${email}&password=${password}`
      );

      setAccess(data);
      access && navigate("/home");
    } catch (error) {
      alert(error.message);
    }
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  async function onSearch(id) {
    try {
      const { data } = axios(
        `http://localhost:3001/rickandmorty/character/${id}`
      );

      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      }
    } catch (error) {
      alert(error.message);
    }
  }

  const onClose = (id) => {
    const closeCard = characters.filter((char) => char.id !== parseInt(id));
    setCharacters(closeCard);
  };

  const logout = () => {
    setAccess(false);
  };

  return (
    <div className="App">
      <Nav onSearch={onSearch} logout={logout} />
      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/" element={<Form login={login} />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
