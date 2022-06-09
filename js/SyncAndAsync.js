console.log("SyncAndASync")
var count =0;
console.log("Hello Abhishek")
console.log("Hello Deepak")
for(let i=1;i<=1000;i++){
    count++
    console.log(count + ": Synchronous Programming")
}
console.log("Hello Mohit")
console.log("Hello Abhishek")
console.log("Hello Deepak")
setTimeout(() => {
    for(let i=1;i<=1000;i++){
        count++
        console.log(count + ": Asynchronous Programming")
    }
}, 1500);
console.log("Hello Mohit")
