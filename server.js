require("dotenv").config();

const productRoutes = require("./routes/productRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const express = require("express");
const cors = require("cors");
const db = require("./config/db");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/reviews", reviewRoutes);

app.get("/", async (req, res) => {
    try {

        const [rows] = await db.query(
            "SELECT COUNT(*) AS totalProducts FROM products"
        );

        res.json({
            message: "Server Running",
            totalProducts: rows[0].totalProducts
        });

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});