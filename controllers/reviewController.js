// controllers/reviewController.js

const { Review } = require("../models");

// 모든 리뷰를 가져오는 함수
const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.findAll();
    res.status(200).json(reviews);
    console.log(req.body);
  } catch (error) {
    res.status(400).json({ message: "리뷰를 불러오는 중 오류가 발생했습니다" });
    console.error(error);
  }
};

// 특정 ID를 가진 리뷰를 가져오는 함수
const getReview = async (req, res) => {
  try {
    const review = await Review.findByPk(req.params.id);
    if (!review)
      return res.status(404).json({ message: "해당 리뷰를 찾을 수 없습니다" });
    res.status(200).json(review);
    console.log(req.body);
  } catch (error) {
    res.status(400).json({ message: "리뷰를 불러오는 중 오류가 발생했습니다" });
    console.error(error);
  }
};

// 새로운 리뷰를 생성하는 함수
const createReview = async (req, res) => {
  try {
    const newReview = await Review.create(req.body);
    res.status(201).json(newReview);
    console.log(req.body);
  } catch (error) {
    res.status(400).json({ message: "리뷰를 생성하는 중 오류가 발생했습니다" });
    console.error(error);
  }
};

// 특정 리뷰를 수정하는 함수
const updateReview = async (req, res) => {
  try {
    const review = await Review.update(req.body, {
      where: { id: req.params.id },
    });
    if (!review)
      return res.status(404).json({ message: "해당 리뷰를 찾을 수 없습니다" });
    res.status(200).json({ message: "리뷰가 성공적으로 업데이트되었습니다" });
    console.log(req.body);
  } catch (error) {
    res
      .status(400)
      .json({ message: "리뷰를 업데이트하는 중 오류가 발생했습니다" });
    console.error(error);
  }
};

// 특정 리뷰를 삭제하는 함수
const deleteReview = async (req, res) => {
  try {
    const review = await Review.destroy({
      where: { id: req.params.id },
    });
    if (!review)
      return res.status(404).json({ message: "해당 리뷰를 찾을 수 없습니다" });
    res.status(200).json({ message: "리뷰가 성공적으로 삭제되었습니다" });
    console.log(req.body);
  } catch (error) {
    res.status(400).json({ message: "리뷰를 삭제하는 중 오류가 발생했습니다" });
    console.error(error);
  }
};

module.exports = {
  getAllReviews,
  getReview,
  createReview,
  updateReview,
  deleteReview,
};
