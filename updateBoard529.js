/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
const board = [
  ['E', 'E', 'E', 'E', 'E'],
  ['E', 'E', 'M', 'E', 'E'],
  ['E', 'E', 'E', 'E', 'E'],
  ['E', 'E', 'E', 'E', 'E']
]

const click = [3, 0]
// var updateBoard = function (board, click) {
//   const dic = [
//     [-1, 0],
//     [-1, 1],
//     [0, 1],
//     [1, 1],
//     [1, 0],
//     [1, -1],
//     [0, -1],
//     [-1, -1]
//   ]
//   // 查看周围的雷
//   function searchAround(row, col) {
//     let count = 0
//     for (let e of dic) {
//       console.log(e)
//       if (0 <= row + e[0] < board.length && 0 <= col + e[1] < board[0].length) {
//         if (board[row + e[0]][col + e[1]] === 'M') {
//           count++
//         }
//       }
//     }
//     return count
//   }
//   function dfs(row, col) {
//     if (row < 0 || row >= board.length || col < 0 || col >= board[0].length) {
//       return
//     }
//     if (board[row][col] !== 'E') {
//       return
//     }
//     let count = searchAround(row, col)
//     if (count != 0) {
//       board[row][col] = count
//       return
//     } else {
//       board[row][col] = 'B'
//       for (let e of dic) {
//         dfs(row + e[0], col + e[1])
//       }
//     }
//   }
//   if (board[click[0]][click[1]] === 'M') {
//     board[click[0]][click[1]] = 'X'
//     return board
//   } else {
//     dfs(click[0], click[1])
//     return board
//   }
// }

const updateBoard = (board, click) => {
  const m = board.length
  const n = board[0].length
  const dx = [1, 1, 1, -1, -1, -1, 0, 0]
  const dy = [1, 0, -1, 0, 1, -1, 1, -1]
  const inBound = (x, y) => x >= 0 && x < m && y >= 0 && y < n // 辅助函数

  const update = (x, y) => {
    if (!inBound(x, y) || board[x][y] != 'E') return // 不在界内或不是E，直接返回
    let count = 0
    for (let i = 0; i < 8; i++) {
      // 统计周围雷的个数
      const nX = x + dx[i]
      const nY = y + dy[i]
      if (inBound(nX, nY) && board[nX][nY] == 'M') {
        count++
      }
    }
    if (count == 0) {
      // 如果周围没有雷，标记B，递归周围的点
      board[x][y] = 'B'
      for (let i = 0; i < 8; i++) {
        update(x + dx[i], y + dy[i])
      }
    } else {
      board[x][y] = count + ''
    }
  }

  const [cX, cY] = click
  if (board[cX][cY] == 'M') {
    // 第一下就踩雷了
    board[cX][cY] = 'X'
  } else {
    update(cX, cY) // 开启dfs
  }
  return board
}

console.log(updateBoard(board, click))
