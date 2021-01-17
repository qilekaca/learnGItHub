const land = [
  [0, 2, 1, 0],
  [0, 1, 0, 1],
  [1, 1, 0, 1],
  [0, 1, 0, 1]
]

var pondSizes = function (land) {
  let size
  function dfs(row, col) {
    if (row < 0 || row >= land.length || col < 0 || col >= land[0].length) {
      return
    }
    if (land[row][col] === 0) {
      land[row][col] = 1
      size++
      dfs(row - 1, col)
      dfs(row + 1, col)
      dfs(row - 1, col - 1)
      dfs(row + 1, col + 1)
      dfs(row - 1, col + 1)
      dfs(row + 1, col - 1)
      dfs(row, col - 1)
      dfs(row, col + 1)
    }
  }
  const res = []
  for (let row = 0; row < land.length; row++) {
    for (let col = 0; col < land[0].length; col++) {
      if (land[row][col] === 0) {
        size = 0
        dfs(row, col)
        res.push(size)
      }
    }
  }
  res.sort((a, b) => a - b)
  return res
}

console.log(pondSizes(land))
