function auth(req,res,next){
    console.log("athenticating....")
    next()
}

module.exports=auth;