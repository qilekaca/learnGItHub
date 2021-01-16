const grid = [
  ['1', '1', '1', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '0']
]

// grid.length

// const numIslands = function (grid) {
//   let count = 0
//   function dfs(row, col) {
//     if (
//       row < 0 ||
//       row >= grid.length ||
//       col < 0 ||
//       col >= grid[0].length ||
//       grid[row][col] === '0'
//     ) {
//       return
//     }
//     console.log('dfs内部')
//     grid[row][col] = '0'
//     dfs(row - 1, col)
//     dfs(row + 1, col)
//     dfs(row, col - 1)
//     dfs(row, col + 1)
//   }
//   for (let row = 0; row < grid.length; row++) {
//     for (let col = 0; row < grid[0].length; col++) {
//       if (grid[row][col] === '1') {
//         console.log('number++')
//         count++
//         dfs(row, col)
//       }
//     }
//   }
//   console.log(count)
//   return count
// }
// // console.log(numIslands(grid))
// numIslands(grid)

const numIslands = function (grid) {
  let count = 0
  function dfs(row, col) {
    if (
      row < 0 ||
      row > grid.length ||
      col < 0 ||
      col > grid[row].length ||
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
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === '1') {
        count++
        dfs(row, col)
      }
    }
  }
  console.log(count)
}

numIslands(grid)
