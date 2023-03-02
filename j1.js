const prompt=require("prompt-sync")({sigint:true})
let age=parseInt(prompt("Enter your age: "))
switch(age){
    case 10:
        console.log("Your age is 10")
        break
    case 20:
        console.log("Your age is 20")
        break
    case 30:
        console.log("Your age is 30")
        break
    case 40:
        console.log("Your age is 40")
        break
}