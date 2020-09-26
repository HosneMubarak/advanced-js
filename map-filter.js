num_array = [2,3,4,5,6,7,8,9]


// for (let i = 0; i < num_array.length; i++) {
//     const element = num_array[i];
//     return element*element;

    
// }


// function squere(x) {
//     return x*x
// }

// const result1 = num_array.map(squere);
// console.log(result1)



// // # using map
// const result = num_array.map(x => x * x);
// console.log(result)

const bigger = num_array.filter(x => x>5);
console.log(bigger);