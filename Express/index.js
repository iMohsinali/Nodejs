const express= require("express")
const app =express()

app.get("/",(req,res)=>{
    res.send("Hello world")
})

app.get("/api/about",(req,res)=>{
    res.send([1,2,3,4,5,6])
})
PORT=5000
const port =process.env.PORT || 3002
app.listen(port,()=>console.log(`listing to port  ${port}`))