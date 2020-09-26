const student = [
    {id:21, name: 'Omar sunny'},
    {id:31, name: 'Mannnaaa'},
    {id:41, name: 'Maiori'},
    {id:51, name: 'DeepJol'},
];

name =[];

// for (let i = 0; i < student.length; i++) {
//     const element = student[i];
//     name.push(element.name);
// }

// console.log(name);



const names = student.map(n => n.name)

const bigger = student.filter(n => n.id>25);
const biggerOne = student.find(n => n.id>25);

console.log(names)
console.log(bigger)
console.log(biggerOne)