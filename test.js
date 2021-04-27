const obj1 = {
    color: 'red',
    widht: 200,
    height: 400,
}
const a = obj1 => obj1

const b = obj1 => obj1
a.color = 'green'
b.color = 'yellow'
console.log(`a => ${a.color}`);
console.log(`b => ${b.color}`);