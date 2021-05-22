'use strict';

let {Graph, Vertex} = require('../graph');

describe('Graph Test', () => {
  const graph = new Graph();

  const one = new Vertex(1);
  const two = new Vertex(2);
  const three = new Vertex(3);
  graph.addVertex(one);
  graph.addVertex(two);

  it('should add a node to the graph properly', () => {
    expect(graph.addVertex(one).value).toBe(1);
  });

  it('should add an edge to the graph properly', () => {
    let edge = graph.addEdge(one, two);
    expect(edge.vertex).toBe(two);
  });

  it('should get neighbors of a valid node', () => {
    let neighbors = graph.getNeighbors(one);
    expect(neighbors).toBeDefined();
    expect(neighbors[0].vertex).toBe(two);
  });

  it('should throw an error if tried to add or get a node that is not in the graph', () => {
    expect(graph.addEdge(one, three)).toBe('INVALID NODE');
    expect(graph.getNeighbors(three)).toBe('INVALID NODE');
  });

  it('should get the graph size properly', () => {
    let graphSize = graph.getSize();
    expect(graphSize).toBeDefined();
    expect(graphSize).toEqual(2);
  });

  it('should return null if you get size of an empty graph', () => {
    let newGraph = new Graph();
    let emptyGraph = newGraph.getSize();
    expect(emptyGraph).toBeNull();
  });

  it('should get all the nodes in a graph properly', () => {
    let nodes = graph.getNodes();
    expect(nodes).toBeDefined();
    for (const [vertex] of nodes) {
      expect(vertex).toHaveProperty('value');
    }
  });
});
