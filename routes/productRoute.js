const express = require('express')
const router = express.Router()
const { getProducts , UpdateProduct , createProduct ,deleteProduct} = require('../controller/productController')

router.get('/products', getProducts);
router.post('/products', createProduct)
router.put('/products/:id', UpdateProduct )
router.delete('/products/:id', deleteProduct)

module.exports = router