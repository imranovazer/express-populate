const express = require("express")
const WriterController = require("../controller/WriterController")

const router = express.Router() 


router.route("/").get(WriterController.getAllWriters).post(WriterController.createWriter) ;

router.route("/:id").get(WriterController.getOneWriter).delete(WriterController.deleteWriter) ;

module.exports = router;