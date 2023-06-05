const mongoose =require('mongoose') ;


const CountrSchema = new mongoose.Schema(
    {
        name :String  ,
    }
)

module.exports = mongoose.model("Country",CountrSchema) ;