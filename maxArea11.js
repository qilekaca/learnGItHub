// NOTE: 盛水最大的容器
function maxArea(arr) {
  let i = 0,
    j = arr.length - 1,
    res = 0
  while (i < j) {
    res =
      arr[i] < arr[j]
        ? Math.max(res, (j - i) * arr[i++])
        : Math.max(res, (j - i) * arr[j--])
  }
  return res
}
// 双指针 左指针向右移动 右指针向左移动
// 只有小的指针向前移动面积才有可能变大
// 大的指针移动面积肯定会变小