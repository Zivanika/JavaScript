const prompt=require("prompt-sync")({sigint:true})
let age=parseInt(prompt("Enter your age: "))
console.log("You can",age>18? "can drive" : "cannot drive")