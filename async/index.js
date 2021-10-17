console.log("before")
// getUser(1,(user)=>{
//             githubrepos(user.name,(repo)=>{
//               gitcommit(repo[0],(commit)=>{
//                   console.log(commit)
//               })
//             })
// })

// getUser(1)
// .then(user=>githubrepos(user.name))
// .then(repos=>gitcommit(repos[0]))
// .then(commit=>console.log(commit))
// .catch(err=>console.log("Error:",err.message))


displaycommit()
console.log("after")

function  getUser(id)
{
    return new Promise((reslove,reject)=>{
        setTimeout(()=>{
            console.log("User conecting to database")
            reslove({id:id,name:"Moshin ali"})
        },2000) 
    })
   

}

function  githubrepos(user)
{
    return new Promise((reslove,reject)=>{
        setTimeout(()=>{
            console.log("connectiong github repo")
            //reslove(["repo1","repo2","repo3"])
            reject(new Error("Counld not connect"))
        },2000)
    })
   
  

}

function  gitcommit(repo)
{
    return new Promise((reslove,reject)=>{
        setTimeout(()=>{
            console.log("connectiong github commit..........")
            reslove(["commit"])
        },2000)
    })


}

async function displaycommit()

{
    try{
   const user =await getUser(1)
   const repo =await githubrepos(user.name)
   const commit =await gitcommit(repo[0])
   console.log(commit)}
   catch(err)
   {
      console.log("Error",err.message)
   }
}