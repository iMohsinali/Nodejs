const mongoose =require('mongoose')
const db='mongodb+srv://mohsin:mohsin@cluster0.sh635.mongodb.net/mernstack?retryWrites=true&w=majority'
mongoose.connect(db,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false
 }).then(()=>
 console.log("conneted to the database"))
 .catch((err)=>{
     console.log("no connection")
 })
const courseSchema = new mongoose.Schema({
    name: {
      type:String,
      required:true,
    },
    category:{
        type:String,
        required:true,
        enum:['web','net','mobi']

    },
    tags: {
      type:Array,
      required:true,
      validate:{
        isAsync:true,
        validator:function(v,callback){
          setTimeout(()=>{
          const result= v && v.length>0
          callback(result)
        },4000)
         
        },
        message:"A course should have atleat one tag"
      }
    },
    date: {type:Date,default:Date.now},
    isPulished: Boolean,
    price:{type:Number,
      min:10,
      max:200,
      required:function(){
     return this.isPulished
    }}

})
//This is class
const Course= mongoose.model('user',courseSchema)
async function createCourse()
{
    const course =new Course({            //This is object
        name:"Node",
        category:'net',
        author:'Mohsin',                //constructor
        tags:[],
        isPulished:true,
        price:13
    })
    
    try
    {
     const result = await course.save()
     console.log(result)
    }
    catch(err)
    {
      for(field in err.error)
      console.log(err.error[field].message)
    }

     
}
createCourse()

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
    return result = await Course
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
   
}
/*
async function update(id){
 const course= await Course.findById(id)
 if(!course)
 return
 course.isPulished=true
 course.author="New author"
const result = await course.save()
console.log(result)

}
*/
async function update(id){
  const result= await Course.update({_id:id},{
    $set:{
      author:"Mohsin",
      isPulished:false

    }
  })

 console.log(result)
 
 }
update("617b927573152712ec3b2416")

async function remove(id){

 const result= await Course.deleteOne({_id:id})
console.log(result)  
 }
remove("617b927573152712ec3b2416")
async function run()
{
const course=await findcourse()
console.log(course)
}

run()

