const Product = require('../models/product');

// Get all products
exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get similar products when searched by Name
exports.getProductByName = async (req, res) => {
    try {
        const name = req.params.name;
        
        const products = await Product.find({ name: name });

        if (!products || products.length === 0)
            return res.status(404).json({ message: 'Products not found' });

        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
// Get similar products when searched by Category
exports.getProductByCategory = async (req, res) => {
    try {
        const category = req.params.category;
        const products = await Product.find({ category: category });

        if (!products || products.length === 0)
            return res.status(404).json({ message: 'Products not found' });

        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get single product
exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.json(product);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create product
exports.createProduct = async (req, res) => {
    const product = new Product(req.body);
    try {
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update product
exports.updateProduct = async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProduct) return res.status(404).json({ message: 'Product not found' });
        res.json(updatedProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete product
exports.deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) return res.status(404).json({ message: 'Product not found' });
        res.json({ message: 'Product deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

