// controllers/bookmarkController.js

const { Bookmark } = require("../models");

// 모든 북마크 정보를 가져오는 함수
exports.getAllBookmarks = async (req, res) => {
  try {
    const bookmarks = await Bookmark.findAll();
    res.status(200).json(bookmarks);
  } catch (error) {
    res
      .status(400)
      .json({ message: "북마크를 불러오는 중 오류가 발생했습니다" });
    console.error(error);
  }
};

// 특정 북마크 정보를 가져오는 함수
exports.getBookmark = async (req, res) => {
  try {
    const bookmark = await Bookmark.findByPk(req.params.id);
    if (!bookmark)
      return res
        .status(404)
        .json({ message: "해당 북마크를 찾을 수 없습니다" });
    res.status(200).json(bookmark);
  } catch (error) {
    res
      .status(400)
      .json({ message: "북마크를 불러오는 중 오류가 발생했습니다" });
    console.error(error);
  }
};

// 새로운 북마크를 생성하는 함수
exports.createBookmark = async (req, res) => {
  try {
    const newBookmark = await Bookmark.create(req.body);
    res.status(201).json(newBookmark);
  } catch (error) {
    res
      .status(400)
      .json({ message: "북마크를 생성하는 중 오류가 발생했습니다" });
    console.error(error);
  }
};

// 북마크 정보를 수정하는 함수
exports.updateBookmark = async (req, res) => {
  try {
    const bookmark = await Bookmark.update(req.body, {
      where: { id: req.params.id },
    });
    if (!bookmark)
      return res
        .status(404)
        .json({ message: "해당 북마크를 찾을 수 없습니다" });
    res.status(200).json({ message: "북마크가 성공적으로 업데이트되었습니다" });
  } catch (error) {
    res
      .status(400)
      .json({ message: "북마크를 업데이트하는 중 오류가 발생했습니다" });
    console.error(error);
  }
};

// 북마크를 삭제하는 함수
exports.deleteBookmark = async (req, res) => {
  try {
    const bookmark = await Bookmark.destroy({
      where: { id: req.params.id },
    });
    if (!bookmark)
      return res
        .status(404)
        .json({ message: "해당 북마크를 찾을 수 없습니다" });
    res.status(200).json({ message: "북마크가 성공적으로 삭제되었습니다" });
  } catch (error) {
    res
      .status(400)
      .json({ message: "북마크를 삭제하는 중 오류가 발생했습니다" });
    console.error(error);
  }
};
