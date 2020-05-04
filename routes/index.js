
var express = require('express');
var router = express.Router();
var ctrlmain = require('../controllers/main.js');
var ctrlupload = require('../controllers/upload.js');
var ctrlplaylist = require('../controllers/playlist.js');
var ctrlplay = require('../controllers/play.js');
var ctrluploadFile = require('../controllers/file.js');
var ctrldelete = require('../controllers/delete.js');
var ctrlcheck = require('../controllers/check.js');
var ctrlcompleteFile = require('../controllers/completeFile.js');

/* Main page. */
router.get('/', ctrlmain.show);

/* Play page. */
//router.post('/play/:objectid', function(req, res) {ctrlplay.play});
router.get('/play/:objectid', ctrlplay.playgame);

/* PlayList page. */
router.get('/playlist', ctrlplaylist.playlist);

/* Upload page. */
router.get('/upload', ctrlupload.upload)
router.post('/upload', ctrlupload.addFile)

router.get('/file/:pw', ctrluploadFile.uploadpage)
router.post('/file/:pw', ctrluploadFile.uploadGame)
 
/*delete page */
router.get('/delete', ctrldelete.dele);
router.post('/delete', ctrldelete.delfile);

router.get('/check/:objid', ctrlcheck.check);
router.post('/check/:objid', ctrlcheck.delet);

router.get('/completeFile', ctrlcompleteFile.uploadGame)

module.exports = router;
