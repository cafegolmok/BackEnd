// controllers/cafeControllers.js

const { Cafe } = require("../models");
const upload = require("../multerConfig");
const multer = require("multer");
const fs = require("fs");

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
exports.createCafe = [
  upload.single("image"),
  (error, req, res, next) => {
    if (error) {
      if (error.code === "LIMIT_FILE_SIZE") {
        res
          .status(400)
          .json({
            error: "파일 크기가 너무 큽니다. 10MB 이하의 파일만 허용됩니다.",
          });
        return;
      } else if (error.code === "INCORRECT_FILETYPE") {
        res.status(400).json({ error: "이미지만 허용됩니다" });
        return;
      } else {
        res.status(500).json({ error: "파일 업로드 중 에러가 발생했습니다" });
        return;
      }
    }

    next();
  },
  async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).send("이미지 파일이 필요합니다.");
      }
      const newCafe = await Cafe.create({
        ...req.body, // 기존 form 데이터
        image: req.file.path, // 이미지 경로 추가
      });
      res.status(201).json(newCafe);
      console.log(req.body);
    } catch (error) {
      res
        .status(400)
        .json({ message: "카페를 생성하는 중 오류가 발생했습니다" });
      console.error(error);
    }
  },
];

// 카페 정보를 수정하는 함수
exports.updateCafe = [
  upload.single("image"),
  async (req, res) => {
    try {
      let updatedInfo = req.body;
      const cafe = await Cafe.findByPk(req.params.id);

      if (req.file) {
        // 새 이미지 파일이 있을 경우

        // 기존의 이미지 파일이 있으면 삭제
        if (cafe.image && fs.existsSync(cafe.image)) {
          fs.unlink(cafe.image, (err) => {
            if (err) {
              console.error(err);
              return;
            }
          });
        }
        // 새 이미지 파일 경로를 업데이트
        updatedInfo.image = req.file.path;
      }

      // 카페 정보를 업데이트
      await Cafe.update(updatedInfo, {
        where: { id: req.params.id },
      });

      if (!cafe)
        return res
          .status(404)
          .json({ message: "해당 카페를 찾을 수 없습니다" });

      res.status(200).json({ message: "카페가 성공적으로 업데이트되었습니다" });
      console.log(req.body);
    } catch (error) {
      res
        .status(400)
        .json({ message: "카페를 업데이트하는 중 오류가 발생했습니다" });
      console.error(error);
    }
  },
];

// 카페를 삭제하는 함수
exports.deleteCafe = async (req, res) => {
  try {
    const cafe = await Cafe.findByPk(req.params.id);

    if (!cafe)
      return res.status(404).json({ message: "해당 카페를 찾을 수 없습니다" });

    // 카페의 이미지 파일이 있으면 삭제
    if (cafe.image && fs.existsSync(cafe.image)) {
      fs.unlink(cafe.image, (err) => {
        if (err) {
          console.error(err);
          return;
        }
      });
    }

    // 카페를 삭제
    await Cafe.destroy({
      where: { id: req.params.id },
    });

    res.status(200).json({ message: "카페가 성공적으로 삭제되었습니다" });
    console.log(req.body);
  } catch (error) {
    res.status(400).json({ message: "카페를 삭제하는 중 오류가 발생했습니다" });
    console.error(error);
  }
};
