'use strict';

const Graph = require('./graph');

class DepthFirst extends Graph {
  depth(startingNode) {
    if (!startingNode) return 'INVALID NODE';

    const visitedNodes = new Set();

    const _traverseNeighbors = (node) => {
      // Add the node to the Set
      visitedNodes.add(node);

      // Get all the node's neighbors
      const neighbors = this.getNeighbors(node);

      // Loop over all the neighbors
      for (let edge of neighbors) {
        // If the set doesn't have the node
        if (!visitedNodes.has(edge.vertex)) {
          // then run the following function again, which will add the node to the set and get the neighbor nodes and loop and repeat
          _traverseNeighbors(edge.vertex);
        }
      }
    };
    _traverseNeighbors(startingNode);
    // if we want the result as an array, we can do Array.from(visitedNodes.values())
    return visitedNodes.size > 0 ? visitedNodes : 'EMPTY GRAPH';
  }
}

module.exports = DepthFirst;
