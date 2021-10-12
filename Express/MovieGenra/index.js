const express=require('express')
const app=express();
const Joi=require('joi')
app.use(express.json())
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
   const {error}= Validation(req.body)
   if(error)
   {
       res.status(400).send(error.details[0].message)
       return
   }
    const Genra={
       
        type:req.body.type
    }
    Genres.push(Genra)
    res.send(Genra)
})

app.put('/api/genres/:type',(req,res)=>{

    const Genra =Genres.find(c=>c.type==req.body.type)
    if(!Genra) return res.status(400).send(`Theri is no ${req.body.type} gerna`)
    
    const {error}=Validation(req.body)

    if(error) return res.status(400).send(error.details[0].message)
     Genra.type=req.body.type
     res.send(Genra)



})

app.delete('/api/genres/:type',(req,res)=>{

    const Gerna=Genres.find(c=>c.type==req.body.type)
    if(!Gerna) return res.status(400).send(`Their is no ${req.body.type} is found`)

    
    const index =Genres.indexOf(Gerna)
    Genres.splice(index,1) //remove the index
   //Return
   res.send(Gerna)
})

const port=process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`listing to port ${port}`)
})


function Validation(Genra){
    const schema=Joi.object({type:Joi.string().min(3).required()})
    return schema.validate(Genra)
}