const express = require("express");
const server = express();
const morgan = require("morgan");
const PORT = 3001;
const router = require("./routes/indexRoutes.js");
const { conn } = require("./DB_connection.js");

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use(express.json());
server.use(morgan("dev"));

server.use("/rickandmorty", router);

conn.sync({ force: true });

server.listen(PORT, () =>
  console.log(`El servidor está escuchando en el puerto ${PORT}`)
);

// const { getCharById } = require("./controllers/getCharById");
// http
//   .createServer((req, res) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");

//     if (req.url.includes("/rickandmorty/character")) {
//       const id = req.url.split("/").pop();
//       getCharById(res, id);
//     }
//   })
//   .listen(PORT, "localhost", () => {
//     console.log("el servidor funciona correctamente");
//   });

// const data = require("./utils/data");
//     if (req.url.includes("/rickandmorty/character")) {
//       const id = req.url.split("/rickandmorty/character")[1].split("/")[1];
//       const character = data.find((ch) => ch.id === parseInt(id));
//       res.writeHead(200, { "Content-Type": "application/json" });
//       res.end(character);
//     } else return new Error("No se encontró el personaje con el id solicitado");
//   })
