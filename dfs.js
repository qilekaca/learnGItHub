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

const depthFirstSearch = (graph, callback) => {
  const vertices = graph.getVertices()
  const adjList = graph.getAdjList()
  const color = initializeColor(vertices)
  for (let i = 0; i < vertices.length; i++) {
    if (color[vertices[i]] === Colors.WHITE) {
      depthFirstSearchVisit(vertices[i], color, adjList, callback)
    }
  }
}

const depthFirstSearchVisit = (u, color, adjList, callback) => {
  color[u] = Colors.GREY
  if (callback) {
    callback(u)
  }
  const neighbors = adjList.get(u)
  for (let i = 0; i < neighbors.length; ++i) {
    const w = neighbors[i]
    if (color[w] === Colors.WHITE) {
      depthFirstSearchVisit(w, color, adjList, callback)
    }
  }
  color[u] = Colors.BLACK
}

const printVertex = (value) => console.log('Visited vertex: ' + value)

depthFirstSearch(graph, printVertex)
