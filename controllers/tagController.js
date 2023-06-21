// controllers/tagController.js

const { Tag } = require("../models");

module.exports = {
  // 태그 생성
  async createTag(req, res) {
    try {
      const tag = await Tag.create(req.body);
      res.send(tag);
    } catch (err) {
      res.status(500).send({ error: "태그 생성 중 오류 발생" });
    }
  },

  // 모든 태그 조회
  async getAllTags(req, res) {
    try {
      const tags = await Tag.findAll();
      res.send(tags);
    } catch (err) {
      res.status(500).send({ error: "태그 조회 중 오류 발생" });
    }
  },

  // 태그 수정
  async updateTag(req, res) {
    try {
      const tag = await Tag.update(req.body, {
        where: { id: req.params.id },
      });
      res.send(tag);
    } catch (err) {
      res.status(500).send({ error: "태그 수정 중 오류 발생" });
    }
  },

  // 태그 삭제
  async deleteTag(req, res) {
    try {
      await Tag.destroy({
        where: { id: req.params.id },
      });
      res.send({ message: "태그 삭제됨" });
    } catch (err) {
      res.status(500).send({ error: "태그 삭제 중 오류 발생" });
    }
  },
};
