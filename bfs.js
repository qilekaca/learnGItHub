// 使用color来标记节点
// WHITE 没有被访问
// GREY 被访问过，但未被探索
// BLACK 被访问过且被探索
const Colors = {
  WHITE: 0,
  GERY: 1,
  BLACK: 2
}

const initializeColor = (vertices) => {
  const color = {}
  for (let i = 0; i < vertices.length; ++i) {
    color[vertices[i]] = Colors.WHITE
  }
  return color
}

// 数组模拟队列 push 入队
// shift 出队

// -------------------------
const breadthFirstSearch = (graph, startVertex, callback) => {
  const vertices = graph.getVertices()
  const adjList = graph.getAdjList()
  const color = initializeColor(vertices)
  const queue = []
  queue.push(startVertex)
  while (queue.length > 0) {
    const u = queue.shift()
    const neighbors = adjList.get(u)
    color[u] = Colors.GREY
    for (let i = 0; i < neighbors.length; i++) {
      const w = neighbors[i]
      if (color[w] === Colors.WHITE) {
        color[w] = Colors.GREY
        queue.push(w)
      }
    }
    color[u] = Colors.BLACK
    if (callback) {
      callback(u)
    }
  }
}

const printVertex = (value) => console.log('Visited vertex: ' + value)
breadthFirstSearch(graph, myVertices[0], printVertex)
