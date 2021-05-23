'use strict';

const Edge = require('./edge');

class Graph {
  constructor() {
    this._adjacencyList = new Map();
  }

  addVertex(vertex) {
    this._adjacencyList.set(vertex, []);
    return vertex;
  }

  addEdge(startVertex, endVertex, weight) {
    if (
      !this._adjacencyList.has(startVertex) ||
      !this._adjacencyList.has(endVertex)
    ) {
      return 'INVALID NODE';
      // throw new Error('INVALID NODE');
    } else {
      const adjacencies = this._adjacencyList.get(startVertex);
      const edge = new Edge(endVertex, weight);
      adjacencies.push(edge);
      return edge;
    }
  }

  getNeighbors(vertex) {
    if (!this._adjacencyList.has(vertex)) {
      return 'INVALID NODE';
      // throw new Error('INVALID NODE');
    } else {
      return this._adjacencyList.get(vertex);
    }
  }

  getNodes() {
    return this._adjacencyList.entries();
  }

  getSize() {
    return this._adjacencyList.size > 0 ? this._adjacencyList.size : null;
  }

  printAll() {
    for (const [vertex, edge] of this._adjacencyList.entries()) {
      console.log([vertex, edge]);
    }
  }
}

module.exports = Graph;
