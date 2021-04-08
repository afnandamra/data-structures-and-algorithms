# Stacks and Queues

Creating methods for stacks and queues.

## Challenge

### Features

- Create a Node class that has properties for the value stored in the Node, and a pointer to the next node.

- Create a Stack class that has a top property. It creates an empty Stack when instantiated.
    - This object should be aware of a default empty value assigned to top when the stack is created.
    - Define a method called push which takes any value as an argument and adds a new node with that value to the top of the stack with an O(1) Time performance.
    - Define a method called pop that does not take any argument, removes the node from the top of the stack, and returns the node’s value.
      - Should raise exception when called on empty stack
    - Define a method called peek that does not take an argument and returns the value of the node located on top of the stack, without removing it from the stack.
      - Should raise exception when called on empty stack
    - Define a method called isEmpty that takes no argument, and returns a boolean indicating whether or not the stack is empty.

- Create a Queue class that has a front property. It creates an empty Queue when instantiated.
    - This object should be aware of a default empty value assigned to front when the queue is created.
    - Define a method called enqueue which takes any value as an argument and adds a new node with that value to the back of the queue with an O(1) Time performance.
  - Define a method called dequeue that does not take any argument, removes the node from the front of the queue, and returns the node’s value.
    - Should raise exception when called on empty queue
  - Define a method called peek that does not take an argument and returns the value of the node located in the front of the queue, without removing it from the queue.
    - Should raise exception when called on empty queue
  - Define a method called isEmpty that takes no argument, and returns a boolean indicating whether or not the queue is empty.
- Be sure to follow your languages best practices for naming conventions.

### Structure and Testing

Utilize the Single-responsibility principle: any methods you write should be clean, reusable, abstract component parts to the whole challenge.

Write tests to prove the following functionality:

1. Can successfully push onto a stack
2. Can successfully push multiple values onto a stack
3. Can successfully pop off the stack
4. Can successfully empty a stack after multiple pops
5. Can successfully peek the next item on the stack
6. Can successfully instantiate an empty stack
7. Calling pop or peek on empty stack raises exception
8. Can successfully enqueue into a queue
9. Can successfully enqueue multiple values into a queue
10. Can successfully dequeue out of a queue the expected value
11. Can successfully peek into a queue, seeing the expected value
12. Can successfully empty a queue after multiple dequeues
13. Can successfully instantiate an empty queue
14. Calling dequeue or peek on empty queue raises exception

![stacks-and-queues-test](../assets/stacks-and-queues-test.jpg)

## Approach & Efficiency

### Stacks
- Push: space O(1)/time O(1)
- Pop: space O(1)/time O(1)
- Peek: space O(1)/time O(1)
- isEmpty: space O(1)/time O(1)

### Queues
- Enqueue: space 0(1)/time O(1)
- Dequeue: space 0(1)/time O(1)
- Peek: space O(1)/time O(1)
- IsEmpty: space O(1)/time O(1)

## API

<!-- Description of each method publicly available to your Linked List -->

The Stack class code contains four methods:

1. **`push(value)`** Adds a node to the stack.
2. **`pop()`** Removes a node from the stack.
3. **`peek()`** Returns the stack's top value.
4. **`isEmpty()`** Checks if a stack is empty.

The Queue class code contains four methods:
1. **`enqueue(value)`** Adds a node to the queue.
2. **`dequeue()`** Removes a node from the queue.
3. **`peek()`** Returns the queue's front value.
4. **`isEmpty()`** Checks if a queue is empty.

## Solution

![image](../assets/DS5.jpg)

## Resources and Collaborators

- Code Fellows docs on [Stacks and Queues](https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-10/resources/stacks_and_queues.html).
- [visualgo](https://visualgo.net/en/list).
