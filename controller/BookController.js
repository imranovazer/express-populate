const Book =require('../model/Book') ;


const { v4: uuidv4 } = require('uuid')
var fs = require('fs');

exports.getAllBooks=async(req,res)=>
{
    try {
        const data  = await Book.find().populate("writer") ;
        res.status(201).json({
            status:"success",
            data
        })
        
    } catch (error) {
        res.status(400).json({
            status:"fail",
            error
        })
        
    }
    
}
exports.getOneBook=async(req,res)=>
{
    try {
        const data  = await Book.findById(req.params.id).populate("writer") ;
        res.status(201).json({
            status:"success",
            data
        })
        
    } catch (error) {
        res.status(400).json({
            status:"fail",
            error
        })
        
    }
    
}
exports.deleteBook=async(req,res)=>
{
    try {
        const data  = await Book.findByIdAndDelete(req.params.id) ;
        res.status(201).json({
            status:"success",
            data
        })
        
    } catch (error) {
        res.status(400).json({
            status:"fail",
            error
        })
        
    }
    
}
exports.createBook =  async(req, res) => {

    try {
        console.log(req.files)
        let file = req.files.photo;
        let fileExt = file.name.substring(file.name.lastIndexOf('.'))
        uploadPath = __dirname + '/../images/' + uuidv4()+fileExt
       
        file.mv(uploadPath, function (err) {


            console.log(err)
    
        })
        const newBook = {
            name:req.body.name ,
            description:req.body.description ,
            imagePath : uploadPath ,
            writer:req.body.writer 
        }
        const data  = await Book.create(newBook) ;
        res.status(201).json({
            status:"success",
            data
        })
        
    } catch (error) {
        res.status(400).json({
            status:"fail",
            error
        })
        
    }

   

  

    

}


