
const giveAnswer=({nums, target})=>{

    for(let i=0; i < nums.length; i++ ){
        for(let j= i+1; j < nums.length ; j++){
            if (nums[i] + nums[j] === target) {
                return [i , j]
            }
        }

    }

}
const nums = [2, 7, 11, 15]
const target = 9
console.log(giveAnswer({nums,target}))

// Output: [0, 1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].