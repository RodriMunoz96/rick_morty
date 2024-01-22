const URL = "https://rickandmortyapi.com/api/character/";
const axios = require("axios");

const getCharById = async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = await axios.get(`${URL}${id}`);

    let character = {
      id: data.id,
      name: data.name,
      species: data.species,
      status: data.status,
      gender: data.gender,
      origin: data.origin,
      image: data.image,
    };

    return character.name
      ? res.status(200).json(character)
      : res.status(404).send("No existe el personaje");
    
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// async function getCharById(req, res) {
//   try {
//     const { id } = req.params;
//     await axios.get(`${URL}${id}`).then((response) => {
//       const data = response.data;
//       res.status(200).json({
//         id: data.id,
//         name: data.name,
//         species: data.species,
//         status: data.status,
//         gender: data.gender,
//         origin: data.origin,
//         image: data.image,
//       });
//     });
//   } catch {
//     if (data && !id) res.status(400).send("No encontrado");
//     else res.status(500).send("Ha ocurrido un error");
//   }
// }
module.exports = {
  getCharById,
};
