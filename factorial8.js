const prompt=require("prompt-sync")({sigint:true})
let a =parseInt(prompt("Enter a number: "))
let b=1
for(let i=1;i<=a;i++){
    b=b*i;
}
console.log("The factorial of",a,"is",b)