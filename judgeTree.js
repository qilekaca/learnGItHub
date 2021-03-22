// 判断对称二叉树
const isSymmetric = function (root) {
  if (!root) return true
  var isEqual = function (left, right) {
    if (!left && !right) return true
    if (!left || !right) return false
    return (
      left.value === right.value &&
      isEqual(left.left, right.right) &&
      isEqual(left.right, right.left)
    )
  }
  return isEqual(root.left, root.right)
}
