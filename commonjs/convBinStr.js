let x = 'atrithaker';
let nx = '';
let i =0;
console.log(x);
for(i = 0; i<x.length;i++)
{
    var num = x[i].charCodeAt(0);
    var char = num.toString(2);
    // char = x[i].toString(2);
    nx+=(char+" ");
}
console.log(nx);