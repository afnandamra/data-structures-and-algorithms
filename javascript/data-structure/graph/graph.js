'use strict';

const { Queue } = require('../stacksAndQueues/stacks-and-queues');

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight = 0) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this._adjacencyList = new Map();
  }

  addVertex(vertex) {
    this._adjacencyList.set(vertex, []);
    return vertex;
  }

  addEdge(startVertex, endVertex, weight) {
    if (!this._adjacencyList.has(startVertex) || !this._adjacencyList.has(endVertex)) {
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

  // Breadth-first: uses a queue to track where you've been.
  breadth(startingNode) {
    if (!startingNode) return 'INVALID NODE';
    // Our queue class
    const queue = new Queue();
    // A set is an object that will only store unique keys.
    const visitedNodes = new Set();

    // let result = [];

    queue.enqueue(startingNode);
    visitedNodes.add(startingNode);
    // result.push(startingNode.value);

    while (!queue.isEmpty()) {
      // Remove the first item from the queue.
      const currentNode = queue.dequeue();
      // Get the neighbors of the current node.
      const neighbors = this.getNeighbors(currentNode);
      // Loop over all the neighbors.
      for (let neighbor of neighbors) {
        const neighborNode = neighbor.vertex;
        if (visitedNodes.has(neighborNode)) {
          // If the Set has the node that I'm looking for, continue on to the next node.
          continue;
        } else {
          // Otherwise, I haven't been there and I need to add it to the Set.
          visitedNodes.add(neighborNode);
          // Put it into the queue
          queue.enqueue(neighborNode);
          // result.push(neighborNode.value);
        }
      }
    }
    // console.log(result);
    // Return the Set, so that there is a list of all visited nodes.
    return visitedNodes;
  }
}

module.exports = {
  Vertex,
  Edge,
  Graph,
};
