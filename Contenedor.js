const fs = require("fs/promises");
class Contenedor {
  constructor(fileName) {
    this.fileName = fileName;
    this.contador = 0;
    this.readAll().then((data) => {
      !data ? this.write([]) : null;
    });
  }

  async save(object) {
    try {
      let archivo = await this.readAll();
      object.id = this.contador + 1;

      archivo.push(object);

      await this.write(archivo);
      this.contador++;
    } catch (err) {
      console.log(err);
    }
  }

  async getById(id) {
    try {
      let archivo = await this.readAll();

      let obj = archivo.find((el) => el.id === id);
      return obj ? obj : null;
    } catch (error) {
      console.log(error);
    }
  }

  /*async getAll() {
    try {
      let archivo = await this.readAll();
      return archivo;
    } catch (error) {
      console.log(err);
    }
  }*/

  async deletedById(id) {
    try {
      let archivo = await this.readAll();
      let filtrado = archivo.filter((el) => el.id != id);

      await this.write(filtrado);
    } catch (error) {
      console.log(error);
    }
  }

  async deleteAll() {
    try {
      await this.write([]);
    } catch (error) {
      console.log(error);
    }
  }

  async write(data) {
    try {
      await fs.writeFile(this.fileName, JSON.stringify(data, null, 2));
    } catch (error) {
      console.log(error);
    }
  }

  async readAll() {
    try {
      const file = (await fs.readFile(this.fileName, "utf-8")) || [];
      let archivo = JSON.parse(file);
      return archivo;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Contenedor;
