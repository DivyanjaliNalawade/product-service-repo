const express = require('express');
const productRoutes = require('./routes/productRoutes');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load env variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Initializing app
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);

module.exports = app;
