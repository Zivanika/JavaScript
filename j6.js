const prompt=require("prompt-sync")({sigint:true})
let num=parseInt(prompt("Enter a number: "))
if(num%2==0 && num%3==0)
{
    console.log(num,"is divisible by both 2 and 3")
}
else if(num%2==0)
{
    console.log(num,"is only divisible by 2")
}
else if(num%3==0)
{
    console.log(num,"is only divisible by 3")
}
else{
    console.log(num,"is not divisible by either 2 or 3")
}