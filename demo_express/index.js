const express = require("express");
const app = express(); // Inicializar servidor
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/perros/:name?", (req, res) => {
  const name = req.params.name;
  console.log(name);
  console.log(req.params);
  const perros = [
    { name: "mordisquitos", age: 2 },
    { name: "toby", age: 3 },
    { name: "peluson", age: 5 },
    { name: "bob", age: 3 },
  ];
  if(name){ // devuelve 1 perro
    const perro_encontrado = perros.find((perro) => perro.name === name);
    perro_encontrado?
            res.status(200).json(perro_encontrado)
            :res.status(404).json({}); // si no encuentra el perro devuelve un objeto vacio

  }else {
    res.status(200).json(perros); // devuelve todos los perros
  }
});

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
