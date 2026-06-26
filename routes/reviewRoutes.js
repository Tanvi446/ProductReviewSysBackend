const express = require("express");

const router = express.Router();

const {
  getReviewsByProductId,
  addReview,
  updateReview,
  deleteReview,
  reportReview,
  getAllReviewsForAdmin,
  hideReview 
} = require("../controllers/reviewController");

router.get("/product/:productId", getReviewsByProductId);
router.post("/", addReview );
router.put("/:reviewId", updateReview);
router.delete("/:reviewId",deleteReview);
router.put("/report/:reviewId", reportReview);
router.get("/admin/product/:productId",getAllReviewsForAdmin);
router.put("/hide/:reviewId",hideReview);

module.exports = router;