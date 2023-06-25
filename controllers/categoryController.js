// controllers/categoryController.js

const { Category } = require("../models");

module.exports = {
  // 카테고리 생성
  async createCategory(req, res) {
    try {
      const category = await Category.create(req.body);
      res.send(category);
    } catch (err) {
      res.status(500).send({ error: "카테고리 생성 중 오류 발생" });
    }
  },

  // 모든 카테고리 조회
  async getAllCategories(req, res) {
    try {
      const categories = await Category.findAll();
      res.send(categories);
    } catch (err) {
      res.status(500).send({ error: "카테고리 조회 중 오류 발생" });
    }
  },

  // 카테고리 수정
  async updateCategory(req, res) {
    try {
      const category = await Category.update(req.body, {
        where: { id: req.params.id },
      });
      res.send(category);
    } catch (err) {
      res.status(500).send({ error: "카테고리 수정 중 오류 발생" });
    }
  },

  // 카테고리 삭제
  async deleteCategory(req, res) {
    try {
      await Category.destroy({
        where: { id: req.params.id },
      });
      res.send({ message: "카테고리 삭제됨" });
    } catch (err) {
      res.status(500).send({ error: "카테고리 삭제 중 오류 발생" });
    }
  },
};
