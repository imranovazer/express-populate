const mongoose =require('mongoose') ;


const WriterSchema = new mongoose.Schema(
    {
        name :String  ,
        lastName : String ,
        birthDate : {
            type : Date,
        },
        country : {
            type : mongoose.Schema.Types.ObjectId ,
            ref : "Country"
        } ,
        addDate :  {
            type : Date ,
            default : new Date()
        }

    }
)

module.exports = mongoose.model("Writer",WriterSchema) ;