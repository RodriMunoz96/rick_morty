import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Detail() {
  const { detailId } = useParams();

  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${detailId}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else window.alert("No se ha encontrado el personaje");
      }
    );
    return setCharacter({});
  }, [detailId]);

  return (
    <div>
      {character.name ? (
        <div>
          <h2>{character.name}</h2>
          <h4>{character.status}</h4>
          <h4>{character.species}</h4>
          <h4>{character.gender}</h4>
          <h4>{character.origin.name}</h4>
          <p>{character.image}</p>
        </div>
      ) : (
        <h2>Cargando información, por favor no se haga el loco y espere</h2>
      )}
    </div>
  );
}
