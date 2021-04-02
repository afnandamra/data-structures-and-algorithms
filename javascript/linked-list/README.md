# Singly Linked List

Data Structures and Algorithms challenges that work with [singly linked lists](https://www.educative.io/edpresso/what-is-a-singly-linked-list).

1. [linked-list](https://github.com/afnandamra/data-structures-and-algorithms/tree/master/javascript/linked-list)

## Challenge

### Features

- Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.
- Within your LinkedList class, include a head property. Upon instantiation, an empty Linked List should be created.
  - Define a method called `insert` which takes any value as an argument and adds a new node with that value to the `head` of the list with an O(1) Time performance.
  - Define a method called `includes` which takes any value as an argument and returns a boolean result depending on whether that value exists as a Node's value somewhere within the list.
  - Define a method called `toString` which takes in no arguments and returns a string representing all the values in the Linked List, formatted as:
    - `"{ a } -> { b } -> { c } -> NULL"`
- Any exceptions or errors that come from your code should be semantic, capturable errors. For example, rather than a default error thrown by your language, your code should raise/throw a custom, semantic error that describes what went wrong in calling the methods you wrote for this lab.
- Be sure to follow your language/frameworks standard naming conventions.

### Structure and Testing

Utilize the Single-responsibility principle: any methods you write should be clean, reusable, abstract component parts to the whole challenge.

Write tests to prove the following functionality:

1. Can successfully instantiate an empty linked list
2. Can properly insert into the linked list
3. The head property will properly point to the first node in the linked list
4. Can properly insert multiple nodes into the linked list
5. Will return true when finding a value within the linked list that exists
6. Will return false when searching for a value in the linked list that does not exist
7. Can properly return a collection of all the values that exist in the linked list

![linked-list-test](../assets/linked-list.PNG)

## Approach & Efficiency

An explanation for my approach:

- Each Node always has at least `value` property and a `next` property, with the default value of `next` being `null`. Since this is a singly linked list, those are the only two properties I need. I will instantiate this class to build my Linked List.
- I used the approach below for `insert(value)` because regardless of the size of the linked list, to achieve O(1), we only need to grow our linked list by finding the head of the list and attaching our new node to the head.

**Insert: space O(1)/time O(1)**

- I used the approach below for `includes(value)` because if the head of the list evaluates to `false`, none of the code block needs to run, and the method can terminate by returning `false`. This method achieves O(n), since at most it might need to traverse the entire list to possibly find a match.

**Includes: space O(n)/time O(n)**

- `toString()` requires a big O of O(n) because we must visit every node in the list to read its value property and insert it into the output string.

**toString: space O(n)/time O(n)**

## API

<!-- Description of each method publicly available to your Linked List -->

The linked list code contains two classes, Node class, and LinkedList class, the second one contains these methods:

1. `insert` method: which takes any value as an argument and adds a new node with that value to the `head` of the list.
2. `includes` method: which takes any value as an argument and returns a boolean result depending on whether that value exists as a Node's value somewhere within the list.
3. `toString` method: which takes in no arguments and returns a string representing all the values in the Linked List, formatted as:
   - `"{ a } -> { b } -> { c } -> NULL"`
