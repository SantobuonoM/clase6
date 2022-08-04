const Contenedor = require("./Contenedor.js");
const express = require("express");
const app = express();
const PORT = 8080;

const server = app.listen(process.env.PORT || PORT, () =>
  console.log(`Server listening on PORT ${PORT}`)
);
server.on("error", (error) => console.log(`Error: ${error}`));

let productos = new Contenedor("productos.txt");

app.get("/productos", async (req, res) => {
  let productosArray = await productos.readAll();
  res.send(productosArray);
});
app.get("/productoRandom", async (req, res) => {
  let prods = await productos.readAll();
  let random = Math.floor(Math.random() * prods.length);
  res.send(prods[random]);
});
