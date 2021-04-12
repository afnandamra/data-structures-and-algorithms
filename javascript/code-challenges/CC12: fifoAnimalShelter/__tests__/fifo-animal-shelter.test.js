'use strict';

const AnimalShelter = require('../fifo-animal-shelter');
const shelter = new AnimalShelter();

describe('Animal Shelter Queue Test', () => {
  it('should instantiate an empty queue', () => {
    expect(shelter.dog.front).toBeNull();
    expect(shelter.cat.front).toBeNull();
  });
  it('should enqueue a cat', () => {
    let animal = 'cat';
    shelter.enqueue(animal);
    expect(shelter.cat.front.value).toEqual(animal);
    expect(shelter.dog.front).toBeNull();
    expect(shelter.animals.rear.value).toEqual(animal);
  });
  it('should enqueue a dog', () => {
    let animal = 'dog';
    shelter.enqueue(animal);
    expect(shelter.dog.front.value).toEqual(animal);
    expect(shelter.animals.rear.value).toEqual(animal);
  });
  it('should not enqueue any other animals', () => {
    let animal = 'parrot';
    expect(shelter.enqueue(animal)).toEqual(
      'This shelter only shelters dogs and cats'
    );
  });
  it('should dequeue from existing queue if there is a preferred animal', () => {
    let animal = 'cat';
    shelter.enqueue(animal);
    expect(shelter.cat.rear.value).toEqual(animal);
    expect(shelter.dequeue('cat')).toEqual('cat');
    expect(shelter.dequeue('dog')).toEqual('dog');
  });
  it('should return null if tried to dequeue other animals', () => {
    expect(shelter.dequeue('parrot')).toBeNull();
  });
  it('should dequeue from existing queue if there is no preferred animal', () => {
    expect(shelter.dequeue()).toBeDefined();
    let animal = 'dog';
    shelter.enqueue(animal);
    expect(shelter.dequeue()).toBeDefined();
  });
});
