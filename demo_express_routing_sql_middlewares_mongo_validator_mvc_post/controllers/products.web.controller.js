const Product = require("../models/products.model");

// CREATE
const createProduct2 = async (req, res) => {
  console.log("*************************+");
  console.log(req.body);
  const { title, price, description, image } = req.body;
  
  fetch("http://localhost:3000/api/products", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, price, description, image }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      res.redirect("/products");
    });
};

// CREATE 2
const createProduct = async (req, res) => {
  console.log(req.body);

  try{
      const data = req.body;
      let answer = await new Product(data).save();
      res.status(201).redirect("/products");

  }catch (error) {
      console.log(`ERROR: ${error.stack}`);
      res.status(400).render("create_product.pug",{msj:`ERROR: ${error.stack}`});
  }
}

// READ
const getProduct = async (req, res) => {
  try {
    const id = req.params.id;
    let products = id
      ? await Product.find({ id }, "-_id -__v")
      : await Product.find({}, "-_id -__v"); //{}
    res
      .status(200)
      .render("products.pug", { products, msj: "tus superproductos" }); // Respuesta de la API para 1 producto
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
    res.status(400).json({ msj: `ERROR: ${error.stack}` });
  }
};

module.exports = {
  getProduct,
  createProduct,
};
