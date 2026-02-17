console.log("one");

setTimeout(()=>{
    console.log("one.one");
},3000)

console.log("two");
setTimeout(()=>{
    console.log("two.one");
},0)

console.log("three");
setTimeout(()=>{
    console.log("three.one");
},3000)

