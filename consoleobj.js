console.time("forLoop")
for(let i=0;i<5;i++)
{
    console.log("hello")

}

console.time("whileLoop")
let i=0
while(i<5){
console.log("hello")
i++
}
console.timeEnd("whileLoop")
console.timeEnd("forLoop")