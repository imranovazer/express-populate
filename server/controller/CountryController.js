const Country =require('../model/Country') ;


exports.getAllCountries=async(req,res)=>
{
    try {
        const data  = await Country.find() ;
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
exports.getOneCountry=async(req,res)=>
{
    try {
        const data  = await Country.findById(req.params.id) ;
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
exports.deleteCountry=async(req,res)=>
{
    try {
        const data  = await Country.findByIdAndDelete(req.params.id) ;
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
exports.createCountry=async(req,res)=>
{
    try {
        console.log(req.body.name)
        const newCountry = {
            name:req.body.name ,
        }
        const data  = await Country.create(newCountry) ;
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