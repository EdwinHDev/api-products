const Product = require('../models/Product')
const { connectDB } = require('../db/connection')

const createProduct = async (req, res) => {
  const { category = "", subCategories = "", characteristics = [], condition = "", description = "", freeShipping = false, images = [], name = "", stock = 0, price = 0, companyName = "", discount = 0, rating = {}, status = "" } = req.body

  if(category === "") {
    return res.status(401).json({ message: "La categoría es requerida." })
  }

  if(subCategories === "") {
    return res.status(401).json({ message: "La sub-categoría es requerida." })
  }

  if(condition === "") {
    return res.status(401).json({ message: "La condición es requerida." })
  }

  if(description === "") {
    return res.status(401).json({ message: "La description es requerida." })
  }

  if(images.length === 0) {
    return res.status(401).json({ message: "Las imagenes son requeridas." })
  }

  if(name === "") {
    return res.status(401).json({ message: "El nombre es requerido." })
  }

  if(stock === 0) {
    return res.status(401).json({ message: "El stock es requerido." })
  }

  if(price === 0) {
    return res.status(401).json({ message: "El precio es requerido." })
  }

  if(companyName === "") {
    return res.status(401).json({ message: "El nombre de la empresa es requerido." })
  }

  if(discount === 0) {
    return res.status(401).json({ message: "El descuento es requerido." })
  }

  if(status === "") {
    return res.status(401).json({ message: "El estatus es requerido." })
  }

  const newProduct = new Product({
    category,
    subCategories,
    characteristics,
    condition,
    description,
    freeShipping,
    images,
    name,
    stock,
    price,
    companyName,
    discount,
    rating,
    status
  })

  await connectDB();

  try {
    await newProduct.save();
    res.json({ message: "Producto creado correctamente" })
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Algo salio mal" })
  }
}

const getProducts = async (req, res) => {
  
  await connectDB();
  const products = await Product.find()

  if(products.length === 0) {
    return res.json({ message: "No hay productos para mostrar" })
  }

  return res.json(products)
}

const getProductById = async (req, res) => {
  const { id } = req.params

  await connectDB();
  const product = await Product.findById(id)

  if(!products) {
    return res.status(404).json({ message: "No existe un producto con esa id." })
  }
  
  return res.json(product)
}

module.exports = {
  createProduct,
  getProducts,
  getProductById
}