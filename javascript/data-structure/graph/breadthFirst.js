'use strict';

const { Queue } = require('../stacksAndQueues/stacks-and-queues');
const Graph = require('./graph');

class BreadthFirst extends Graph {
  // Breadth-first: uses a queue to track where you've been.
  breadth(startingNode) {
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

module.exports = BreadthFirst;
