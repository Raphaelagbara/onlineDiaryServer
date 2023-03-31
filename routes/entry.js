const express = require("express");
const { getEntries, createEntries } = require("../controllers/entries");
const app = express();
const router = express.Router();

//defining the routes
router.get("/", getEntries);
router.post("/", createEntries);

module.exports = router;
