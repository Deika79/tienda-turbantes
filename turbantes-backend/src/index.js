require('dotenv').config(); // esto debe estar al principio de index.js

const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB conectado ✅');
  } catch (error) {
    console.error('Error conectando MongoDB:', error.message);
    process.exit(1);
  }
};

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/products', async (req, res) => {
  const Product = require('./models/Product');
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener productos" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor backend escuchando en http://localhost:${PORT}`));
