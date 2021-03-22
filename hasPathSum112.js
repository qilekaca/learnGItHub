// 判断二叉树是否存在路径和
// 通过深度优先遍历去寻找是否存在这条路径
// 首先判断当前的节点是否是叶子结点，如果不是叶子节点就去遍历递归其所有子节点
// 传递的参数就是sum减去当前节点的值
// 如果当前节点是叶子结点，判断参数sum是否等于当前节点的值，如果想等就返回true
// NOTE: 返回true / false
var hasPathSum = function (root, targetSum) {
  if (root === null) return false
  if (root.left === null && root.right === null && root.val === targetSum)
    return true
  return (
    hasPathSum(root.left, targetSum - root.value) ||
    hasPathSum(root.right, targetSum - root.value)
  )
}

var hasPathSum = function (root, sum) {
  if (root === null) return false
  // 判断节点为叶子节点
  if (root.left === null && root.right === null) return root.val === sum
  sum = sum - root.val
  return hasPathSum(root.left, sum) || hasPathSum(root.right, sum)
}

// 找到符合这个target的路径
// 返回这条路径
function pathSum(root, sum) {
  var res = [],
    path = []
  function dfs(root) {
    if (root) {
      path.push(root.val)
      if (root.left) {
        dfs(root.left)
      }
      if (root.right) {
        dfs(root.right)
      }
      var t = path.reduce((total, cur) => {
        return total + cur
      }, 0)
      if (t === sum && !root.left && !root.right) {
        res.push(path.slice())
      }
      path.pop()
    }
  }
  dfs(root)
  return res
}
