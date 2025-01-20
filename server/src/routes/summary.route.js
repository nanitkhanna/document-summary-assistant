const express = require('express');
const {summaryController} = require('../controllers');
const uploadFile = require('../middlewares/uploadFile');
const {summaryValidation} = require('../validations');
const router = express.Router();

//post request for genreating summary
router.post(
  '/',
  summaryValidation.generateSummary,
  uploadFile(),
  summaryController.generateSummary
);

module.exports = router;
