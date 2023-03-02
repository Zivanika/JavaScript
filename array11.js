let a1=[1,2,3,4]
let a2=[10,20,30,40]
let a3=[100,200,300,400]
let New_Array=a1.concat(a2,a3)
console.log(a1)
console.log(a2)
console.log(a3)
console.log(New_Array)
const ascend=(x,y)=>{
    return x-y
}
a4=[1,10,3,8]
a4.sort(ascend)
console.log(a4)
a1.splice(1,2,2000,3000)
console.log(a1)
console.log(a1.slice(1))
console.log(a1)
console.log(a1.reverse())
console.log(a1)
