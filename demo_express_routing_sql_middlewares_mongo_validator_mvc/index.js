const express = require("express");
const app = express(); // Inicializar servidor
const port = 3000;
const path = require('path')


// Importar middlewares
const error404 = require("./middlewares/error404");
const morgan = require("./middlewares/morgan");

app.use(morgan(':method :url :status - :response-time ms :body'));

// Rutas
// API
const booksRoutes = require("./routes/books.routes")
const productsRoutes = require("./routes/products.routes")
const entriesRoutes = require("./routes/entries.routes")
// WEB
const productsWebRoutes = require("./routes/products.web.routes")

app.use(express.json()); // Habilito recepción de JSON en servidor

app.use(express.static('public')); // Habilito carpeta public

// Configuración de vistas PUG - Motor de plantillas
app.set('view engine', 'pug');
app.set('views','./views');


app.get("/", (req, res) => {
  res.send("Hello World. Let's go for coffee!");
});

// Rutas
//API
app.use('/api/books',booksRoutes);
app.use('/api/products',productsRoutes);
app.use('/api/entries',entriesRoutes);

//WEB
app.use('/products',productsWebRoutes);


// Rutas vistas
app.get('/first_template', function(req, res){
  res.render('first_view.pug');
});

app.get('/dynamic_view', function(req, res){
  res.render('dynamic.pug', {
     name: "Tortillas FullStack 2", 
     url:"http://www.tortillasFullStack.com"
  });
});

app.use(error404); // Middleware gestiona error 404
//app.use("*",error404);

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
