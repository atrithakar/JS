let num = [9,8,7,6,5,4,3,2,1,]
const atri=(a,b)=>{
    return  a-b
}
console.log(num.sort(atri))

for(let i = 0; i<num.length; i++){
    console.log(num[i])
}
