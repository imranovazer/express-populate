const Writer =require('../model/Writer') ;


exports.getAllWriters=async(req,res)=>
{
    try {
        const data  = await Writer.find().populate("country") ;
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
exports.getOneWriter=async(req,res)=>
{
    try {
        const data  = await Writer.findById(req.params.id).populate("country") ;
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
exports.deleteWriter=async(req,res)=>
{
    try {
        const data  = await Writer.findByIdAndDelete(req.params.id) ;
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
exports.createWriter=async(req,res)=>
{
    try {
        const newWriter = {
            name:req.body.name ,
            surname:req.body.surname ,
            birthDate : req.body.birthDate ,
            country:req.body.country 
        }
        const data  = await Writer.create(newWriter) ;
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