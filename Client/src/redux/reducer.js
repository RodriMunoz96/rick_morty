const initialState = {
  myFavorites: [],
  allCharacters: [],
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_FAV":
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };

    case "REMOVE_FAV":
      return { ...state, myFavorites: action.payload };

    case "FILTER":
      return {
        ...state,
        myFavorites: state.allCharacters.filter(
          (char) => char.gender === action.payload
        ),
      };

    case "ORDER":
      if (action.payload === "A") {
        state.allCharacters.sort(function (a, b) {
          return a.id - b.id;
        });
      }
      if (action.payload === "D") {
        state.allCharacters.sort(function (a, b) {
          return b.id - a.id;
        });
      }
      return {
        ...state,
        myFavorites: [...state.allCharacters],
      };

    default:
      return {
        ...state,
      };
  }
}
