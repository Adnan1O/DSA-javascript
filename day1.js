var demo = "red , and blue";
//return in reverse order
function reverseOrder(demo) {
    let reverse = ""
    for(let i = demo.length - 1 ; i >= 0; i--){
        reverse += demo[i];
    }
    return reverse;
    
}
var demo = "red , and blue";
console.log(reverseOrder(demo));

function rev (demo){
    return demo.split('').reverse().join('');
}
console.log(rev(demo));


//find the longest word
function longestWords (sentence){
    const words = sentence.split(" ");
    let longestword = '';
   words.map((word =>{
    if(word.length > longestword.length){
        longestword = word;
    }
   }

))
return longestword
}
console.log(longestWords("i hate you bogilal"))


// find palindrome is the word same as backwords


function isPalindrome(word){
    let reverseWord = word.split('').reverse().join('');
    console.log(reverseWord)
   return word === reverseWord 
  
}


console.log(isPalindrome("racecar"))

function removeDuplicate(array){
    let newArray=[]
    for (let i = 0; i < array.length ;  i++){
        if (newArray.indexOf(array[i]) === -1){
            newArray += array[i]
        }
    }
    return newArray
}

function removeDuplicate(arr){
    return [...new Set(arr)]
}

console.log(removeDuplicate([1,2,3,4,5,5,6,6]))

function areAnagram(a1,a2){
    const sort1 = a1.split("").sort().join("")
    const sort2 = a2.split("").sort().join("")
    return sort1 === sort2
}



console.log(areAnagram("listen", "silent"))
