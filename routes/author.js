const express = require('express');
const router = express.Router();
const articleController = require('../controllers/author');
//router.get('/author',articleController.getAllAuthors);
router.get('/author/:id',articleController.getAuthorsById);
module.exports = router;