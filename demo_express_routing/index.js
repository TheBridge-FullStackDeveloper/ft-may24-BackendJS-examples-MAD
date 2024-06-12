const express = require("express");
const app = express(); // Inicializar servidor
const port = 3000;

// Rutas
const booksRoutes = require("./routes/books.routes")
const productsRoutes = require("./routes/products.routes")

app.use(express.json()); // Habilito recepción de JSON en servidor

app.get("/", (req, res) => {
  res.send("Hello Wodffdrld let's go for cofedfd!");
});

// Rutas
//API
app.use('/api/books',booksRoutes);
app.use('/api/products',productsRoutes);


app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
