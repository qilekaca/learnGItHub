import { Compare, defaultCompare } from './util.mjs'

// 树的节点
class Node {
  constructor(key) {
    this.key = key
    this.left = null
    this.right = null
  }
}

// 创建一棵二叉树
class BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    // 用来比较节点之
    this.compareFn = compareFn
    // Node类型的根节点
    this.root = null
  }

  // insert
  // search
  // inOrderTraverse
  // preOrderTraverse
  // postOrderTraverse
  // min
  // max
  // remove
  // 插入节点
  insert(key) {
    if (this.root == null) {
      this.root = new Node(key)
    } else {
      this.insertNode(this.root, key)
    }
  }

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

  search(key) {
    return this.searchNode(this.root, key) // {1}
  }

  searchNode(node, key) {
    if (node == null) {
      // {2}
      return false
    }
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      // {3}
      return this.searchNode(node.left, key) // {4}
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      // {5}
      return this.searchNode(node.right, key) // {6}
    } else {
      return true // {7}
    }
  }

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
}

const tree = new BinarySearchTree()
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

console.log(tree.search(10))
// const print = value => console.log(value)
// tree.inOrderTraverse(print)
