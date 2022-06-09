console.log("Promises")
var isHappy = new Promise((resolve,reject)=>{
    let randomVal = Math.ceil(Math.random()*10);
    console.log(randomVal)
    let x=randomVal;
    if(x%2===0){
        resolve('I m Happy.')
    }
    else{
        reject("I m not Happy.")
    }
});

isHappy.then((val)=>{ 
    console.log(val)
}).catch((error)=>{
    console.log(error)
})