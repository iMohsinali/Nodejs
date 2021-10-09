const express= require("express")
const app =express()

app.get("/",(req,res)=>{
    res.send("Hello world")
})

app.get("/api/about",(req,res)=>{
    res.send([1,2,3,4,5])
})

app.listen(3001,()=>console.log("listing to port 3000"))