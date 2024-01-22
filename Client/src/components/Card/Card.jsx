/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import estilos from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";

function Card(props) {
  const {
    id,
    onClose,
    name,
    status,
    species,
    gender,
    origin,
    image,
    addFav,
    removeFav,
    myFavorites,
  } = props;

  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav === true) {
      setIsFav(false);
      removeFav(id);
    }
    if (isFav === false) {
      setIsFav(true);
      addFav(props);
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className={estilos.card}>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      <button onClick={() => onClose(id)}>X</button>
      <Link to={`/detail/${id}`}>
        <h2>Name: {name}</h2>
      </Link>
      <h2>Status: {status}</h2>
      <h2>Species: {species}</h2>
      <h2>Gender: {gender}</h2>
      <h2>Origin: {origin.name}</h2>
      <img src={image} alt="Imagen cargando" />
    </div>
  );
}

export function mapDispatchToProps(dispatch) {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
}

export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
