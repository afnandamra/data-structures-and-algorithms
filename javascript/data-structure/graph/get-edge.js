'use strict';

function getEdge(graph, cityArray) {
  let totalCost = 0;
  let check = false;

  for (let i = 0; i < cityArray.length - 1; i++) {
    let neighbors = graph.getNeighbors(cityArray[i]);
    for (let j = 0; j <= neighbors.length - 1; j++) {
      if (cityArray[i + 1] === neighbors[j].vertex) {
        totalCost += neighbors[j].weight;
        check = true;
      }
    }
    if (check === false) {
      totalCost = 0;
      check = false;
      return `${check}, $${totalCost}`;
    }
  }

  return `${check}, $${totalCost}`;
}

module.exports = getEdge;
