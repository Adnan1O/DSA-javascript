// function isPalindrome(str) {
//    const reverse = str.split(' ').reverse().join(' ')
//    return  str === reverse
// }

// console.log(isPalindrome("A man a plan a canal Panama")); // Output: true
// console.log(isPalindrome("hello")); 


// //Flatten a Nested Array
// function flattenArray(arr) {
//      return  joinedArray = arr.flat(4)
//     // return joinedArray = Array.prototype.concat.apply([], arr)
// }

// console.log(flattenArray([1, [2, [3, [4, [5]]]]])); // Output: [1, 2, 3, 4, 5]
// console.log(flattenArray([1, [2, 3], [4, 5]])); // Output: [1, 2, 3, 4, 5]


// function sumOfArguments(...arr) {
//     var sum = 0
//     for(let i=0; i < arr.length; i++ ){
//        sum += arr[i]
//     }
//     return sum
// }

// console.log(sumOfArguments(1, 2, 3, 4, 5)); // Output: 15
// console.log(sumOfArguments(10, 20, 30)); 

// function chunkArray(arr, size) {
//     const newArrays = [];
//     for(let i=0; i < arr.length ; i++){
//         const chuck = arr.slice(i,i+size)
//         newArrays.push(chuck)
//     }
//     return newArrays;
// }

// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 2)); // Output: [[1, 2], [3, 4], [5, 6], [7, 8]]
// console.log(chunkArray([1, 2, 3, 4, 5], 3)); // Output: [[1, 2, 3], [4, 5]]

function areAnagrams(str1, str2) {
    const arrange1 = str1.split('').sort().join('')
    const arrange2 = str2.split('').sort().join('')
    return arrange1 === arrange2;
}

console.log(areAnagrams("listen", "silent")); // Output: true
console.log(areAnagrams("hello", "world")); // Output: false
