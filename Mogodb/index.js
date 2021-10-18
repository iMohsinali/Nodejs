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

// logical Operators
//or
//and
async function findcourse()
{
  const pagenumber=2
  const pagesize=10
  // api/course ?pagenmber= 2 & pagesize=10
    const result = await Course
    .find({author:'Mohsin',isPulished:true})

    //Regular Expression
    //first name is Mohsin end last may be different
    //.find({author:/^Mohsin/i}) // i is used for case insansative
      //first name may change end last Mohsin
    //.find({author:/Mohsin$/i})
      //when name came in middle
    //.find({author:/.*Mohsin.*/i})
//  .find()
//  .or([{author:'Mohsin'},{isPulished:true}])
 // .find({price:{$gt:10,$lt:20}}) //price is greater then 10 and less then 20
 // .find({price {$in:[10,20,30]}}) //price is 10 or 20 0r 30
    .skip((pagenumber-1)*pagesize)
    .limit(pagesize)              //pagenation
    .sort({name:1})
    .select({name:1})
    console.log(result) 
}
findcourse()