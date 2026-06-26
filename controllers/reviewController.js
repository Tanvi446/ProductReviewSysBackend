const db = require("../config/db");

const getReviewsByProductId = async (req, res) => {
    try {

        const { productId } = req.params;

        const [reviews] = await db.query(
        `SELECT * FROM product_review WHERE product_id = ? AND status = 'Visible'`, [productId]
      );

        res.status(200).json(reviews);

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }
};

const addReview = async (req, res) => {

  try {

    const {
      product_id, user_id, username, rating, review_text
    } = req.body;

    await db.query(
      `INSERT INTO product_review(product_id,user_id,username,rating,review_text)
      VALUES (?, ?, ?, ?, ?)`,
      [ product_id, user_id, username, rating, review_text ]);

    res.status(201).json({
      message: "Review Added Successfully"
    });

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

};

const updateReview = async (req, res) => {

  try {

    const { reviewId } = req.params;

    const {
      product_id, user_id, username, rating, review_text
    } = req.body;

    await db.query(
      `
      UPDATE product_review SET
        product_id = ?,
        user_id = ?,
        username = ?,
        rating = ?,
        review_text = ?
      WHERE review_id = ? `,
      [product_id, user_id, username, rating, review_text, reviewId]
    );

    res.status(200).json({
      message: "Review Updated Successfully"
    });

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

};

const deleteReview = async (req, res) => {

  try {

    const { reviewId } = req.params;

    await db.query(
      ` DELETE FROM product_review WHERE review_id = ? `,
      [reviewId]
    );

    res.status(200).json({
      message: "Review Deleted Successfully"
    });

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

};

const reportReview = async (req, res) => {

  try {

    const { reviewId } = req.params;

    await db.query(
      `UPDATE product_review SET status = 'Reported' WHERE review_id = ?`,[reviewId]
    );

    res.status(200).json({
      message: "Review Reported Successfully"
    });

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

};

const getAllReviewsForAdmin = async (
  req,
  res
) => {

  try {

    const { productId } =
      req.params;

    const [reviews] =
      await db.query(
        `SELECT * FROM product_review WHERE product_id = ?`,[productId]
      );

    res.status(200).json(
      reviews
    );

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

};

const hideReview = async (
  req,
  res
) => {

  try {

    const { reviewId } =
      req.params;

    await db.query(
      `UPDATE product_review SET status = 'Hidden' WHERE review_id = ? `,[reviewId]
    );

    res.status(200).json({
      message:
        "Review Hidden Successfully"
    });

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

};

module.exports = {
    getReviewsByProductId,
    addReview,
    updateReview,
    deleteReview,
    reportReview,
    getAllReviewsForAdmin,
    hideReview
};