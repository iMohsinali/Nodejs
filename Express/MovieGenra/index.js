const express=require('express')
const app=express();
const Joi=require('joi')

const Genres=
[
    {type:'action'},
    {type:'romantic'},
    {type:'horror'},
    {type:'comday'},
    {type:'motivatonal'},
    {type:'sesstional'},
]

app.get('/api/genres',(req,res)=>{
    res.send(Genres)
})

app.get('/api/genres/:type',(req,res)=>{
   
    const Genra=Genres.find(c=>c.type==req.params.type)
    if(!Genra) return res.status(400).send(`Their no type of ${req.params.type} genra`)
    res.send(Genra)
})

app.post('/api/genres',(req,res)=>{
    const Genra={
       
        type:req.body.type
    }
    Genres.push(Genra)
    res.send(Genra)
})


const port=process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`listing to port ${port}`)
})
