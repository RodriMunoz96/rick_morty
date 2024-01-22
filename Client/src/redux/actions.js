import axios from "axios";

export const addFav = (character) => {
  try {
    const endpoint = "http://localhost:3001/rickandmorty/fav";

    return async (dispatch) => {
      const { data } = await axios.post(endpoint, character);

      return dispatch({
        type: "ADD_FAV",
        payload: data,
      });
    };
    // eslint-disable-next-line no-unreachable
  } catch (error) {
    alert(error.message);
  }
};

export const removeFav = (id) => {
  try {
    const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;

    return async (dispatch) => {
      const { data } = await axios.delete(endpoint);

      return dispatch({
        type: "REMOVE_FAV",
        payload: data,
      });
    };
  } catch (error) {
    alert(error.message);
  }
};

export function filterCards(gender) {
  return {
    type: "FILTER",
    payload: gender,
  };
}

export function orderCards(orden) {
  return {
    type: "ORDER",
    payload: orden,
  };
}
