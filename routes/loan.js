const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const loanController = require('../controllers/loan');

router
    .get('/show', auth, loanController.show)

module.exports = router;