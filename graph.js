class Graph {
  // 参数表示图是否有向
  constructor(isDirected = false) {
    this.isDirected = isDirected
    // 数组存储所有顶点的名字
    this.vertices = []
    // 用一个字典来存储邻接表
    this.adjList = new Map()
  }
  // 添加顶点的方法
  addVertex(v) {
    if (!this.vertices.includes(v)) {
      this.vertices.push(v)
      this.adjList.set(v, [])
    }
  }
  // 添加边
  addEdge(v, w) {
    // v 和 w 都需要有一个邻接表用来保存
    if (!this.adjList.get(v)) {
      this.addVertex(v)
    }
    if (!this.adjList.get(w)) {
      this.addVertex(w)
    }
    this.adjList.get(v).push(w)
    if (!this.isDirected) {
      this.adjList.get(w).push(v)
    }
  }
  // 返回顶点列表
  getVertices() {
    return this.vertices
  }
  // 返回邻接表
  getAdjList() {
    return this.adjList
  }
  // 添加一个打印的功能
  toString() {
    let s = ''
    for (let i = 0; i < this.vertices.length; i++) {
      s += `${this.vertices[i]} -> `
      const neighbors = this.adjList.get(this.vertices[i])
      for (let j = 0; j < neighbors.length; j++) {
        s += `${neighbors[j]} `
      }
      s += '\n'
    }
    return s
  }
}

const graph = new Graph()

const myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']

for (let i = 0; i < myVertices.length; ++i) {
  graph.addVertex(myVertices[i])
}

graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('A', 'D')
graph.addEdge('C', 'D')
graph.addEdge('C', 'G')
graph.addEdge('D', 'G')
graph.addEdge('D', 'H')
graph.addEdge('B', 'E')
graph.addEdge('B', 'F')
graph.addEdge('E', 'I')

// console.log(graph.toString())
// A -> B C D
// B -> A E F
// C -> A D G
// D -> A C G H
// E -> B I
// F -> B
// G -> C D
// H -> D
// I -> E

const Colors = {
  WHITE: 0,
  GREY: 1,
  BLACK: 2
}

const initializeColor = (vertices) => {
  const color = {}
  for (let i = 0; i < vertices.length; ++i) {
    color[vertices[i]] = Colors.WHITE
  }
  return color
}

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
// breadthFirstSearch(graph, myVertices[0], printVertex)

// ----------------------------
// 深度优先遍历
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

// depthFirstSearch(graph, printVertex)

// --------------------------------
// 使用bfs寻找最短路径
const BFS = (graph, startVertex) => {
    const vertices = graph.getVertices()
    const adjList = graph.getAdjList()
    const color = initializeColor(vertices)
    const queue = []
    const distances = {}
    const predecessors = {}
    queue.push(startVertex)

    for (let i = 0; i < vertices.length; ++i) {
        distances[vertices[i]] = 0
        predecessors[vertices[i]] = null
    }

    while(queue.length > 0) {
        const u = queue.shift()
        const neighbors = adjList.get(u)
        color[u] = Colors.GREY
        for (let i = 0; i < neighbors.length;  i++) {
            const w = neighbors[i]
            if (color[w] === Colors.WHITE) {
                color[w] = Colors.GREY
                distances[w] = distances[u] + 1
                predecessors[w] = u
                queue.push(w)
            }
        }
        color[u] = Colors.BLACK
    }
    return {
        distances,
        predecessors
    }
}
const shortestPathA = BFS(graph, myVertices[0])
// console.log(shortestPathA)

const fromVertex = myVertices[0]
for (let i = 1; i < myVertices.length; i++) {
    const toVertex = myVertices[i]
    const path = []
    for (let v = toVertex; v !== fromVertex; v = shortestPathA.predecessors[v]) {
        path.push(v)
    }
    path.push(fromVertex)
    let s = path.pop()
    while (path.length > 0) {
        s += ' - ' + path.pop() 
    }
    console.log(s)
}




















