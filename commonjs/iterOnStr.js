let x = 'atrithaker';
let nx = '';
let i =0;
console.log(x);
for(i = 0; i<x.length;i++)
{
    var num = x[i].charCodeAt(0)+1;
    var char = String.fromCharCode(num);
    nx+=(char);
}
console.log(nx);