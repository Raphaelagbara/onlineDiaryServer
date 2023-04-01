const express = require("express");
const {
  getEntries,
  createEntries,
  updateEntry,
  deleteEntry,
  likePost,
} = require("../controllers/entries");
const app = express();
const router = express.Router();

//defining the routes
router.get("/", getEntries);
router.post("/", createEntries);
router.get("/:id", getEntries);
router.patch("/:id", updateEntry);
router.delete("/:id", deleteEntry);
router.patch("/:id/likePost", likePost);

module.exports = router;
