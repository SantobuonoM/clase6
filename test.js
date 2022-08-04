import Contenedor from "./Contenedor.js";

const caja = new Contenedor("productos.txt");
const objeto = {
  title: "title",
  price: 100,
  thumbnail: "url de la foto del producto",
};
async function test() {
  await caja.save(objeto);

  console.log(await caja.readAll());

  await caja.save(objeto);
  await caja.save(objeto);
  await caja.save(objeto);

  console.log(await caja.readAll());

  console.log(await caja.getById(3));

  await caja.deletedById(1);

  console.log(await caja.readAll());

  //await caja.deleteAll()

  //console.log(await caja.getAll());
}

test();
