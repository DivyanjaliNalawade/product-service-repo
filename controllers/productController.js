const Product = require('../models/product');
const publishMessage = require('../utils/kafka');

// Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get product by ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get products by name
exports.getProductByName = async (req, res) => {
  try {
    const products = await Product.find({ name: req.params.name });
    if (!products.length) return res.status(404).json({ message: 'No products found with that name' });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get products by category
exports.getProductByCategory = async (req, res) => {
  try {
    const products = await Product.find({ category: req.params.category });
    if (!products.length) return res.status(404).json({ message: 'No products found in that category' });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new product
exports.createProduct = async (req, res) => {
  const { name, description, price, imageUrl, category, quantity } = req.body;
  const product = new Product({ name, description, price, imageUrl, category, quantity });

  try {
    const savedProduct = await product.save();
    publishMessage('product_created', savedProduct);
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a product
exports.updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedProduct) return res.status(404).json({ message: 'Product not found' });

    publishMessage('product_updated', updatedProduct);
    res.json(updatedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a product
exports.deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) return res.status(404).json({ message: 'Product not found' });

    publishMessage('product_deleted', { id: req.params.id });
    res.json({ message: 'Product deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Verify and update stock
exports.verifyAndUpdateStock = async (req, res) => {
  const { productId, quantity } = req.body;

  if (!productId || quantity == null)
    return res.status(400).json({ message: 'Product ID and quantity are required' });

  try {
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    if (product.quantity < quantity)
      return res.status(400).json({ message: 'Insufficient stock' });

    product.quantity -= quantity;
    await product.save();

    publishMessage('stock_updated', { productId, quantity: product.quantity });
    res.json({ message: 'Stock updated successfully', product });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
