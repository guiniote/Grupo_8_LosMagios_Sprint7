const express = require('express');
const router = express.Router();
const productsController = require('../controller/productsController');

// Middlewares
const uploadFile = require('../middlewares/multerMiddleware');
const userLoggedMiddleware = require('../middlewares/userLoggedMiddleware');



// Carrito
router.get('/productCart', productsController.cart);

router.post('/productCart', productsController.cart);

// Lista de productos
router.get('/productList', productsController.list);

// Detalle de productos
router.get('/productDetail/:id', productsController.show);

// Creación de productos
router.get('/createProducts', userLoggedMiddleware, productsController.create);

router.post('/store', uploadFile.single('image'), productsController.store);

// Edición de productos
router.get('/editProducts/:id', userLoggedMiddleware, productsController.edit);

router.put ('/editProducts/:id', productsController.update);

router.get('/:id', productsController.show)

router.delete('/productDetail/:id', productsController.destroy);



module.exports = router;