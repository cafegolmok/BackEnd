// controllers/userController.js

const { User } = require("../models");
const upload = require("../multerConfig");

// 모든 사용자를 가져오는 함수
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
    console.log(req.body);
  } catch (error) {
    console.error(error);
    res
      .status(400)
      .json({ message: "사용자를 불러오는 중 오류가 발생했습니다" });
  }
};

// 특정 사용자를 가져오는 함수
exports.getUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user)
      return res.status(404).json({ message: "사용자를 찾을 수 없습니다" });
    res.status(200).json(user);
    console.log(req.body);
  } catch (error) {
    console.error(error);
    res
      .status(400)
      .json({ message: "사용자를 불러오는 중 오류가 발생했습니다" });
  }
};

// 새로운 사용자를 생성하는 함수
exports.createUser = [
  upload.single("image"),
  async (req, res) => {
    try {
      const newUser = await User.create({
        ...req.body,
        image: req.file ? req.file.path : "default.jpg", // 이미지 경로 추가
      });
      res.status(201).json(newUser);
    } catch (error) {
      res
        .status(400)
        .json({ message: "사용자를 생성하는 중 오류가 발생했습니다" });
      console.error(error);
    }
  },
];

// 사용자 정보를 수정하는 함수
exports.updateUser = [
  upload.single("image"),
  async (req, res) => {
    try {
      const updatedUser = { ...req.body };
      if (req.file) updatedUser.image = req.file.path;
      const user = await User.update(updatedUser, {
        where: { id: req.params.id },
      });
      if (!user)
        return res.status(404).json({ message: "사용자를 찾을 수 없습니다" });
      res
        .status(200)
        .json({ message: "사용자가 성공적으로 업데이트되었습니다" });
    } catch (error) {
      res
        .status(400)
        .json({ message: "사용자를 업데이트하는 중 오류가 발생했습니다" });
    }
  },
];

// 사용자를 삭제하는 함수
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.destroy({
      where: { id: req.params.id },
    });
    if (!user)
      return res.status(404).json({ message: "사용자를 찾을 수 없습니다" });
    res.status(200).json({ message: "사용자가 성공적으로 삭제되었습니다" });
    console.log(req.body);
  } catch (error) {
    console.error(error);
    res
      .status(400)
      .json({ message: "사용자를 삭제하는 중 오류가 발생했습니다" });
  }
};
