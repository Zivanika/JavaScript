const prompt=require("prompt-sync")({sigint:true});
let x=10
let a
while(a!=x){
     a=prompt("Enter a number: ")
     console.log("Try again")
}
console.log("You have entered the correct number")