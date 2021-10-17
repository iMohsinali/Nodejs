const p1=new Promise((reslove)=>{
    setTimeout(()=>{
          console.log("Operation 1")
          reslove(1)
    },2000)

})

const p2=new Promise((reslove)=>{
    setTimeout(()=>{
          console.log("Operation 2")
          reslove(2)
    },2000)

})

Promise.race([p1,p2])
.then(result=>console.log(result))
.catch(err=>console.log("error:",err.message))


setTimeout(()=>{
            
},2300)
