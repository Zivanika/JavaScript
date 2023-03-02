const prompt=require("prompt-sync")({sigint:true});
let a=prompt("Enter your age: ")
if(a>0){
    console.log("Valid age")
}
else
{
    console.log("Invalid age")
}