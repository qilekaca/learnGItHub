let nums1 = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3
var merge = function (nums1, m, nums2, n) {
  // 暴力解法
  // nums1.splice(m)
  // nums2.splice(n)
  // nums1.push(...nums2)
  // nums1.sort((a, b) => a - b)
}
var merge = function (nums1, m, nums2, n) {
  // 设置一个指针，指针初始化指向nums1的末尾（根据#62，应该是index为 m+n-1 的位置，因为nums1的长度有可能更长）
  // 然后不断左移指针更新元素
  let current = m + n - 1;

  while (current >= 0) {
    // 没必要继续了
    if (n === 0) return;

    // 为了方便大家理解，这里代码有点赘余
    if (m < 1) {
      nums1[current--] = nums2[--n];
      continue;
    }

    if (n < 1) {
      nums1[current--] = nums1[--m];
      continue;
    }
    // 取大的填充 nums1的末尾
    // 然后更新 m 或者 n
    if (nums1[m - 1] > nums2[n - 1]) {
      nums1[current--] = nums1[--m];
    } else {
      nums1[current--] = nums2[--n];
    }
  }
};


merge(nums1, m, nums2, n)

console.log(nums1)
