// js runtime environment

// event loop

console.log("hello")
setTimeout(()=>{
    console.log("user")
},3000);
console.log("world")

let a=true;
setTimeout(()=>{
    let count = 0;
    while(count){
        console.log(count);
        count++;
    }
},0)
a=!a;
