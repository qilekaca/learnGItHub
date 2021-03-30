// 分饼干
// g 胃口 [1,2,3]
// s 饼干 [1,1]
// 此时只能够满足一个孩子
// 思路：对g和s进行排序 从小到大
// 输出几个孩子
const fn = (a1, a2) => {
  a1.sort((a, b) => a - b)
  a2.sort((a, b) => a - b)
  let a1i = 0,
    a2i = 0
  while (a1i < a1.length && a2i < a2.length) {
    if (a1[a1i] <= a2[a2i++]) a1i++
  }
  return a1i
}
