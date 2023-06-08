// controllers/cafeControllers.js

const { Cafe } = require("../models");

// 모든 카페를 가져오는 함수
exports.getAllCafes = async (req, res) => {
  try {
    const cafes = await Cafe.findAll();
    res.status(200).json(cafes);
    console.log(req.body);
  } catch (error) {
    res.status(400).json({ message: "카페를 불러오는 중 오류가 발생했습니다" });
    console.error(error);
  }
};

// 특정 카페를 가져오는 함수
exports.getCafe = async (req, res) => {
  try {
    const cafe = await Cafe.findByPk(req.params.id);
    if (!cafe)
      return res.status(404).json({ message: "해당 카페를 찾을 수 없습니다" });
    res.status(200).json(cafe);
    console.log(req.body);
  } catch (error) {
    res.status(400).json({ message: "카페를 불러오는 중 오류가 발생했습니다" });
    console.error(error);
  }
};

// 새로운 카페를 생성하는 함수
exports.createCafe = async (req, res) => {
  try {
    const newCafe = await Cafe.create(req.body);
    res.status(201).json(newCafe);
    console.log(req.body);
  } catch (error) {
    res.status(400).json({ message: "카페를 생성하는 중 오류가 발생했습니다" });
    console.error(error);
  }
};

// 카페 정보를 수정하는 함수
exports.updateCafe = async (req, res) => {
  try {
    const cafe = await Cafe.update(req.body, {
      where: { id: req.params.id },
    });
    if (!cafe)
      return res.status(404).json({ message: "해당 카페를 찾을 수 없습니다" });
    res.status(200).json({ message: "카페가 성공적으로 업데이트되었습니다" });
    console.log(req.body);
  } catch (error) {
    res
      .status(400)
      .json({ message: "카페를 업데이트하는 중 오류가 발생했습니다" });
    console.error(error);
  }
};

// 카페를 삭제하는 함수
exports.deleteCafe = async (req, res) => {
  try {
    const cafe = await Cafe.destroy({
      where: { id: req.params.id },
    });
    if (!cafe)
      return res.status(404).json({ message: "해당 카페를 찾을 수 없습니다" });
    res.status(200).json({ message: "카페가 성공적으로 삭제되었습니다" });
    console.log(req.body);
  } catch (error) {
    res.status(400).json({ message: "카페를 삭제하는 중 오류가 발생했습니다" });
    console.error(error);
  }
};
