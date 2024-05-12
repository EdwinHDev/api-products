const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv');
const path = require('path')
const uploadRouter = require('./routes/uploadRouter')
const productRoutes = require('./routes/productRoutes')

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 4000

// app.use('/uploads', express.static(path.join(__dirname, 'uploads')))
// app.use('/optimize', express.static(path.join(__dirname, 'optimize')))

app.use(express.static('uploads'))
app.use(express.static('optimize'))

app.use('/api/upload', uploadRouter)
app.use('/api/products', productRoutes)

app.listen(PORT, () => {
  console.log('Servidor en puerto', PORT)
})

module.exports = app