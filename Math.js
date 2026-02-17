function add(a,b){
    return a+b;
}
function product(a,b){
    return a*b;
}
let sum = add(5,3);
let multiply = product(2,3);
console.log("Addition",sum);
console.log("Multiplication",multiply);
module.export=(add,product);
