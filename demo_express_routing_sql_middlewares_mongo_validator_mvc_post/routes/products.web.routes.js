const productsWebController = require('../controllers/products.web.controller');
const router = require('express').Router();


router.get('/create', function(req, res){
    res.render('create_product.pug');
  });

// GET http://localhost:3000/products
// GET http://localhost:3000/products/6
router.get("/:id?", productsWebController.getProduct);

router.post("/", productsWebController.createProduct);


module.exports = router;