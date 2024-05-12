const express = require('express')
const { createProduct, getProducts, getProductById } = require('../controllers/productsController')

const router = express.Router()

router.get("/", getProducts)
router.post("/", createProduct)
router.get("/:id", getProductById)

module.exports = router