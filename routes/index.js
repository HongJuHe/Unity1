var express = require('express');
var router = express.Router();
var ctrlmain = require('../controllers/main.js');
var ctrlupload = require('../controllers/upload.js');
var ctrlplaylist = require('../controllers/playlist.js');
<<<<<<< HEAD
var ctrluploadFile = require('../controllers/file.js');

=======
>>>>>>> 15ff6c3fdced1f9a6e51f85996729c531fc3d73c

/* Main page. */
router.get('/', ctrlmain.show);

/* PlayList page. */
router.get('/playlist', ctrlplaylist.playlist);

/* Upload page. */
router.get('/upload', ctrlupload.upload);

router.post('/upload', ctrlupload.addFile)
<<<<<<< HEAD

router.get('/file', ctrluploadFile.uploadpage)
router.post('/file', ctrluploadFile.uploadGame)
=======
>>>>>>> 15ff6c3fdced1f9a6e51f85996729c531fc3d73c
 
module.exports = router;
