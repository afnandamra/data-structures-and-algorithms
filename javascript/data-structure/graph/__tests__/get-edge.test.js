'use strict';

const Graph = require('../graph');
const getEdge = require('../get-edge');

const graph = new Graph();

let Pandora = graph.addVertex('Pandora');
let Metroville = graph.addVertex('Metroville');
let Narnia = graph.addVertex('Narnia');
let Arendelle = graph.addVertex('Arendelle');
let Naboo = graph.addVertex('Naboo');
let Monstropolis = graph.addVertex('Monstropolis');

graph.addEdge(Pandora, Arendelle, 150);
graph.addEdge(Pandora, Metroville, 82);
graph.addEdge(Metroville, Arendelle, 99);
graph.addEdge(Narnia, Metroville, 37);
graph.addEdge(Metroville, Naboo, 26);
graph.addEdge(Narnia, Naboo, 250);
graph.addEdge(Metroville, Monstropolis, 105);
graph.addEdge(Monstropolis, Naboo, 73);
graph.addEdge( Arendelle,Monstropolis, 42);

const graph2 = new Graph();
const Herbalife = graph2.addVertex('Herbalife');

describe('Get Edge Test', () => {
  it('should return true and the weight if a path exists', () => {
    expect(getEdge(graph, [Pandora, Metroville])).toEqual('true, $82');
    expect(getEdge(graph, [Arendelle, Monstropolis, Naboo])).toEqual('true, $115');
  });
  it('should retrun false if a path doesn\'t exist', () => {
    expect(getEdge(graph, [Naboo, Pandora])).toBe('false, $0');
    expect(getEdge(graph, [Narnia, Arendelle, Naboo])).toBe('false, $0');
  });
  it('should return false for invalid nodes', () => {
    expect(getEdge(graph, [Naboo, Herbalife])).toBe('false, $0');
  });
});
