// import { Compare, defaultCompare } from './util.mjs'

class Graph {
  constructor(isDirected = false) {
    this.isDirected = isDirected // {1}
    this.vertices = [] // {2}
    this.adjList = new Dictionary() // {3}
  }
}

const grid = [
  ['1', '1', '1', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '0']
]

// grid.length

const numIslands = function (grid) {
  let count = 0
  function dfs(row, col) {
    if (
      row < 0 ||
      row > grid.length ||
      col < 0 ||
      col > grid[0].length ||
      grid[row][col] === '0'
    ) {
      return
    }
    grid[row][col] = '0'
    dfs(row - 1, col)
    dfs(row + 1, col)
    dfs(row, col - 1)
    dfs(row, col + 1)
  }
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; row < grid[0].length; col++) {
      if (grid[row][col] === '1') {
        count++
        dfs(row, col)
      }
    }
  }
  console.log(count)
}

// console.log(numIslands(grid))
numIslands(grid)
