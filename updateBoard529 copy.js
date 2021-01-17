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

var updateBoard = function (board, click) {
  const m = board.length
  const n = board[0].length
  const dx = [1, 1, 1, -1, -1, -1, 0, 0]
  const dy = [1, 0, -1, 0, 1, -1, 1, -1]
  const inBound = (x, y) => x >= 0 && x < m && y >= 0 && y < n

  function dfs(x, y) {
    if (!inBound(x, y) || board[x][y] != 'E') return
    let count = 0
    for (let i = 0; i < 8; i++) {
      const nx = x + dx[i]
      const ny = y + dy[i]
      if (inBound(nx, ny) && board[nx][ny] == 'M') {
        count++
      }
    }
    if (count == 0) {
      board[x][y] = 'B'
      for (let i = 0; i < 8; i++) {
        dfs(x + dx[i], y + dy[i])
      }
    } else {
      board[x][y] = count + ''
    }
  }

  const [cx, cy] = click
  if (board[cx][cy] == 'M') {
    board[cx][cy] = 'X'
  } else {
    dfs(cx, cy)
  }
  return board
}

console.log(updateBoard(board, click))
