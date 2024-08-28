let numbers = [45,54,72,67,96,63,83,98,520];

// * exercise 1 *
// function minimumElement(array) {
//     let min = array[0];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] < min) {
//             min = array[i];
//         }
//     }
//     return min;
// }
// console.log(minimumElement(numbers));

// * exercise 2 *
// function maximumElement(array) {
//     let max = array[0];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > max) {
//             max = array[i];
//         }
//     }
//     return max;
// }
// console.log(maximumElement(numbers));

// * exercise 3 *
// function maximumElementIndex(array) {
//     let max = array[0];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > max) {
//             max = array[i];
//         }
//     }
//     return numbers.indexOf(max);
// }
// console.log(maximumElementIndex(numbers));

// * exercise 4 *
// function minimumElementIndex(array) {
//     let min = array[0];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] < min) {
//             min = array[i];
//         }
//     }
//     return numbers.indexOf(min);
// }
// console.log(minimumElementIndex(numbers));

// ? exercise 7 
// function sumOddIndices(array) {
//     for (let i = 0; i < array.length; i++) {
//         let sum = 0;
//         if (array[i] % 2 === 1) {
//             sum += array[i];
//             console.log(sum);
//         }
//     }
// }
// sumOddIndices(numbers);