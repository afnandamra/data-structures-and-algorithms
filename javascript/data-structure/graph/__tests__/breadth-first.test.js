'use strict';

const BreadthFirst = require('../breadthFirst');
const Vertex = require('../vertex');

describe('Graph Breadth Test', () => {
  it('should return all nodes breadth first properly', () => {
    const graph = new BreadthFirst();

    const ten = new Vertex(10);
    const two = new Vertex(2);
    const six = new Vertex(6);
    const three = new Vertex(3);
    const seven = new Vertex(7);
    const eight = new Vertex(8);

    const expectedSet = new Set();
    expectedSet.add(ten);
    expectedSet.add(two);
    expectedSet.add(six);
    expectedSet.add(three);
    expectedSet.add(seven);
    expectedSet.add(eight);

    graph.addVertex(ten);
    graph.addVertex(two);
    graph.addVertex(six);
    graph.addVertex(three);
    graph.addVertex(seven);
    graph.addVertex(eight);

    graph.addEdge(ten, two);
    graph.addEdge(ten, six);
    graph.addEdge(ten, three);
    graph.addEdge(ten, seven);
    graph.addEdge(two, seven);
    graph.addEdge(six, seven);
    graph.addEdge(six, eight);
    graph.addEdge(three, eight);
    graph.addEdge(eight, seven);
    // expect(graph.breadth(ten)).toEqual([10, 2, 6, 3, 7, 8]);
    expect(graph.breadth(ten)).toEqual(expectedSet);
  });
  it('should return all nodes breadth first properly', () => {
    const graph = new BreadthFirst();

    const Pandora = new Vertex('Pandora');
    const Arendelle = new Vertex('Arendelle');
    const Metroville = new Vertex('Metroville');
    const Monstroplolis = new Vertex('Monstroplolis');
    const Narnia = new Vertex('Narnia');
    const Naboo = new Vertex('Naboo');

    const expectedSet = new Set();
    expectedSet.add(Pandora);
    expectedSet.add(Arendelle);
    expectedSet.add(Metroville);
    expectedSet.add(Monstroplolis);
    expectedSet.add(Narnia);
    expectedSet.add(Naboo);

    graph.addVertex(Pandora);
    graph.addVertex(Arendelle);
    graph.addVertex(Metroville);
    graph.addVertex(Monstroplolis);
    graph.addVertex(Narnia);
    graph.addVertex(Naboo);

    graph.addEdge(Pandora, Arendelle);
    graph.addEdge(Arendelle, Metroville);
    graph.addEdge(Arendelle, Monstroplolis);
    graph.addEdge(Metroville, Monstroplolis);
    graph.addEdge(Metroville, Narnia);
    graph.addEdge(Metroville, Naboo);
    graph.addEdge(Monstroplolis, Naboo);
    graph.addEdge(Narnia, Naboo);

    expect(graph.breadth(Pandora)).toEqual(expectedSet);
  });
});
