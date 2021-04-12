'use strict';

const {
  Queue,
} = require('../../data-structure/stacksAndQueues/stacks-and-queues');

class AnimalShelter {
  constructor() {
    this.cat = new Queue();
    this.dog = new Queue();
    this.animals = new Queue();
  }

  enqueue(animal) {
    if (animal === 'cat' || animal === 'dog') {
      if (animal === 'cat') this.cat.enqueue(animal);
      else if (animal === 'dog') this.dog.enqueue(animal);
      this.animals.enqueue(animal);
    } else return 'This shelter only shelters dogs and cats';
  }

  dequeue(pref) {
    if (pref) {
      if (pref === 'cat') {
        if (this.animals.peek() === 'cat') this.animals.dequeue();
        return this.cat.dequeue();
      } else if (pref === 'dog') {
        if (this.animals.peek() === 'dog') this.animals.dequeue();
        return this.dog.dequeue();
      } else return null;
    } else {
      if (this.animals.peek() === 'cat') this.cat.dequeue();
      else if(this.animals.peek() === 'dog') this.dog.dequeue();
      return this.animals.dequeue();
    }
  }
}

module.exports = AnimalShelter;
