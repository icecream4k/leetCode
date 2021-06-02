let obj = {
    name: 'han',
    age: 15
}
var a = JSON.parse(JSON.stringify(obj));
let b = JSON.parse(JSON.stringify(obj));
b.age += 1
console.log(a);
console.log(b);