const express = require("express")
const BookController = require("../controller/BookController")

const router = express.Router()


router.route("/").get(BookController.getAllBooks).post(BookController.createBook);

router.route("/:id").get(BookController.getOneBook).delete(BookController.deleteBook)
module.exports = router;