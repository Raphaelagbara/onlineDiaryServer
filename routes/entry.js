const express = require('express');
const {getEntries} = require("./controllers/entries");
const app = express();
const router = express.Router();

//defining the routes
router.get('/',getEntries);

module.exports = router;