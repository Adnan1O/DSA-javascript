
function countVowels(sentence){
    
    const vowels = ['a', 'e', 'i', 'o', 'u']
    var vowelsCount = 0;
    var words = []
   for(let sen of sentence.toLowerCase()){
    if(vowels.includes(sen)){
        vowelsCount ++;
        words.push(sen)
    }
   }
return {vowelsCount,words }

}

console.log(countVowels("Hello, world"))


function findLargestNumber(arr){
    var largestNumber = arr[0]
    arr.map((ar =>{
        if (ar > largestNumber) {
            largestNumber = ar
        }
    }))
    return largestNumber
}

console.log(findLargestNumber([4,5,8,6,3]))

function isPrime(num){
    for(let i =2; i <= num/2; i++){
        if (num % i === 0) {
            return false
        }
    }
    return true
}
console.log(isPrime(3))
console.log(isPrime(10))

function factorial(num){
    if(num === 0){
        return 1;
    }
    let fact=1
    for (let i =1; i <= num; i++){
        fact*= i
    }
    return fact
}

console.log(factorial(5))


function removeSpace(string){
const removedspaces = string.replace(/\s+/g,'');
return removedspaces
}

const string = " interview,   me";
console.log(removeSpace(string))
