const express = require("express")
const CountryController = require("../controller/CountryController")

const router = express.Router() 


router.route("/").get(CountryController.getAllCountries).post(CountryController.createCountry) ;

router.route("/:id").get(CountryController.getOneCountry).delete(CountryController.deleteCountry)
module.exports = router;