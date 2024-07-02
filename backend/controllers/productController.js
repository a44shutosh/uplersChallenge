const { Product } = require('../models');

exports.getProducts = async (req, res) => {
    const products = await Product.findAll();
    res.json(products);
};

exports.getProductById = async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
};
