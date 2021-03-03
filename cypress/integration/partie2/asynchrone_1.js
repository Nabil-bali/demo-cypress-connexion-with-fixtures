// Le JavaScript est synchrone et mono-thread
// un fil d'exécution l'une après l'autre


// Synchrone

let var1 = "1ere instruction"
let var2 = "2eme instruction"

console.log(var1)
console.log(var2)


// Asynchrone

// let var1 = "1ere instruction"
// let var2 = "2e instruction"

// setTimeout(function() {
//     console.log(var1)
// }, 4000);

// console.log(var2);

// let var3 = 0
// setInterval(function(){
//      console.log(var3); 
// }, 1000);

function myFunction() {
    console.log("click")
  }
