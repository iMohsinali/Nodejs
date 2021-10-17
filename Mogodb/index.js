const mongooes =require('mongoose')

mongooes.connect('mongodb://localhost/local')
.then(()=>console.log("Connectded to the database"))
.catch((err)=>console("something want wrong",err))