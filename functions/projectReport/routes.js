const express = require('express');
const router = express.Router();
const { coverpage } = require('./controller.js');

router.post('/coverpage', coverpage);

module.exports = router;
