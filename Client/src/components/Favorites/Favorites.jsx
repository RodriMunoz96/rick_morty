import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import Card from "../Card/Card";
import { filterCards, orderCards } from "../../redux/actions";

export function Favorites(props) {
  const { myFavorites, onClose } = props;

  const [aux, setAux] = useState(false);

  const dispatch = useDispatch();

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    if (aux === false) {
      setAux(true);
    } else {
      setAux(false);
    }
  };

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  return (
    <div>
      <h3>Lista de favoritos</h3>
      <select onChange={handleOrder}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>
      <select onChange={handleFilter}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
      </select>
      {myFavorites.map((fav) => (
        <Card
          key={fav.id}
          id={fav.id}
          name={fav.name}
          status={fav.status}
          species={fav.species}
          gender={fav.gender}
          origin={fav.origin}
          image={fav.image}
          onClose={onClose}
        />
      ))}
    </div>
  );
}

export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export default connect(mapStateToProps, null)(Favorites);
