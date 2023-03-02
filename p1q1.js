const obj={
    Harry:90,Rohan:80,Akash:89
}
for(let i in obj){
    console.log(obj[i])
}
for(let i=0;i<Object.keys(obj).length;i++){
console.log("The marks of",Object.keys(obj)[i],"is",obj[Object.keys(obj)[i]])
}