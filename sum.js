// const number = [44, 23,47, 34, 32, 54, 5, 78];
// let sum = 0;
// for (let i = 0; i < number.length; i++) {
//     const element = number[i];
//     sum = sum + element;

// }
// console.log(sum);


// Same task done by used function

function arrayTotal(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum = sum + element;

    }
    return sum ;
}
const total = arrayTotal(21, 42, 54);
console.log('array total', total)