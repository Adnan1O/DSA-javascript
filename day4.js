copyWithin
const arr= [1,2,3,4,5,6]
console.log(arr[1])
const result = arr.copyWithin(3,1,-1)
console.log(result)
[ 1, 2, 3, 2, 3, 4 ]

function valueChecker(string){
    const sample = {'{':'}', '[':']', '(':')' }
    const openB = Object.keys(sample)
    const closingB = Object.values(sample)
    for(let char of string){
        if(openB.includes(char)){
            console.log( sample(char))
        }
    }
}

console.log(valueChecker("{12322]3}"))

function valueChecker(string) {
    const sample = {'{':'}', '[':']', '(':')' };
    const stack = [];

    for (let char of string) {
        if (char in sample) {

            stack.push(char);
        } else if (Object.values(sample).includes(char)) {

            if (stack.length === 0) {
                return false; 
            }
            const last = stack.pop();
            if (sample[last] !== char) {
                return false; 
            }
        }
    }
    return stack.length === 0; 
}

console.log(valueChecker("{12322]3}")); // Output: false
console.log(valueChecker("{[12322]3}")); // Output: true
console.log(valueChecker("[{()}]")); // Output: true
console.log(valueChecker("{[}]")); // Output: false