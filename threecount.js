// 两数相加

let nums = [2,7,11,15]
let target = 29


function twoSum(nums, target) {
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i]
        } else {
            map.set(nums[i], i)
        }
    }
}

console.log(twoSum(nums, target));




















// TODO: 三数相加
function threeSum(nums) {
    let set = new Set()
    let result = []
    
}























