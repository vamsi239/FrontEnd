// let demo= function (){
//     let j=1;
//     for(let i=1;i<11;i++){
//         var res= j*i;
//         console.log(res);
//     }
//     return res;
// }

// console.log(demo());



function callback(name) {
  return "Hello " + name;
}

function processUser(callback) {   // HOF
  return callback("Vamsi");
}

console.log(processUser(callback)); // Hello Vamsi


// function demo(callback){
//     callback("hi");
// }

// function callback(name){
//     console.log(name);
// }

