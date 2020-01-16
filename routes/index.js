var express = require('express');
var router = express.Router();
var ctrlmain = require('../controllers/main.js');

/* Main page. */
router.get('/', ctrlmain.show);

/* PlayList page. */
router.get('/playlist', ctrlmain.playlist);

/* Upload page. */
router.get('/upload', ctrlmain.upload);
 
module.exports = router;
