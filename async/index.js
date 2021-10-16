console.log("before")
getUser(1,(user)=>{
            githubrepos(user.name,(repo)=>{
                console.log("repo",repo)
            })
})


console.log("after")

function  getUser(id,callback)
{
    setTimeout(()=>{
        console.log("User conecting to database")
        callback({id:id,name:"Moshin ali"})
    },2000)

}

function  githubrepos(id,callback)
{
    setTimeout(()=>{
        console.log("github repo")
        callback(["repo1","repo2","repo3"])
    },2000)

}