const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./db');
const Product = require('./models/Product');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Conectar MongoDB
connectDB();

// Ruta que devuelve turbantes desde MongoDB
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find(); // Todos los turbantes
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener productos" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en http://localhost:${PORT}`);
});
