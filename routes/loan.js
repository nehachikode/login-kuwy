const express = require('express');
const router = express.Router();
const loanController = require('../controllers/loan');
console.log('in loan.js')

router
    .get('/show', loanController.show)

module.exports = router;