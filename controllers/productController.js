const db = require("../config/db");

const getAllProducts = async (req, res) => {
    try {

        const [products] = await db.query(
            "SELECT * FROM products"
        );

        res.status(200).json(products);

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }
};

const getProductById = async (req, res) => {

    try {

        const { id } = req.params;

        const [product] = await db.query(
            "SELECT * FROM products WHERE prod_id = ?",
            [id]
        );

        res.status(200).json(product[0]);

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

};

module.exports = {
    getAllProducts,
    getProductById
};