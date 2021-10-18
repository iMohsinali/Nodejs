const mongooes =require('mongoose')

mongooes.connect('mongodb://localhost/Playground')
.then(()=>console.log("Connectded to the database"))
.catch((err)=>console("something want wrong",err))
const courseSchema = new mongooes.Schema({
    name: String,
    author: String,
    tags: [String],
    date: {type:Date,default:Date.now},
    isPulished: Boolean


})
//This is class
const Course= mongooes.model('course',courseSchema)
async function createCourse()
{
    const course =new Course({            //This is object
        name:'Angular Course',
        author:'Mohsin',                //constructor
        tags:['angular','Frontend'],
        isPulished:true
    })
    
     const result = await course.save()
    

     
}
//createCourse()

//Operators
//eq equal to
//neq not equal to
//gt greater then
//gte greater then equal to
//lt less   then
//lte less then equal to
//in      
//nin
async function findcourse()
{
    const result = await Course
    .find({author:'Mohsin',isPulished:true})
 // .find({price:{$gt:10,$lt:20}}) //price is greater then 10 and less then 20
 // .find({price {$in:[10,20,30]}}) //price is 10 or 20 0r 30
    .limit(10)
    .sort({name:1})
    .select({name:1})
    console.log(result) 
}
findcourse()