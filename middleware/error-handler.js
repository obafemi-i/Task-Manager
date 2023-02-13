const customErrorHandler = (err,req,res,next)=>{
    res.status(500).json({msg:err})
}

module.exports = customErrorHandler