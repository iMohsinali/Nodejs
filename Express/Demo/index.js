const debug=require('debug')('app:startup')
//for databse
const db_dbugger=require('debug')('app:db')
const config=require('config')
const Joi =require('joi')
const log=require('./logger')
const morgan =require('morgan')
const auth=require('./authntication')
const express= require("express")
const courese=require('./Routes/courses') 

const app =express()
app.use(express.json()) //build in middleware
//configration
console.log("Application name:" + config.get('name'))
console.log("mail server name:"  + config.get('mail.host'))
//console.log("mail server password:"  + config.get('mail.password'))
if(app.get('env')==='development')
{
  app.use(morgan('tiny'))
  debug("margan is enalbe")

}
app.use(log) //custom middleware
app.use(auth) //custom middleware

app.use(express.urlencoded({extended:true})) //build in middleware
app.use(express.static('public'))
app.use('/api/courses',courese)
const port =process.env.PORT || 3002
app.listen(port,()=>console.log(`listing to port  ${port}`))


