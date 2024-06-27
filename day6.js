// Input: 123
// Output: 321

// Input: -123
// Output: -321

// Input: 120
// Output: 21

// const reverseIt=(num)=>{
//     const rev = num.toString().split('').reverse().join('')
//     return rev
// }
// console.log(reverseIt(123))


// function mergeInOrder({l1,l2}){
//     const newArray = l1.concat(l2).sort()
//     const sort = newArray.sort()
//     return newArray
// }


// const  l1 = [1, 2, 4]
// const  l2 = [1, 3, 4]
// console.log(mergeInOrder({l1,l2}))


const find=(q)=>{
    const sample ={'(':')', '[':']', '{':'}' }
    const split = q.split('')
    split.map((words,i =>{
        if (words[i].includes(sample)) {
            console.log("yes")
        }
        
    }))
        
    
}

setTimeout(()=>{
    console.log("object")
}, 100)

const q = "()[]{}"
console.log(find(q))

Input: "()"
Output: true

Input: "()[]{}"
Output: true

Input: "(]"