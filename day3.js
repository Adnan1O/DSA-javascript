
function mergeArray (arr){
   const merged = arr.reduce(
    (pre,cur)=> pre.concat(cur)
   )
   return merged
}


let arr = [[1,2], [3,4], [5,6]];

console.log(mergeArray(arr))


function sameValues(input1,input2){
   var sameValueObj ={}
   for(var key in input1){
      if(input1[key] === input2[key]){
         sameValueObj[key] = input1[key]
      }
   }
   return sameValueObj
}

const input1 = {a:1,b:3,c:6,d:5}
const input2 = {a:1,b:3,c:4,d:7}
console.log(sameValues(input1,input2))

function mergeAndSum(input1,input2) {
   var sum = {}
   for(var key in input1){
     sum[key] = input1[key]
   }
   for (var key in input2){
      if (key in sum) {
         sum[key] += input2[key]
      } else {
         sum[key] = input2[key]
      }
   }
   return sum
}

// const input1 = {a: 1, b: 3, c: 6};
// const input2 = {a: 2, b: 4, d: 7};

console.log(mergeAndSum(input1, input2));


// separate each word as a array
// const arr = ["i want", "to become a", "javascript developer"]
var mixedArr = arr.join(" ")
var eachWord = mixedArr.split(' ')
console.log(eachWord.length)