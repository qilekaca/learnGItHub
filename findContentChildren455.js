// 首先对数组进行排序
// gi <= si gi++

// var findContentChildren = function (g, s) {
//   g.sort((a, b) => a - b)
//   s.sort((a, b) => a - b)
//   let gi = 0,
//     si = 0
//   while (gi < g.length && si < s.length) {
//     if (g[gi] <= s[si++]) gi++
//   }
//   return gi
// }

// 计算两个数组的交集
// [1,2,2,1] [2,2] [2]
// [4,9,5] [9,4,9,8,4] [9,4]
let a1 = [4, 9, 5, 2]
let a2 = [9, 4, 9, 8, 4, 2, [1, 2, 2, 1] ]
let a3 = [1, 2, 2, 1]
let a4 = [2, 2]
// const fn = (a1, a2) => {
//   return [...new Set(a1.filter((a) => a2.includes(a)))]
// }

// console.log(fn(a1,a2));

// 计算多个数组的交集
// 判断数据类型的方法
// typeof
// instanceof 判断对象类型 new Number(123) instanceof Number true
// Number(123) instance Number false
// .constructor
// Object.prototype.toString.call()
// const fn = (...args) => {
//   return [
//     ...new Set(
//       args.reduce((result, arg) => {
//         return result.filter((item) => arg.includes(item))
//       })
//     )
//   ]
// }

// 将数组中所有的元素加和
// const fn = (...arr) => {
//   return arr.reduce((acc, cur) => {
//     return acc.concat(cur)
//   }, [])
// }

// console.log(fn(a1, a2))


// 找出数组中只出现过一次的元素
// let nums = [9,1,7,9,7,9,7]
// var singleNumber = function(nums) {
//     // 遍历 使用map保存元素出现的次数
//     let map = new Map()
//     for (item of nums) {
//         if (map.has(item)) {
//             let value = map.get(item)
//             map.set(item, ++value)
//             if (map.get(item) === 3) map.delete(item)
//         } else {
//             map.set(item, 1)
//         }
//     }
//     // 
//     return [...map.keys()].shift()
// };
// console.log(singleNumber(nums));






