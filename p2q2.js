const prompt=require("prompt-sync")({sigint:true});
let arr=[1,2,3,4]
let a
while(a!=0)
{
a=parseInt(prompt("Enter a number: "))
arr.push(a)
}
console.log(arr)