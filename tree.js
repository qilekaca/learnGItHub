import { Compare, defaultCompare } from './util'
// 创建二叉树
// 创建树的节点
class Node {
  constructor(key) {
    this.key = key
    this.left = null
    this.right = null
  }
}
// 二叉搜索树
class BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn
    this.root = null
  }
  // 向树中插入一个键
  insert(key) {
    if (this.root == null) {
      this.root = new Node(key)
    } else {
      this.insertNode(this.root, key)
    }
  }
  // 插入节点
  insertNode(node, key) {
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      if (node.left == null) {
        node.left = new Node(key)
      } else {
        this.insertNode(node.left, key)
      }
    } else {
      if (node.right == null) {
        node.right = new Node(key)
      } else {
        this.insertNode(node.right, key)
      }
    }
  }
  // 中序遍历
  inOrderTraverse(callback) {
    this.inOrderTraverseNode(this.root, callback)
  }
  inOrderTraverseNode(node, callback) {
    if (node != null) {
      this.inOrderTraverseNode(node.left, callback)
      callback(node.key)
      this.inOrderTraverseNode(node.right, callback)
    }
  }
  bfs(callback) {
    this.bfsNode(this.root, callback)
  }
  bfsNode(node, callback) {
    let res = []
    let queue = []
    queue.push(node)
    while(queue.length > 0) {
      let n = queue.length
      let level = []
      for (let i = 0; i < n; ++i) {
        node = queue.shift()
        level.push(node.key)
        if (node.left != null) {
          queue.push(node.left)
        }
        if (node.right != null) {
          queue.push(node.right)
        }
      }
      res.push(level)
    }
    if (callback) {
      callback(res)
    }
  }
}

// 二叉树常用的方法
// insert 向树中插入一个新的键
// search 在树中查找一个新的键。如果节点存在，则返回true。如果不存在则返回false
// inOrderTraverse 通过中序遍历方式遍历所有节点
// preOrderTraverse 通过先序遍历方式遍历所有的节点
// postOrderTraverse 通过后序遍历方式遍历所有节点
// min 返回树中最小的键/值
// max 返回树中最大的键/值
// remove 从树中移除某个键

const tree = new BinarySearchTree()
tree.insert(11)
tree.insert(7)
tree.insert(15)
tree.insert(5)
tree.insert(3)
tree.insert(9)
tree.insert(8)
tree.insert(10)
tree.insert(13)
tree.insert(12)
tree.insert(14)
tree.insert(20)
tree.insert(18)
tree.insert(25)
tree.insert(6)

// 打印节点
const printNode = value => console.log(value)
// tree.inOrderTraverse(printNode)
tree.bfs(printNode)


