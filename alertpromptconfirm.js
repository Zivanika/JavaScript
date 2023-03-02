// // Online Javascript Editor for free
// // Write, Edit and Run your Javascript code using JS Online Compiler
// alert("Enter the value of a: ")
const prompt=require("prompt-sync")({sigint:true});
let a=prompt("Enter the value of a:")
let write=confirm("Do you want to write to the page?")
if(write){
    console.log(document.write(a))
}
else
{
    console.log("Please let me write to the page")
}